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
    <button class="header__burger js-header-burger"></button>
  </div>
</header>

  <Nuxt />

  <!-- Popup -->
  <div class="modal" :class="{active: isModalActive}" id="modal-id">
  <div class="popup popup_login">
    <div class="login">
      <div class="login__item">
        <div class="login__title h3">Sign up on Fleet</div>
        <div class="login__info">Use Your OpenID to Sign up</div>
        <div class="login__btns">
          <button class="button login__button">
            <svg class="icon icon-google">
              <use xlink:href="#icon-google"></use>
            </svg><span>Google</span>
          </button>
          <button class="button-black login__button">
            <svg class="icon icon-apple">
              <use xlink:href="#icon-apple"></use>
            </svg><span>Apple</span>
          </button>
        </div>
        <div class="login__note">Or continue with email</div>
        <div class="subscription">
          <input class="subscription__input" type="email" name="email" placeholder="Enter your email" required>
          <button class="subscription__btn">
            <svg class="icon icon-arrow-next">
              <use xlink:href="#icon-arrow-next"></use>
            </svg>
          </button>
        </div>
        <div class="login__foot">Already have an account? <a class="login__link" href="#">Login</a></div>
      </div>
      <div class="login__item">
        <div class="login__title h3">Sign in</div>
        <div class="login__form">
          <div class="field field_view">
            <div class="field__wrap">
              <input class="field__input" type="password" name="password" placeholder="Password" required>
              <button class="field__view">
                <svg class="icon icon-eye">
                  <use xlink:href="#icon-eye"></use>
                </svg>
              </button>
            </div>
          </div>
          <button class="button login__button">Login</button>
        </div>
        <div class="login__foot"><a class="login__password" href="#">Forgot password?</a></div>
      </div>
      <div class="login__item">
        <div class="login__title h3">Let’s confirm it’s really you</div>
        <div class="login__info">Help us secure your account. Please complete the verifications below</div>
        <div class="login__form">
          <div class="login__variants">
            <label class="radio">
              <input class="radio__input" type="radio" name="login" checked="checked"/><span class="radio__inner"><span class="radio__tick"></span><span class="radio__text">Get the code by text message (SM) at +1 234 567 890</span></span>
            </label>
            <label class="radio">
              <input class="radio__input" type="radio" name="login"/><span class="radio__inner"><span class="radio__tick"></span><span class="radio__text">Get the code by email at tranm••••••••••••@gm•••.com</span></span>
            </label>
          </div>
          <button class="button login__button">Continue</button>
        </div>
      </div>
      <div class="login__item">
        <div class="login__title h3">Enter your security code</div>
        <div class="login__info">We texted your code to +1 234 567 890</div>
        <div class="login__form">
          <div class="login__code">
            <div class="login__number">
              <input type="tel">
            </div>
            <div class="login__number">
              <input type="tel">
            </div>
            <div class="login__number">
              <input type="tel">
            </div>
            <div class="login__number">
              <input type="tel">
            </div>
          </div>
        </div>
      </div>
    </div>
    <button title="Close (Esc)" type="button" class="mfp-close"
      @click="toggleModal"
      >×
    </button>
  </div>
</div>

    <!-- Modal de connexion et d'inscription -->
    <!-- <div class="modal modal-sm" :class="{active: isModalActive}" id="modal-id">
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
  </div> -->

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
      this.isModalActive = !this.isModalActive;
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
