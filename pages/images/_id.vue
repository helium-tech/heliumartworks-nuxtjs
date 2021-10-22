<template>
  <section class="">
    <div class="outer__inner">
      <div class="section item">
        <div class="item__center center">
          <div class="item__bg mb-2">
            <div class="item__preview">
              <div class="image-content" @click="toggleImageModal">
                <img :src="image.thumb_image" :alt="image.title" />
              </div>
            </div>
            <!-- <div class="options">
              <div class="options__list">
                <button
                  class="
                    button-circle-stroke
                    options__button options__button_share
                    js-options-share
                  "
                  @click="toggleShareBox"
                >
                  <svg class="icon icon-share">
                    <use xlink:href="#icon-share"></use>
                  </svg>
                </button>
                <button
                  class="
                    button-circle-stroke
                    options__button options__button_favorite
                    active
                  "
                >
                  <svg class="icon icon-heart">
                    <use xlink:href="#icon-heart"></use>
                  </svg>
                </button>
              </div>
              <div
                class="options__box js-options-box"
                :class="{ active: isShareBoxActive }"
              >
                <div class="options__stage">Partager cette image</div>
                <div class="options__share share-btn" data-url="#">
                  <a class="options__direction btn-twitter" data-id="tw"
                    ><span>
                      <svg class="icon icon-twitter">
                        <use xlink:href="#icon-twitter"></use></svg></span></a
                  ><a class="options__direction btn-facebook" data-id="fb"
                    ><span>
                      <svg class="icon icon-facebook">
                        <use xlink:href="#icon-facebook"></use></svg></span
                  ></a>
                </div>
              </div>
            </div> -->

            <div class="item__tags">
              <div
                class="status-black item__category"
                :key="tag.id"
                v-for="tag in tags"
              >
              <nuxt-link
                :to="'/search?' + 'keyword=' + tag"
              >
                {{ tag }}
              </nuxt-link>
              </div>
            </div>

          </div>
          <div class="item__details mt-2">
            <h1 class="item__title h2 text-bold">{{ image.title }}</h1>
            <div class="item__text">{{ image.description }}</div>
            <div class="item__cost">
              <div class="old-price mr-2" v-if="isOffer === true">
                {{ image.price }} FCFA
              </div>
              <div class="status-stroke-green final-price item__price">
                {{
                  parseInt(image.offer_price) + parseInt(image.transaction_fees)
                }}
                FCFA
              </div>
            </div>
            <div class="item__counter" v-if="image.download_counter > 0">
              <span>Téléchargements :</span>
              <span class="font-600"> {{ image.download_counter }}</span>
            </div>
            <div class="item__counter">
              <span>Taille :</span>
              <span class="font-600"> {{ image.file_size }}</span>
            </div>
            <div class="item__counter">
              <span>Vues :</span>
              <span class="font-600"> {{ image.views }}</span>
            </div>
            <div class="item__counter">
              <span>Résolution :</span>
              <span class="font-600"> {{ image.resolution }}</span>
            </div>
            <div class="item__counter">
              <span>Format :</span>
              <span class="font-600"> {{ image.format }}</span>
            </div>
            <div class="item__btns">
              <a
                class="button item__button js-popup-open"
                href="#"
                @click="downloadFile(image)"
                v-if="isLoggedIn"
              >
                Télécharger
              </a>
              <a
                class="button item__button js-popup-open"
                href="#"
                v-else
                @click="toggleAchatModal"
              >
                Acheter
              </a>
              <a class="button-stroke item__button js-popup-open" href="#">
                Sélectionner
              </a>
            </div>
            <div class="item__control">
              <div class="item__head">
                <div class="item__avatar">
                  <figure class="avatar avatar-lg mr-2 bg-secondary">
                    <img src="img/avatar-1.png" alt="..." />
                  </figure>
                  <span class="receipt__check" v-if="isCertified === true">
                    <svg class="icon icon-check">
                      <use xlink:href="#icon-check"></use>
                    </svg>
                  </span>
                </div>
                <div class="item__description">
                  <nuxt-link
                    :to="'/u/' + image.user_id"
                    v-if="image.user != null"
                  >
                    <span class="font-600">Auteur :</span>
                    <span> {{ image.user.displayName }}</span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="center">
          <ImagesList :images="renderSimilarImages"/>
        </section>

      </div>
    </div>

    <!-- popup modal image nothing-->
    <div
      class="modal modal-image"
      :class="{ active: isModalImageActive }"
      id="modal-id"
    >
      <div class="popup popup_image flex-centered">
        <img :src="image.thumb_image" :alt="image.title" />

        <button
          title="Fermer"
          type="button"
          class="mfp-close"
          @click="toggleImageModal"
        >
          ×
        </button>
      </div>
    </div>

    <!-- popup modal achat -->
    <div class="modal" :class="{ active: isAchatModalActive }" id="modal-id">
      <div class="popup popup_login">
        <div class="signup" v-if="isRegister == true">
          <div class="login__item">
            <div class="login__title h3">S'inscrire</div>
            <div class="login__btns">
              <button class="button login__button" @click="signWithGoogle">
                <svg class="icon icon-google">
                  <use xlink:href="#icon-google"></use></svg
                ><span>Avec Google</span>
              </button>
            </div>
            <div class="login__note">Ou continuer avec email</div>
            <div class="subscription">
              <input
                class="subscription__input mb-2"
                type="email"
                name="email"
                placeholder="Saisir email"
                required
                v-model="email"
              />
              <input class="subscription__input mb-2" type="name" name="name" placeholder="Choisir un pseudonyme" required v-model="name">
              <input
                class="subscription__input mb-2 mt-2"
                type="password"
                name="password"
                placeholder="Saisir mot de passe"
                required
                v-model="password"
              />
              <input
                class="subscription__input mb-2 mt-2"
                type="password"
                name="password"
                placeholder="Confirmer mot de passe"
                required
                v-model="confirm"
              />
              <a
                class="btn btn-cta flex-centered text-bold mt-2"
                href="#"
                style="border-radius: 20px"
                @click="createAccountWithEmail"
              >
                S'inscrire
              </a>
            </div>
            <div class="login__foot">
              Avez vous déjà un compte?
              <a class="login__link" @click.prevent="swithConnexionMode">
                Se connecter
              </a>
            </div>
          </div>
        </div>
        <div class="login" v-else>
          <div class="login__item">
            <div class="login__title h3">
              Il semblerait que vous ne soyez pas connecté
            </div>
            <div class="login__btns">
              <button class="button login__button" @click="signWithGoogle">
                <svg class="icon icon-google">
                  <use xlink:href="#icon-google"></use></svg
                ><span>Avec Google</span>
              </button>
            </div>
            <div class="login__note">Ou avec email</div>
            <div class="subscription">
              <input
                class="subscription__input mb-2"
                type="email"
                name="email"
                placeholder="Saisir email"
                required
                v-model="email"
              />
              <input
                class="subscription__input mb-2 mt-2"
                type="password"
                name="password"
                placeholder="Saisir mot de passe"
                required
                v-model="password"
              />
              <a
                class="btn btn-cta flex-centered text-bold mt-2"
                href="#"
                style="border-radius: 20px"
                @click="connectWithEmail"
              >
                Se connecter
              </a>
            </div>
            <div class="login__foot">
              Vous n'avez pas de compte?
              <a class="login__link" @click.prevent="swithConnexionMode"
                >S'inscrire</a
              >
            </div>
          </div>
        </div>
        <button
          title="Fermer"
          type="button"
          class="mfp-close"
          @click="toggleAchatModal"
        >
          ×
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import AlertLogin from '~/components/AlertLogin.vue'
import axios from 'axios'
import firebase from 'firebase/app'
import { mapState, mapGetters } from 'vuex'
import ImagesList from '~/components/Lists/ImagesList.vue'
let url = 'https://heliumartworks.herokuapp.com/files'

