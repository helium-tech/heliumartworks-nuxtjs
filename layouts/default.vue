<template>
  <div id="app">
  <header class="header">
  <div class="header__center main__center center">
    <h1><nuxt-link to="/" class="header__logo text-bold"><span class="text-yellow">helium</span>artworks</nuxt-link></h1>
    <div class="header__wrapper js-header-wrapper" :class="{visible: isNavMobVisible}">
      <div class="header__item header__item_dropdown" :class="{active: isHeadDropdownactive}" ref="HeadDropdown">
        <button class="header__head" @click.prevent="toggleHeadDropdown">Catégories
          <svg class="icon icon-arrow-down">
            <use xlink:href="#icon-arrow-down">
            </use>
          </svg>
        </button>
        <div class="header__body js-header-body">
          <div class="header__menu">
            <nuxt-link to="/images" class="header__link">Images</nuxt-link>
            <nuxt-link to="/videos" class="header__link">Videos</nuxt-link>
            <a class="header__link" href="#">
              Musiques
            </a>
            <a class="header__link" href="#">
              Oeuvres d'art
            </a>
            <a class="header__link" href="#">
              Stylisme
            </a>
          </div>
        </div>
      </div>
      <nuxt-link to="/support" class="header__item">Support</nuxt-link>
      <div class="header__item header__item_language" :class="{active: isLanguageDropdownActive}">
        <button class="header__head" @click="toggleLanguageDropdown">
          <svg class="icon icon-globe">
            <use xlink:href="#icon-globe"></use>
          </svg>Langue
        </button>
        <div class="header__body js-header-body">
          <div class="header__list">
            <a class="header__box active" href="#">
              <div class="header__category">Français</div>
            </a>
            <a class="header__box" href="#">
              <div class="header__category">Anglais</div>
            </a>
          </div>
        </div>
      </div>
      <nuxt-link to="/vendre-mes-oeuvres" class="btn btn-cta text-small text-bold header__button">Vendre mes oeuvres</nuxt-link>
    </div>
    <AuthModal class="hide-md"/>
    <!-- <div class="header__item header__item_notification js-header-item">
      <button class="header__head js-header-head active">
        <svg class="icon icon-notification">
          <use xlink:href="#icon-notification"></use>
        </svg>
      </button>
      <div class="header__body js-header-body">
        <div class="header__title">Notification</div>
        <div class="header__notifications"><a class="header__notification" href="message-center.html">
            <div class="header__avatar"><img src="images/content/avatar-1.jpg" alt="Avatar"></div>
            <div class="header__details">
              <div class="header__subtitle">Kohaku Tora</div>
              <div class="header__content">just sent you a message</div>
              <div class="header__date">1 minute ago</div>
              <div class="header__status" style="background-color: #3B71FE;"></div>
            </div></a><a class="header__notification" href="message-center.html">
            <div class="header__avatar"><img src="images/content/avatar-1.jpg" alt="Avatar"></div>
            <div class="header__details">
              <div class="header__subtitle">Kohaku Tora</div>
              <div class="header__content">just sent you a message</div>
              <div class="header__date">3 hours ago</div>
              <div class="header__status" style="background-color: #3B71FE;"></div>
            </div></a></div>
      </div>
      </div> -->
  </div>
</header>

  <Nuxt />

    <Footer></Footer>

    <!-- Mob menu -->
    <section id="nav-mob" class="mob-menu p-sticky p-4 show-lg bg-gray">
      <a class="column flex-centered" @click.prevent="toggleNavMob"><i class="icon icon-menu" title="Menu"></i></a>
      <a class="column flex-centered badge" data-badge="0"><i class="icon icon-bookmark" title="Ma sélection"></i></a>
      <a class="column flex-centered"><i class="icon icon-search" title="Effectuer une recherche"></i></a>
      <AuthModal class="column flex-centered"/>
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
      isNavMobVisible : false,
      isHeadDropdownactive: false,
      isLanguageDropdownActive: false
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

    toggleNavMob() {
      this.isNavMobVisible = !this.isNavMobVisible
    },
    toggleHeadDropdown() {
      this.isHeadDropdownactive = !this.isHeadDropdownactive
    },
    toggleLanguageDropdown() {
      this.isLanguageDropdownActive = !this.isLanguageDropdownActive
    },
    documentClick(e){
        let el = this.$refs.HeadDropdown
        let target = e.target
        if ( el !== target && !el.contains(target) ) {
          this.isHeadDropdownactive = false
        }
      }
  },
  watch: {
    '$route' () {
      this.isHeadDropdownactive = false,
      this.isNavMobVisible = false
    }
  },
  mounted () {
      document.addEventListener('click', this.documentClick)
    }
}
</script>

<!-- Style généralisé -->
<style>
#app {
  font-family: 'DM Sans', sans-serif;
}
a {
  text-decoration: none;
  color: #2c3e50 !important;
  cursor: pointer;
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

.modal:target, .modal.active {
	background: rgba(20, 20, 22, 0.3);
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

.gradient {
  background-color: transparent;
  background-image: linear-gradient(180deg,rgba(0,23,37,0),rgba(0,23,37,0) 15%,rgba(0,23,37,.85));
}

.mob-menu {
  bottom: 0;
  z-index: 22
}

.badge[data-badge]::after,
.badge:not([data-badge])::after {
  background: #ffc71c !important;
}


@keyframes zoom {
  from {transform:scale(0)}
  to {transform:scale(1)}
}


@media (max-width: 960px) {
  .navbar-center {
   flex-direction: column;
   align-items: flex-start !important;
  }

  .dropdown .menu {
	   width: auto;
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
