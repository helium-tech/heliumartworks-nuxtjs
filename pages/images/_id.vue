<template>
  <section class="">
  <div class="outer__inner">
  <div class="section item">
    <div class="item__center center">
      <div class="item__bg">
        <div class="item__preview">
          <div class="item__categories">
            <div class="status-black item__category" v-key='tag.id' v-for="tag in tags">{{ tag }}</div>
          </div>

          <img
            :srcSet="image.thumb800"
            :src="image.thumb800"
            :alt="image.title"
          />
        </div>
        <div class="options">
          <div class="options__list">
            <button class="button-circle-stroke options__button options__button_share js-options-share"
              @click="toggleShareBox"
            >
              <svg class="icon icon-share">
                <use xlink:href="#icon-share"></use>
              </svg>
            </button>
            <button class="button-circle-stroke options__button options__button_favorite active">
              <svg class="icon icon-heart">
                <use xlink:href="#icon-heart"></use>
              </svg>
            </button>
          </div>
          <div class="options__box js-options-box" :class="{active: isShareBoxActive}">
            <div class="options__stage">Partager cette image</div>
            <div class="options__share share-btn" data-url="#"><a class="options__direction btn-twitter" data-id="tw"><span>
                  <svg class="icon icon-twitter">
                    <use xlink:href="#icon-twitter"></use>
                  </svg></span></a><a class="options__direction btn-facebook" data-id="fb"><span>
                  <svg class="icon icon-facebook">
                    <use xlink:href="#icon-facebook"></use>
                  </svg></span></a></div>
          </div>
        </div>
      </div>
      <div class="item__details">
        <h1 class="item__title h3">{{ image.title }}</h1>
        <div class="item__cost">
          <div class="item__price text-yellow">
            {{ parseInt(image.offer_price) + parseInt(image.transaction_fees) }} FCFA
        </div>
          <div class="status old-price" v-if="isOffer === true">
            {{ image.price }} FCFA
          </div>
        </div>
        <div class="item__text">{{ image.description }}</div>
        <div class="size mb-2">
          <span class="font-600">Taille :</span>
          <span> {{ image.file_size }}</span>
        </div>
        <div class="item__btns">
          <a class="button item__button js-popup-open" data-effect="mfp-zoom-in"
            href="#"
            @click="downloadFile(image)"
            v-if="isLoggedIn"
          >
            Télécharger
          </a>
          <a class="button item__button js-popup-open" data-effect="mfp-zoom-in"
            href="#"
            v-else
          >
            Se connecter pour télécharger
          </a>
          <a class="button-stroke item__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in">
            Sélectionner
          </a>
        </div>
        <div class="item__control">
          <div class="item__head">
            <div class="item__avatar">
              <figure class="avatar avatar-lg mr-2 bg-secondary">
              <img src="img/avatar-1.png" alt="..." />
              </figure>
              <span class="receipt__check">
                <svg class="icon icon-check">
                  <use xlink:href="#icon-check"></use>
                </svg>
              </span>
            </div>
            <div class="item__description">
                <nuxt-link :to="'/u/' + image.user_id" v-if="image.user != null">
                  <span class="font-600">Auteur :</span>
                  <span> {{ image.user.displayName }}</span>
                </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </section>
</template>

<script>
import AlertLogin from '~/components/AlertLogin.vue'
import axios from 'axios'
import { mapState, mapGetters } from 'vuex'
let url = 'https://heliumartworks.herokuapp.com/files'