export default {
  name: 'ImageContent',
  components: {
    AlertLogin,
    ImagesList
  },
  data() {
    return {
      email: '',
      password: '',
      confirm: '',
      name: '',

      image: {},
      tags: '',
      cats: '',
      isOffer: '',
      loading: false,
      isShareBoxActive: false,
      isAchatModalActive: false,
      isModalImageActive: false,
      isRegister: false,
      isCertified:  false,
    }
  },

  computed: {
    ...mapState({
      authUser: (state) => state.auth.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
    renderSimilarImages() {
      return this.$store.dispatch('images/searchImages', this.cats[0]);
    }
  },

  methods: {
    toggleAchatModal() {
      this.isAchatModalActive = !this.isAchatModalActive
    },

    toggleImageModal() {
      this.isModalImageActive = !this.isModalImageActive
    },

    swithConnexionMode() {
      this.isRegister = !this.isRegister
    },

    toggleShareBox() {
      this.isShareBoxActive = !this.isShareBoxActive
    },

    downloadFile(file) {
      let request_url =
        url + '/download?file_id=' + file.id + '&user_id=' + this.authUser.uid

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
            }
          else {
              //Voir ici : https://stackoverflow.com/questions/54978597/download-file-from-php-server-with-vuejs
              let download_url = data.data.download_url
              let file_id = data.data.file_id
              console.log(download_url)
              axios
                .get(download_url,
                  {responseType: 'blob'}
                  )
                .then((response) => {
                  const url = window.URL.createObjectURL(new Blob([response.data]));
                  const link = document.createElement('a');
                  link.href = url;
                  link.setAttribute('download', file_id);
                  document.body.appendChild(link);
                  link.click();
                })

                this.$vs.notification({
                  color: 'success',
                  position: 'top-right',
                  title: 'Téléchargement Effectué',
                  text: 'Le télechargement a été effectué avec succès. Continuer à accroitre votre créativité avec Helium Artworks',
                })
            }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    async signWithGoogle() {
      this.loading = true
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          this.loading = false
          this.isAchatModalActive = false
          const noti = this.$vs.notification({
            color: 'success',
            position: 'top-right',
            title: 'Connexion Réussi',
            text: 'Vous vous êtes connecté avec succès. Alors, créez un nouveau monde avec Artworks !',
          })
        })
        .catch((e) => {
          this.loading = false
          const noti = this.$vs.notification({
            color: 'danger',
            position: 'top-right',
            title: 'Erreur de connexion',
            text: error,
          })
        })
    },
    async connectWithEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      var isEmail = re.test(String(this.email).toLowerCase())
      if (isEmail == false) {
        const noti = this.$vs.notification({
          color: 'danger',
          position: 'top-right',
          title: 'Email Incorrect',
          text: "Veuillez saisir une adresse email valide !",
        })
        return
      }
      this.loading = true
      await this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          this.loading = false
          this.isAchatModalActive = false
          const noti = this.$vs.notification({
            color: 'success',
            position: 'top-right',
            title: 'Connexion Réussi',
            text: 'Vous vous êtes connecté avec succès. Alors, créez un nouveau monde avec Artworks !',
          })
        })
        .catch((error) => {
          this.loading = false
          const noti = this.$vs.notification({
            color: 'danger',
            position: 'top-right',
            title: 'Erreur de connexion',
            text: error,
          })
          return
        })
    },
    async createAccountWithEmail() {
      if (this.name.length < 3) {
        const noti = this.$vs.notification({
          color: 'danger',
          position: 'top-right',
          title: 'Nom trop court',
          text: 'Le nom que vous avez fourni est trop court ! Veuillez en choisir un autre',
        })
        return
      }
      if (this.password.length < 5) {
        const noti = this.$vs.notification({
          color: 'danger',
          position: 'top-right',
          title: 'Mot de passe trop court',
          text: 'Le mot de passe que vous avez fourni est trop court ! Veuillez en choisir un autre',
        })
        return
      }
      if (this.password != this.confirm) {
        const noti = this.$vs.notification({
          color: 'danger',
          position: 'top-right',
          title: 'Mot de passe non conforme',
          text: 'Le mot de passe que vous avez fourni n\'est pas conforme ! Veuillez le vérifier',
        })
        return
      }
      // if (this.remember != true) {
      //   const noti = this.$vs.notification({
      //     color: 'danger',
      //     position: 'top-right',
      //     title: "Accepter les conditions d'utilisation",
      //     text: "Vous devez lire et accepter les conditions d'utilisation de la plateforme avant de créer votre compte!",
      //   })
      //   return
      // }
      this.loading = true
      await this.$fire.auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          this.loading = false
          this.isAchatModalActive = false
        })
        .catch((error) => {
          this.loading = false
          const noti = this.$vs.notification({
            color: 'danger',
            position: 'top-right',
            title: 'Erreur de création de compte',
            text: error,
          })
          return
        })
    },
  },

  created() {
    //Changement de hook pour effectuer les requêtes ajax le plus tôt possible
    axios
      .get(url + '/slug/' + this.$route.params.id)
      .then((response) => {
        this.image = response.data
        this.tags = response.data.keywords[0].split(',')
        this.isOffer = response.data.offer
        this.cats = response.data.categories[0].split(',')
        this.isCertified = response.data.user.is_certified

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
  padding: 30px 0;
}
.item__center {
  display: flex;
  justify-content: center;
}
.item__bg {
  position: relative;
  flex-grow: 1;
  align-self: flex-start;
  margin-right: 96px;
  max-width: 40%;
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
  background: #23262f;
}
[class^='status'] {
  display: inline-block;
  padding: 0 8px;
  border-radius: 4px;
  text-transform: uppercase;
}
.item__category a {
	color: #fff !important;
}
.item__preview img {
  width: 100%;
  border-radius: 16px;
  cursor: zoom-in;
}
.item__title {
  margin-bottom: 8px;
}
.item__cost {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.item__cost .item__price:not(:last-child) {
  margin-right: 8px;
}
.item__price {
  font-size: 24px;
  line-height: 1.33333;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.item__text {
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 1.5;
  color: #777e90;
}
.item__tabs {
  margin-bottom: auto;
}
.item__control {
  margin-top: 32px;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 64px 64px -24px rgba(31, 47, 70, 0.12);
  border: 1px solid #e6e8ec;
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
  color: #777e90;
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
  color: #777e90;
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
  background: #fcfcfd;
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
  background: #fcfcfd;
  border: 1px solid #e6e8ec;
  box-shadow: 0px 32px 32px -8px rgba(31, 47, 70, 0.12);
  border-radius: 16px;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s;
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
  background: #e6e8ec;
  cursor: pointer;
  transition: all 0.2s;
}

.old-price {
  text-decoration: line-through;
}
.final-price {
  box-shadow: inset 0 0 0 2px#ffc71c;
  color: #ffc71c;
  background: none;
}

.modal-image.active {
  background-color: rgba(0, 0, 0, 0.9) !important;
}

@media (max-width: 840px) {
  .item__center{
  display: block;
  }
  .item__bg {
    margin-right: 0;
    max-width: 100%
  }
  .item__btns .item__button {
    flex: inherit;
    width: auto;
  }
  .item__details[data-v-032a055c] {
    display: block;
    width: auto;
  }
}
</style>
