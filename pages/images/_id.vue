<template>
  <section class="container p-relative">
    <div class="columns flex-centered pt-2rem">
      <div class="column flex-centered col-6 p-relative">
        <div class="image-container mb-2" @click="toggleModalImage">
          <img
            class="img-responsive img-fit-contain"
            :src="image.thumb800"
            :alt="image.title"
            style="width: 100%; height: 100%"
          />
        </div>

        <vs-dialog not-close auto-width blur not-padding v-model="isModalImageActive">
        <div class="con-image">
          <img :src="image.thumb800" :alt="image.title">
        </div>
      </vs-dialog>
      </div>

      <div class="column">
        <!-- <AlertLogin></AlertLogin> -->

        <h1 class="h4 text-bold">{{ image.title }}</h1>
        <div class="size mb-2">
          <span class="font-600">Description :</span>
          <span> {{ image.description }}</span>
        </div>
        <div class="size mb-2">
          <span class="font-600">Taille :</span>
          <span> {{ image.file_size }}</span>
        </div>
        <div>
          <span class="old-price h4 text-muted">{{ image.price }}</span>
          <span class="h2">{{
            parseInt(image.offer_price) + parseInt(image.transaction_fees)
          }}</span>
          <span class="text-muted h3"> FCFA</span>
        </div>
        <section class="">
          <button
            href="#"
            class="btn btn-cta-y mr-1 font-500"
            @click="downloadFile(image)"
            v-if="isLoggedIn"
          >
            Télécharger
          </button>
          <button href="#" class="btn btn-cta-y mr-1 font-500" v-else>
            Connectez vous pour télécharger cette image
          </button>
          <button href="#" class="btn btn-cta ml-2 font-500">
            Ajouter à ma sélection
          </button>
        </section>
        <div class="divider"></div>
        <div class="size mb-2">
          <span>
            <figure
              class="avatar avatar-lg mr-2 bg-secondary"
              data-initial="HT"
            >
              <img src="img/avatar-1.png" alt="..." />
            </figure>
          </span>
          <nuxt-link :to="'/u/' + image.user_id" v-if="image.user != null">
            <span class="font-600">Auteur :</span>
            <span> {{ image.user.displayName }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <h4 class="text-bold pt-2rem">Tags</h4>
    <!-- <span class="label mr-2" v-key='tag.id' v-for="tag in tags">{{ tag }}</span> -->

    <h4 class="text-bold pt-2rem">Images similaires</h4>
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
      image: {},
      tags: '',
      isModalImageActive: false,
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

    //Déclenche le popup image
    toggleModalImage() {
      if (this.isModalImageActive) {
        this.isModalImageActive = false
      } else {
        this.isModalImageActive = true
      }
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
.old-price {
  text-decoration: line-through;
}

.modal.modal-lg .modal-overlay {
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-container .modal-header {
  padding: 0.1rem;
}

.modal-container {
  max-height: 90vh;
}

.modal.modal-lg .modal-container {
  max-width: fit-content;
}

@media (min-width: 840px) {
  .image-container {
    width: 500px;
    height: 500px;
    border: solid 1px #dedede;
  }
}
</style>
