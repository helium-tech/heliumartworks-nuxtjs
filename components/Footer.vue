<template>
  <footer class="site-footer bg-gray">
  <div class="container">
    <div class="divider"></div>
    <div class="site-info  py-2 navbar">
      <section class="navbar-section">
        <div class="site-branding mr-2">
          <router-link to="/" class="logo"><span class="text-yellow">helium</span>artworks</router-link>
        </div>
      </section>
      <section>
        <a href="#" class="btn btn-link">Support et Contact</a>
        <a href="#" class="btn btn-link">Conditions d'utilisation</a>
        <a href="#" class="btn btn-link">Politique de confidentialité</a>
      </section>
      <section class="navbar-section">
        <h6>©2021 helium</h6>
      </section>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
