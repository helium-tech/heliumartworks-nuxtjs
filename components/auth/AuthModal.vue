<template>
  <div class="center">
    <!-- <vs-button @click="active=!active">
        Open Dialog
      </vs-button> -->
    <div>
      <button
        @click="active = !active"
        class="btn btn-cta-y my-2 font-500 btn-block"
      >
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
      </div>

      <template #footer>
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
          </vs-button>

          <vs-button
            icon
            style="margin-top: 20px; padding-left: 15px; padding-right: 15px"
            @click="signWithGoogle()"
          >
            <i class="bx bxl-google" style="margin-right: 5px"></i>
            Se Connecter avec Google
          </vs-button>

          <div class="new" v-if="isRegister == false">
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
    </vs-dialog>
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
  }),
  methods: {
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
  <style>
.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}
.con-form {
  width: 100%;
}
.con-form .flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.con-form .flex a {
  font-size: 0.8rem;
  opacity: 0.7;
}
.con-form .flex a:hover {
  opacity: 1;
}
.con-form .vs-checkbox-label {
  font-size: 0.8rem;
}
.con-form .vs-input-content {
  margin: 10px 0px;
  width: calc(100%);
}
.con-form .vs-input-content .vs-input {
  width: 100%;
}
.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100%);
}
.footer-dialog .new {
  margin: 0px;
  margin-top: 20px;
  padding: 0px;
  font-size: 0.7rem;
}
.footer-dialog .new a {
  color: rgba(var(--vs-primary), 1) !important;
  margin-left: 6px;
}
.footer-dialog .new a:hover {
  text-decoration: underline;
}
.footer-dialog .vs-button {
  margin: 0px;
}
</style>