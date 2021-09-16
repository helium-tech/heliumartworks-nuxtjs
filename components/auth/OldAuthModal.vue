<template>
  <div>
    <div
      class="modal modal-sm"
      :class="{ active: isModalActive }"
      id="modal-id"
    >
      <a
        href="#close"
        class="modal-overlay"
        aria-label="Close"
        @click="toggleModal"
      ></a>
      <div class="modal-container h-rounded">
        <section class="modal-header">
          <a
            href="#close"
            class="btn btn-clear float-right my-2"
            aria-label="Close"
            @click="toggleModal"
          ></a>
          <div class="switch-login-type py-2">
            <ul class="tab tab-block">
              <li class="tab-item" :class="{ active: isLoginTabActive }">
                <a href="#">Connexion</a>
              </li>
              <li class="tab-item" :class="{ active: isRegisterTabActive }">
                <a href="#">Inscription</a>
              </li>
            </ul>
          </div>
          <div class="modal-title text-center h5">
            <span class="text-yellow">helium</span>artworks
          </div>
        </section>
        <section class="modal-body">
          <div class="content">
            <form
              class="form-group register-form"
              v-if="currentForm === 'register'"
            >
              <label class="form-label" for="usermail">Adresse Email</label>
              <input
                class="form-input"
                type="email"
                id="usermail"
                placeholder="Email"
              />
              <label class="form-label" for="username">Nom d'utilisateur</label>
              <input
                class="form-input"
                type="text"
                id="username"
                placeholder="Nom d'utilisateur"
              />
              <label class="form-label" for="userpassword">Mot de passe</label>
              <input
                class="form-input"
                type="password"
                id="userpassword"
                placeholder="Mot de passe"
              />
              <label class="form-label" for="passwordconfirm"
                >Confirmer le mot de passe</label
              >
              <input
                class="form-input"
                type="password"
                id="passwordconfirm"
                placeholder="Confirmer mot de passe"
              />
              <button href="#" class="btn btn-cta-y my-2 font-500 btn-block">
                S'inscrire
              </button>
              <p class="message">
                Avez vous déjà un compte?
                <a href="#" @click.prevent="switchForm()"
                  ><span class="text-yellow">Connectez vous</span></a
                >
                plutôt
              </p>
            </form>
            <form class="form-group login-form" v-else>
              <label class="form-label" for="usermail">Adresse Email</label>
              <input
                class="form-input"
                type="email"
                id="usermail"
                placeholder="Email"
              />
              <label class="form-label" for="userpassword">Mot de passe</label>
              <input
                class="form-input"
                type="password"
                id="userpassword"
                placeholder="Mot de passe"
              />

              <p class="message">
                Vous n'avez pas de compte ?
                <a href="#" @click.prevent="switchForm()"
                  ><span class="text-yellow">Créez en un</span></a
                >
              </p>
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>