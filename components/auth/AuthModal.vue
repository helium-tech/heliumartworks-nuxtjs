<template>
  <div>
    <!-- <vs-button @click="active=!active">
        Open Dialog
      </vs-button> -->

      <div class="header__item header__item_user"
        :class="{active: isUserTabActive}"
        v-if="isLoggedIn"
      >
        <button class="header__login" @click="toggleUserTab">
          <figure
            class="avatar"
            data-initial="HT"
          >
          <img src="img/avatar-1.png" alt="..." />
          </figure>
        </button>
        <div class="header__body">
          <div class="header__group">
              <div class="header__menu">
                <a class="header__link" href="#">
                <!-- <svg class="icon icon-comment">
                  <use xlink:href="#icon-comment"></use>
                </svg>Messages</a><a class="header__link" href="bookings-list.html">
                <svg class="icon icon-home">
                  <use xlink:href="#icon-home"></use>
                </svg>Bookings</a><a class="header__link" href="wishlists.html"> -->
                <svg class="icon icon-bag">
                  <use xlink:href="#icon-bag"></use>
                </svg>Ma sélection
              </a>
              </div>
              <!-- <div class="header__menu"><a class="header__link" href="list-your-property.html">
                <svg class="icon icon-building">
                  <use xlink:href="#icon-building"></use>
                </svg>List your property</a><a class="header__link" href="host-an-experience.html">
                <svg class="icon icon-flag">
                  <use xlink:href="#icon-flag"></use>
                </svg>Host an experience</a>
              </div> -->
          </div>
          <div class="header__btns">
            <nuxt-link to="/account" class="button button-small header__button">Mon compte</nuxt-link>
            <button class="button-stroke button-small header__button"
              @click="logout">
              Déconnexion
            </button>
          </div>
        </div>
      </div>
      <a class="header__login" data-effect="mfp-zoom-in"
        v-else
        @click="toggleModal"
        >
        <svg class="icon icon-user">
          <use xlink:href="#icon-user"></use>
        </svg>
      </a>

      <!-- Popup login-->
      <div class="modal" :class="{active: isModalActive}" id="modal-id">
      <div class="popup popup_login">
        <div class="signup"
          v-if="isRegister == true"
        >
          <div class="login__item">
            <div class="login__title h3">
              S'inscrire
            </div>
            <div class="login__btns">
              <button class="button login__button" @click="signWithGoogle" >
                <svg class="icon icon-google">
                  <use xlink:href="#icon-google"></use>
                </svg><span>Avec Google</span>
              </button>
            </div>
            <div class="login__note">Ou continuer avec email</div>
            <div class="subscription">
              <input class="subscription__input mb-2" type="email" name="email" placeholder="Saisir email" required v-model="email">
              <input class="subscription__input mb-2" type="name" name="name" placeholder="Choisir un pseudonyme" required v-model="name">
              <input class="subscription__input mb-2 mt-2" type="password" name="password" placeholder="Saisir mot de passe" required v-model="password">
              <input class="subscription__input mb-2 mt-2" type="password" name="password" placeholder="Confirmer mot de passe" required v-model="confirm">
              <a class="btn btn-cta flex-centered text-bold mt-2" href="#" style="border-radius: 20px;" @click="createAccountWithEmail">
                S'inscrire
              </a>
            </div>
            <div class="login__foot">Avez vous déjà un compte?
              <a class="login__link" @click.prevent="swithConnexionMode">
                Se connecter
              </a>
              </div>
          </div>
        </div>
        <div class="login" v-else>
          <div class="login__item">
            <div class="login__title h3">
              Se connecter
            </div>
            <div class="login__btns">
              <button class="button login__button" @click="signWithGoogle">
                <svg class="icon icon-google">
                  <use xlink:href="#icon-google"></use>
                </svg><span>Avec Google</span>
              </button>
            </div>
            <div class="login__note">Ou avec email</div>
            <div class="subscription">
              <input class="subscription__input mb-2" type="email" name="email" placeholder="Saisir email" required v-model="email">
              <input class="subscription__input mb-2 mt-2" type="password" name="password" placeholder="Saisir mot de passe" required v-model="password">
              <a class="btn btn-cta flex-centered text-bold mt-2" href="#" style="border-radius: 20px;" @click="connectWithEmail">
                Se connecter
              </a>
            </div>
            <div class="login__foot">Vous n'avez pas de compte?
              <a class="login__link" @click.prevent="swithConnexionMode">S'inscrire</a>
            </div>
          </div>
        </div>
        <button title="Fermer" type="button" class="mfp-close"
          @click="toggleModal"
          >×
        </button>
      </div>

    </div>

  </div>
</template>
  <script >
import firebase from 'firebase/app'
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapState({
      authUser: (state) => state.auth.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
  data: () => ({
    loading: false,
    active: false,
    isRegister: false,
    name: '',
    email: '',
    password: '',
    confirm: '',
    remember: false,
    isModalActive : false,
    isUserTabActive : false,
  }),
  methods: {
    toggleModal() {
      this.isModalActive = !this.isModalActive;
    },
    toggleUserTab() {
      this.isUserTabActive = !this.isUserTabActive;
    },
    swithConnexionMode() {
      this.isRegister = !this.isRegister
    },
    async signWithGoogle() {
      this.loading = true
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          this.loading = false
          this.isModalActive = false
          const noti = this.$vs.notification({
            color: 'success',
            position: 'top-right',
            title: 'Connexion Réussi',
            text: 'Vous avez été connecter avec succès. Alors, créer un nouveau monde avec Artworks !',
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
          text: "L'email que avez entrez est incorrect' ! Veuillez choisir un autre",
        })
        return
      }
      this.loading = true
      await this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          this.loading = false
          this.isModalActive = false
          const noti = this.$vs.notification({
            color: 'success',
            position: 'top-right',
            title: 'Connexion Réussi',
            text: 'Vous avez été connecter avec succès. Alors, créer un nouveau monde avec Artworks !',
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
          text: 'Le nom que vous avez fournis est trop court ! Veuillez choisir un autre',
        })
        return
      }
      if (this.password.length < 5) {
        const noti = this.$vs.notification({
          color: 'danger',
          position: 'top-right',
          title: 'Mot de passe trop court',
          text: 'Les mot de passe que vous avez fournis est trop court ! Veuillez choisir un autre',
        })
        return
      }
      if (this.password != this.confirm) {
        const noti = this.$vs.notification({
          color: 'danger',
          position: 'top-right',
          title: 'Mot de passe non conforme',
          text: 'Les mots de passe que vous avez fournis ne sont pas conformes ! Veuillez les vérifier',
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
          this.isModalActive = false
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

    async logout() {
      try {
        await this.$fire.auth.signOut()
      } catch (e) {
        alert(e)
      }
    },
  },

  watch: {
    '$route' () {
      this.isUserTabActive = false
    }
  }
})
</script>
<style scoped>

</style>
