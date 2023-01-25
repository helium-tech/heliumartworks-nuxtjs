<template>
  <div>
    <div class="popup popup_login">
      <div class="signup" v-if="isRegister == true">
        <div class="login__item">
          <div class="login__title h3">S'inscrire</div>
          <div class="login__btns">
            <button class="button login__button">
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
            />
            <input
              class="subscription__input mb-2 mt-2"
              type="password"
              name="password"
              placeholder="Saisir mot de passe"
              required
            />
            <input
              class="subscription__input mb-2 mt-2"
              type="password"
              name="password"
              placeholder="Confirmer mot de passe"
              required
            />
            <a
              class="btn btn-cta flex-centered text-bold mt-2"
              href="#"
              style="border-radius: 20px"
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
          <div class="login__title h3">Se connecter</div>
          <div class="login__btns">
            <button class="button login__button">
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
            />
            <input
              class="subscription__input mb-2 mt-2"
              type="password"
              name="password"
              placeholder="Saisir mot de passe"
              required
            />
            <a
              class="btn btn-cta flex-centered text-bold mt-2"
              href="#"
              style="border-radius: 20px"
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
        @click="closeModal"
      >
        ×
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isRegister: false,
    name: '',
    email: '',
    password: '',
    confirm: '',
    remember: false,
    isModalActive: false,
  }),
  methods: {
    toggleModal() {
      this.isModalActive = !this.isModalActive
    },

    closeModal() {
      this.isModalActive = false
    },
    swithConnexionMode() {
      this.isRegister = !this.isRegister
    },
  },
}
</script>