<template>
  <div id="app">
    <header class="bg-gray">
        <div class="container navbar py-4">
          <section class="navbar-section">
            <nuxt-link to="/" class="logo"><span class="text-yellow">helium</span>artworks</nuxt-link>
          </section>
          <section class="navbar-center nav-mob" :class="{active: isNavMobActive}">
            <nuxt-link to="/images" class="btn btn-link">Images</nuxt-link>
            <div class="dropdown categories">
              <a href="#" class="btn btn-link dropdown-toggle" tabindex="0">
                Catégories
              </a>
              <ul class="menu">
                  <div class="chip">
                  <img src=@/assets/images/art-cat.jpg class="avatar avatar-sm">
                    Art
                  </div>
                  <div class="chip">
                  <img src=@/assets/images/travail-cat.jpg class="avatar avatar-sm">
                    Travail
                  </div>
                  <div class="chip">
                  <img src=@/assets/images/emotions-cat.jpg class="avatar avatar-sm">
                    Personnes
                  </div>
                  <div class="chip">
                  <img src=@/assets/images/retro-cat.jpg class="avatar avatar-sm">
                    Retro
                  </div>
                  <div class="chip">
                  <img src=@/assets/images/personnes-cat.jpg class="avatar avatar-sm">
                    Emotion
                  </div>
              </ul>
            </div>
            <nuxt-link to="/videos" class="btn btn-link">Vidéos</nuxt-link>
            <nuxt-link to="/musiques" class="btn btn-link">Musique</nuxt-link>
            <nuxt-link to="/arts" class="btn btn-link">Oeuvres d'art</nuxt-link>
            <div class="dropdown selection hide-xs">
              <a href="#" class="btn btn-link badge hide-md" data-badge="0">Ma sélection</a>
              <ul class="menu">
                <div class="empty">
                  <p class="empty-subtitle">Vous n'avez sélectionné aucune image pour l'instant</p>
                  <div class="empty-action">
                    <button class="btn btn-cta font-500">Parcourir les images</button>
                  </div>
                </div>
              </ul>
            </div>
          </section>
          <section class="navbar-section navbar-right hide-md">
            <AuthModal></AuthModal>
            <!-- <UserAccountButton v-else></UserAccountButton> -->
            <button href="#" class="btn btn-cta-y ml-2 font-500" @click.prevent="toggleModal">Vendre mes oeuvres</button>
          </section>
        </div>
    </header>

  <Nuxt />

    <!-- Modal de connexion et d'inscription -->
    <div class="modal modal-sm" :class="{active: isModalActive}" id="modal-id">
      <a href="#close" class="modal-overlay" aria-label="Close" @click="toggleModal"></a>
      <div class="modal-container h-rounded">
        <section class="modal-header">
        <a href="#close" class="btn btn-clear float-right my-2" aria-label="Close" @click="toggleModal"></a>
        <div class="modal-title text-center h5"><span class="text-yellow">helium</span>artworks</div>
        </section>
        <section class="modal-body">
          <div class="content text-large">
            Bientôt vous aurez la possibilité de vendre vos oeuvres
          </div>
        </section>
    </div>
  </div>

    <Footer></Footer>

    <!-- Mob menu -->
    <section id="nav-mob" class="mob-menu p-sticky p-4 show-lg bg-gray">
      <a class="column flex-centered" @click.prevent="toggleNavMob"><i class="icon icon-menu" title="Menu"></i></a>
      <a class="column flex-centered badge" data-badge="0"><i class="icon icon-bookmark" title="Ma sélection"></i></a>
      <a class="column flex-centered"><i class="icon icon-search" title="Effectuer une recherche"></i></a>
      <AuthModal/>
    </section>

  </div>
</template>


<script>
import { mapState, mapGetters } from 'vuex'
import AuthModal from '~/components/auth/AuthModal.vue'
import UserAccountButton from '~/components/auth/UserAccountButton.vue'

export default {
  components: {
    AuthModal,
    UserAccountButton,
  },
  data() {
    return {
      isModalActive : false,
      isNavMobActive : false
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

    toggleModal() {
      if (this.isModalActive) {
        this.isModalActive = false
      } else {
        this.isModalActive = true
      }
    },

    toggleNavMob() {
      if (this.isNavMobActive) {
        this.isNavMobActive = false
      } else {
        this.isNavMobActive = true
      }
    }

  }
}
</script>

<!-- Style généralisé -->
<style>
#app {
  font-family: "DM sans";
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

a.active, a:active, a:focus, a:hover {
	text-decoration: none !important;
}

.text-yellow {
  color : #ffc71c;
}

.bg-yellow {
  background: #ffc71c;
}

.py-4 {
	padding-bottom: .8rem;
	padding-top: .8rem;
}

.px-6 {
  padding-left: 2rem !important;
  padding-right: 2rem !important;
}

.pb-8 {
  padding-bottom: 1.6rem;
}

.pt-2rem {
  padding-top: 2rem
}

.logo {
  font-size: 1.5rem !important;
  font-weight: 700;
}

.m-4 {
  margin: .8rem;
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
  border: .05rem solid #303030;
  color: inherit;
  border-radius: 4px;
}

.btn-cta:focus, .btn-cta:hover {
	background: #ffc71c !important;
	border-color: #fbc930 !important;
  box-shadow: inherit !important;
}

.btn.btn-cta-y {
	background: #ffc71c;
  border: .05rem solid #fbc930;
  color: inherit;
  border-radius: 4px;
}

.btn-cta-y:focus, .btn-cta-y:hover {
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
  border-radius: .3rem !important;
  overflow: hidden;
}

.price {
	top: 1em;
	right: 1em;
}

.figure-caption {
  position: absolute;
  bottom: 0;
  padding: .5em;
  width: 100%;
  z-index: 1;
  background-color: transparent;
  background-image: linear-gradient(180deg,rgba(0,23,37,0),rgba(0,23,37,0) 15%,rgba(0,23,37,.85));
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
  background-color: transparent;
  background-image: linear-gradient(180deg,rgba(0,23,37,0),rgba(0,23,37,0) 15%,rgba(0,23,37,.85));
}

.tab .tab-item a.active, .tab .tab-item.active a {
	border-bottom-color: #ffc71c !important;
}

.form-checkbox input:checked + .form-icon, .form-radio input:checked + .form-icon, .form-switch input:checked + .form-icon {
	background: #ffc71c !important;
	border-color: #ffc71c !important;
}

.mob-menu {
  bottom: 0;
  z-index: 22
}

.dropdown:hover .menu {
  display: block;
}

.dropdown .menu {
	top: 90% !important;
  width: 20em;
}

.badge[data-badge]::after,
.badge:not([data-badge])::after {
  background: #ffc71c !important;
}

.chip {
  margin: 8px !important;
}

@media (max-width: 840px) {
  .navbar-center {
   flex-direction: column;
   align-items: flex-start !important;
  }

  .nav-mob {
    position: fixed;
    height: 100%;
    width: 12rem;
    background: #fff;
    top: 0;
    left: -270px;
    overflow-x: hidden;
    transition: 0.5s;
    z-index: 20;
    padding: 1rem;
  }

  .p-4 {
  	padding: .8rem;
  }

  #nav-mob {
    display: flex !important;
  }

  .nav-mob.active {
    left: 0 !important;
  }
}
</style>
