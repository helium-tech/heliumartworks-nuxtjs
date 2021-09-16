<template>
  <div id="app">
    <header class="bg-gray">
      <div class="container navbar py-4">
        <section class="navbar-section">
          <nuxt-link to="/" class="logo"
            ><span class="text-yellow">helium</span>artworks</nuxt-link
          >
        </section>
        <section class="navbar-center hide-md">
          <nuxt-link to="/images" class="btn btn-link">Images</nuxt-link>
          <a href="#" class="btn btn-link">Catégories</a>
          <a href="#" class="btn btn-link">Packs</a>
          <a href="#" class="btn btn-link">Vidéos</a>
          <a href="#" class="btn btn-link">Ma sélection</a>
        </section>
        <section class="navbar-section navbar-right hide-md">
          <AuthModalSecond v-if="isLoggedIn == false"></AuthModalSecond>
          <UserAccountButton v-else></UserAccountButton>
          <button class="btn btn-cta-y ml-2 font-500">
            Vendre mes oeuvres
          </button>
        </section>
      </div>
    </header>

    <Nuxt />

    <!-- Modal de connexion et d'inscription -->

    

    <Footer></Footer>
    <!-- Menu Mobile-->
    <section
      class="mob-menu navbar-section p-sticky p-2 show-lg bg-gray columns"
    >
      <button class="btn btn-cta-y btn-action mx-1 column">
        <i class="icon icon-menu"></i>
      </button>
      <button class="btn btn-cta-y btn-action mx-1 column badge" data-badge="0">
        <i class="icon icon-bookmark"></i>
      </button>
      <button class="btn btn-cta-y btn-action mx-1 column">
        <i class="icon icon-search"></i>
      </button>
      <button class="btn btn-cta-y btn-action mx-1 column">
        <i class="icon icon-people"></i>
      </button>
    </section>
  </div>
</template>


<script>
import { mapState, mapGetters } from 'vuex'
import Footer from '~/components/Footer.vue'
import AuthModalSecond from '~/components/auth/AuthModalSecond.vue'
import UserAccountButton from '~/components/auth/UserAccountButton.vue'

export default {
  components: {
    Footer,
    AuthModalSecond,
    UserAccountButton,
  },
  computed: {
    ...mapState({
      authUser: (state) => state.auth.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
  data() {
    return {
      isModalActive: false,
      isLoginTabActive: true,
      isRegisterTabActive: false,
      currentForm: 'login',
    }
  },
  methods: {
    toggleModal() {
      if (this.isModalActive) {
        this.isModalActive = false
      } else {
        this.isModalActive = true
      }
    },
    switchForm() {
      if (this.currentForm === 'login') {
        this.currentForm = 'register'
        this.isRegisterTabActive = true
        this.isLoginTabActive = false
      } else {
        ;(this.currentForm = 'login'), (this.isRegisterTabActive = false)
        this.isLoginTabActive = true
      }
    },
  },
}
</script>

<!-- Style généralisé -->
<style>
#app {
  font-family: 'DM sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  max-width: 1280px;
}

a {
  color: #2c3e50 !important;
}

a.active,
a:active,
a:focus,
a:hover {
  text-decoration: none !important;
}

.text-yellow {
  color: #ffc71c;
}

.bg-yellow {
  background: #ffc71c;
}

.py-4 {
  padding-bottom: 0.8rem;
  padding-top: 0.8rem;
}

.px-6 {
  padding-left: 1.2rem !important;
  padding-right: 1.2rem !important;
}

.pb-8 {
  padding-bottom: 1.6rem;
}

.pt-2rem {
  padding-top: 2rem;
}

.logo {
  font-size: 1.5rem !important;
  font-weight: 700;
}

.m-4 {
  margin: 0.8rem;
}

.mb-6 {
  margin-bottom: 1.2rem;
}

.navbar-center a,
.navbar-right a,
.font-500 {
  font-weight: 500;
}

.font-600 {
  font-weight: 600;
}

a:focus {
  box-shadow: none !important;
}

.btn.btn-cta {
  border: 0.05rem solid #303030;
  color: inherit;
  border-radius: 4px;
}

.btn-cta:focus,
.btn-cta:hover {
  background: #ffc71c !important;
  border-color: #fbc930 !important;
  box-shadow: inherit !important;
}

.btn.btn-cta-y {
  background: #ffc71c;
  border: 0.05rem solid #fbc930;
  color: inherit;
  border-radius: 4px;
}

.btn-cta-y:focus,
.btn-cta-y:hover {
  background: #fff !important;
  border-color: #fbc930 !important;
  color: #fbc930;
  box-shadow: inherit !important;
}

.btn-cta-y:active {
  color: inherit !important;
}

.form-input:focus {
  border-color: #fbc930 !important;
  box-shadow: inherit !important;
}

.h-rounded {
  border-radius: 0.3rem !important;
  overflow: hidden;
}

.price {
  top: 1em;
  right: 1em;
}

.figure-caption {
  position: absolute;
  bottom: 0;
  padding: 0.5em;
  width: 100%;
  z-index: 1;
  background-color: transparent;
  background-image: linear-gradient(
    180deg,
    rgba(0, 23, 37, 0),
    rgba(0, 23, 37, 0) 15%,
    rgba(0, 23, 37, 0.85)
  );
}

.figure-caption,
.price {
  opacity: 0;
}

.figure-caption .image-title {
  color: #fff;
}

.image-preview:hover .figure-caption,
.image-preview:hover .price {
  opacity: 1 !important;
  transition: all 0.3s;
}

aside {
  margin-bottom: -1em;
}

.gradient {
  background-color: #fff293;
  background-image: linear-gradient(315deg, #fff293 0%, #ffe884 74%);
}

.menu {
  background: inherit !important;
  box-shadow: initial !important;
}

.tab .tab-item a.active,
.tab .tab-item.active a {
  border-bottom-color: #ffc71c !important;
}

.form-checkbox input:checked + .form-icon,
.form-radio input:checked + .form-icon,
.form-switch input:checked + .form-icon {
  background: #ffc71c !important;
  border-color: #ffc71c !important;
}

.mob-menu {
  bottom: 0;
  z-index: 10;
}
</style>
