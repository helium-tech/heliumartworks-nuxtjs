<template>
<header class="bg-gray">
    <div class="container navbar py-4">
      <section class="navbar-section">
        <router-link to="/" class="logo"><span class="text-yellow">helium</span>artworks</router-link>
      </section>
      <section class="navbar-center hide-md">
        <router-link to="/images" class="btn btn-link">Images</router-link>
        <div class="dropdown">
          <a href="#" class="btn btn-link dropdown-toggle" tabindex="0">
            Catégories
          </a>
          <ul class="menu">
            <li>
              <div class="chip">
              <img src=@/assets/images/art-cat.jpg class="avatar avatar-sm">
                Art
              </div>
              <div class="chip">
              <img src=@/assets/images/travail-cat.jpg class="avatar avatar-sm">
                Travail
              </div>
            </li>
            <li>
            <div class="chip">
            <img src=@/assets/images/emotions-cat.jpg class="avatar avatar-sm">
              Personnes
            </div>
            </li>
            <li>
              <div class="chip">
              <img src=@/assets/images/retro-cat.jpg class="avatar avatar-sm">
                Retro
              </div>
              <div class="chip">
              <img src=@/assets/images/personnes-cat.jpg class="avatar avatar-sm">
                Emotion
              </div>
            </li>
          </ul>
        </div>
        <a href="#" class="btn btn-link">Vidéos</a>
        <a href="#" class="btn btn-link">Musique</a>
        <a href="#" class="btn btn-link">Oeuvres d'art</a>
        <a href="#" class="btn btn-link">Ma sélection</a>
      </section>
      <section class="navbar-section navbar-right hide-md">
        <button href="#" class="btn btn-cta mr-1 font-500">Se connecter</button>
        <button href="#" class="btn btn-cta-y ml-2 font-500" @click.prevent="toggleModal">Vendre mes oeuvres</button>
      </section>
    </div>
</header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