export default {
  name: 'ImageContent',
  components: {
    AlertLogin,
  },
  data() {
    return {
      image: [],
      tags: '',
      isOffer: '',
      userInfo: '',
      isShareBoxActive: false,
    }
  },

  computed: {
    ...mapState({
      authUser: (state) => state.auth.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },

  methods: {
    downloadFile(file) {
      console.log(file)
      var request_url =
        url + '/download?file_id=' + file.id + '&user_id=' + this.authUser.uid
      console.log(request_url)

      axios
        .get(request_url)
        .then((data) => {
          data = data.data
          if (data.isSuccess == false) {
            this.$vs.notification({
              position: 'top-right',
              title: 'Solde insuffisant',
              text: data.message,
            })

            let returnUrl =
              'http://localhost:3000/images/' +
              this.image.slug +
              '?download=true'

            let payement_url =
              'https://heliumartworks.herokuapp.com/users/account/recharge?amount=550&user_id=' +
              this.authUser.uid +
              '&return_url=' +
              returnUrl

            console.log(payement_url)
            axios
              .post(payement_url)
              .then((data) => {
                console.log(data.data)
                window.open(data.data)
              })
              .catch((error) => {
                console.log(error)
              })
          } else {
            console.log(data)
            var download_url = data.data.download_url
            console.log(download_url)

            function onStartedDownload(id) {
              console.log(`Started downloading: ${id}`)
            }

            function onFailed(error) {
              console.log(`Download failed: ${error}`)
            }

            var downloading = browser.downloads.download({
              url: download_url,
              filename: 'my-image-again.png',
              conflictAction: 'uniquify',
            })

            downloading.then(onStartedDownload, onFailed)

            // axios({
            //   url: download_url,
            //   method: 'GET',
            //   responseType: 'blob',
            // }).then((response) => {
            //   var fileUrl = window.URL.createObjectURL(
            //     new Blob([response.data])
            //   )
            //   var fileLink = document.createElement('a')
            //   fileLink.href = fileUrl
            //   fileLink.setAttribute('download', this.image.original_file_id)

            //   fileLink.click()

            //   URL.revokeObjectURL(fileLink.href)
            // })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    toggleShareBox() {
      this.isShareBoxActive = !this.isShareBoxActive
    },
  },

  created() {
    //Changement de hook pour effectuer les requêtes ajax le plus tôt possible
    axios
      .get(url + '/slug/' + this.$route.params.id)
      .then((response) => {
        console.log(response.data)
        this.image = response.data
        this.tags = response.data.keywords[0].split(',')
        this.isOffer = response.data.offer
        this.userInfo = response.data.user
      })
      .catch((error) => {
        error = true
        this.errored = error
      })
      .finally(() => {
        var isDownload = this.$route.query.download

        if (isDownload === 'true') {
          var request_url =
            url +
            '/download?file_id=' +
            this.image.id +
            '&user_id=' +
            this.authUser.uid

          axios.get(request_url).then((data) => {
            var result = data.data

            var file_path = result.data.download_url

            // var a = document.createElement('A')
            // a.href = file_path
            // a.download = file_path.substr(file_path.lastIndexOf('/') + 1)
            // document.body.appendChild(a)
            // a.click()
            // document.body.removeChild(a)

            var link = document.createElement('a')
            link.download = this.image.title
            link.href = file_path
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            // delete link;
          })
        }
      })
  },
}
</script>

<style scoped>
.item {
	padding: 96px 0;
}
.item__center {
	display: flex;
}
.item__bg {
	position: relative;
	flex-grow: 1;
	align-self: flex-start;
	margin-right: 96px;
}
.item__details {
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	width: 384px;
}
.item__preview {
	position: relative;
}
.item__categories {
	position: absolute;
	top: 24px;
	left: 24px;
	display: flex;
	flex-wrap: wrap;
	margin: -8px 0 0 -8px;
}
.item__category {
	margin: 8px 0 0 8px;
}
.status-black {
	background: #23262F;
}
[class^="status"] {
	display: inline-block;
	padding: 0 8px;
	border-radius: 4px;
	font-size: 12px;
	line-height: 26px;
	font-weight: 700;
	text-transform: uppercase;
	color: #FCFCFD;
}
.item__preview img {
	width: 100%;
	border-radius: 16px;
}
.item__details {
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	width: 384px;
}
.item__title {
	margin-bottom: 8px;
}
.item__cost {
	display: flex;
	align-items: center;
	margin-bottom: 40px;
}
.item__cost .item__price:not(:last-child) {
	margin-right: 8px;
}
.item__price {
	font-size: 24px;
	line-height: 1.33333;
	font-weight: 600;
	letter-spacing: -.01em;
}
.item__text {
	margin-bottom: 40px;
	font-size: 16px;
	line-height: 1.5;
	color: #777E90;
}
.item__tabs {
	margin-bottom: auto;
}
.item__control {
	margin-top: 32px;
	padding: 24px;
	border-radius: 16px;
	box-shadow: 0px 64px 64px -24px rgba(31, 47, 70, 0.12);
	border: 1px solid #E6E8EC;
}
.item__head {
	display: flex;
	align-items: center;
}
.item__avatar {
	position: relative;
	flex-shrink: 0;
	width: 48px;
	height: 48px;
	margin-right: 16px;
}
.item__avatar > img {
	width: 100%;
	height: 100%;
	border-radius: 50%;
	-o-object-fit: cover;
	object-fit: cover;
}
.item__description {
	flex-grow: 1;
}
.item__info {
	font-size: 16px;
	line-height: 1.5;
	font-weight: 500;
	color: #777E90;
}
.item__currency {
	display: flex;
}

.item__btns {
	display: flex;
	margin: 32px -4px 0;
}
.item__btns .item__button {
	flex: 0 0 calc(50% - 8px);
	width: calc(50% - 8px);
	margin: 0 4px;
	padding: 0 8px;
}

.item__variants {
	margin-top: 32px;
	font-weight: 500;
	color: #777E90;
}

.item .options {
	position: absolute;
	top: auto;
	left: 50%;
	bottom: 24px;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}
.options__list {
	display: flex;
	padding: 8px;
	border-radius: 32px;
	background: #FCFCFD;
}
.options__button:not(:last-child) {
	margin: 0 24px 0 0;
}
.options__box {
	position: absolute;
	left: 50%;
	bottom: calc(100% + 8px);
	z-index: 2;
	width: 220px;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
	padding: 32px 16px;
	background: #FCFCFD;
	border: 1px solid #E6E8EC;
	box-shadow: 0px 32px 32px -8px rgba(31, 47, 70, 0.12);
	border-radius: 16px;
	text-align: center;
	visibility: hidden;
	opacity: 0;
	transition: all .2s;
}
.options__box.active {
	visibility: visible;
	opacity: 1;
}
.options__stage {
	margin-bottom: 24px;
	font-weight: 500;
}
.options__share {
	display: flex;
	justify-content: center;
}
.options__direction:not(:last-child) {
	margin-right: 24px;
}
.options__direction span {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	background: #E6E8EC;
	cursor: pointer;
	transition: all .2s;
}

@media (min-width: 840px) {

}
</style>
