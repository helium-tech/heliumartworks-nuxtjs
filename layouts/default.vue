<template>
  <div id="app">

  <header class="header js-header authorization">
  <div class="header__center center">
    <h1><nuxt-link to="/" class="header__logo"><span class="text-yellow">helium</span>artworks</nuxt-link></h1>
    <div class="header__wrapper js-header-wrapper">
      <div class="header__item header__item_dropdown js-header-item">
        <button class="header__head js-header-head">Catégories
          <svg class="icon icon-arrow-down">
            <use xlink:href="#icon-arrow-down">
            </use>
          </svg>
        </button>
        <div class="header__body js-header-body">
          <div class="header__menu">
            <nuxt-link to="/images" class="header__link">Images</nuxt-link>
            <a class="header__link" href="#">
              Videos
            </a>
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
      <a class="header__item" href="#">Support</a>
      <div class="header__item header__item_language js-header-item">
        <button class="header__head js-header-head">
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
      <a class="btn btn-cta text-small text-bold header__button" href="#">
        Vendre mes oeuvres
      </a>
    </div>
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
    <a class="header__login js-popup-open" href="#popup-login" data-effect="mfp-zoom-in">
      <svg class="icon icon-user">
        <use xlink:href="#icon-user"></use>
      </svg></a>
    <div class="header__item header__item_user js-header-item">
      <button class="header__head js-header-head"><img src="images/content/avatar-2.jpg" alt="Avatar"></button>
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
    <button class="header__burger js-header-burger"></button>
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
  font-family: 'DM Sans', sans-serif;
   color: #2c3e50;
}
a {
  text-decoration: none;
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
