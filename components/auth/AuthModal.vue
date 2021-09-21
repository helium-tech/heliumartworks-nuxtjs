<template>
  <div>
    <!-- <vs-button @click="active=!active">
        Open Dialog
      </vs-button> -->

      <div class="header__item header__item_user js-header-item"
        v-if="isLoggedIn"
      >
        <button class="header__head js-header-head">
          <figure
            class="avatar avatar-lg"
            data-initial="HT"
          >
          <img src="img/avatar-1.png" alt="..." />
          </figure>
        </button>
        <div class="header__body js-header-body">
          <div class="header__group">
            <div class="header__menu"><a class="header__link" href="message-center.html">
                <svg class="icon icon-comment">
                  <use xlink:href="#icon-comment"></use>
                </svg>Messages</a><a class="header__link" href="bookings-list.html">
                <svg class="icon icon-home">
                  <use xlink:href="#icon-home"></use>
                </svg>Bookings</a><a class="header__link" href="wishlists.html">
                <svg class="icon icon-email">
                  <use xlink:href="#icon-email"></use>
                </svg>Wishlists</a></div>
            <div class="header__menu"><a class="header__link" href="list-your-property.html">
                <svg class="icon icon-building">
                  <use xlink:href="#icon-building"></use>
                </svg>List your property</a><a class="header__link" href="host-an-experience.html">
                <svg class="icon icon-flag">
                  <use xlink:href="#icon-flag"></use>
                </svg>Host an experience</a></div>
          </div>
          <div class="header__btns"><a class="button button-small header__button" href="account-setting.html">Account</a>
            <button class="button-stroke button-small header__button">Log out</button>
          </div>
        </div>
      </div>
      <a class="header__login js-popup-open" data-effect="mfp-zoom-in"
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
              <button class="button login__button">
                <svg class="icon icon-google">
                  <use xlink:href="#icon-google"></use>
                </svg><span>Avec Google</span>
              </button>
            </div>
            <div class="login__note">Ou continuer avec email</div>
            <div class="subscription">
              <input class="subscription__input mb-2" type="email" name="email" placeholder="Saisir email" required>
              <input class="subscription__input mb-2 mt-2" type="password" name="password" placeholder="Saisir mot de passe" required>
              <input class="subscription__input mb-2 mt-2" type="password" name="password" placeholder="Confirmer mot de passe" required>
              <a class="btn btn-cta flex-centered text-bold mt-2" href="#" style="border-radius: 20px;">
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
              <button class="button login__button">
                <svg class="icon icon-google">
                  <use xlink:href="#icon-google"></use>
                </svg><span>Avec Google</span>
              </button>
            </div>
            <div class="login__note">Ou avec email</div>
            <div class="subscription">
              <input class="subscription__input mb-2" type="email" name="email" placeholder="Saisir email" required>
              <input class="subscription__input mb-2 mt-2" type="password" name="password" placeholder="Saisir mot de passe" required>
              <a class="btn btn-cta flex-centered text-bold mt-2" href="#" style="border-radius: 20px;">
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


    <!-- <div>
      <button
        class="btn btn-cta-y my-2 font-500 btn-block"
        v-if="isLoggedIn">
        Mon compte
      </button>
      <button
        @click="active = !active"
        class="btn btn-cta-y my-2 font-500 btn-block"
        v-else>
        Se connecter
      </button>
    </div>
    <vs-dialog :loading="loading" blur v-model="active">
      <template #header>
        <h1 class=""><span class="text-yellow">helium</span>artworks</h1>
      </template>

      <div class="con-form">
        <vs-input
          v-if="isRegister == true"
          v-model="name"
          placeholder="Nom Complet"
        >
          <template #icon>
            <i class="bx bxs-user-circle"></i>
          </template>
        </vs-input>
        <vs-input v-model="email" placeholder="Email">
          <template #icon> @ </template>
        </vs-input>
        <vs-input type="password" v-model="password" placeholder="Password">
          <template #icon>
            <i class="bx bxs-lock"></i>
          </template>
        </vs-input>
        <vs-input
          v-if="isRegister == true"
          type="password"
          v-model="confirm"
          placeholder="Confimer le mot de passe"
        >
          <template #icon>
            <i class="bx bxs-lock"></i>
          </template>
        </vs-input>
        <div class="flex">
          <vs-checkbox v-model="remember" v-if="isRegister == false"
            >Se Souvenir</vs-checkbox
          >
          <vs-checkbox v-model="remember" v-else
            >J'accepte les <a href="#">conditions d'utilisations</a>
          </vs-checkbox>
          <a href="#" v-if="isRegister == false">Mot de passe oublié?</a>
        </div>
      </div> -->

      <!-- <template #footer>
        <div class="footer-dialog">
          <vs-button
            color="#ffc71c"
            dark
            block
            v-if="isRegister == false"
            @click="connectWithEmail()"
          >
            Connexion
          </vs-button>
          <vs-button
            color="#ffc71c"
            dark
            block
            v-else
            @click="createAccountWithEmail()"
          >
            Créer un compte
          </vs-button> -->

          <!-- <vs-button
            icon
            style="margin-top: 20px; padding-left: 15px; padding-right: 15px"
            @click="signWithGoogle()"
          >
            <i class="bx bxl-google" style="margin-right: 5px"></i>
            Se Connecter avec Google
          </vs-button> -->

          <!-- <div class="new" v-if="isRegister == false">
            Nouveau?
            <a href="javascript:{}" @click="swithConnexionMode()"
              >Créer un compte</a
            >
          </div>
          <div class="new" v-else>
            Déja un compte?
            <a href="javascript:{}" @click="swithConnexionMode()">Connexion</a>
          </div>
        </div>
      </template>
    </vs-dialog> -->
  </div>
</template>
  <script >
import firebase from 'firebase'
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
  }),
  methods: {
    toggleModal() {
      this.isModalActive = !this.isModalActive;
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
          text: 'Les mot de passe que vous avez fournis ne sont pas conforme ! Veuillez le vérifiez',
        })
        return
      }
      if (this.remember != true) {
        const noti = this.$vs.notification({
          color: 'danger',
          position: 'top-right',
          title: "Accepter les conditions d'utilisation",
          text: "Vous devez lire et accepter les conditions d'utilisation de la plateforme avant de créer votre compte!",
        })
        return
      }
      this.loading = true
      await this.$fire.auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          this.loading = false
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
})
</script>
<style scoped>

</style>
