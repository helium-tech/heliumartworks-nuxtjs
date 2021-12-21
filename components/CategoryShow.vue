<template>
  <section class="collections__center center">
    <div class="section live">
      <div class="live__center">
        <div class="live__head">
          <h2 class="live__title h3 text-bold">Que cherchez vous?</h2>
          <div class="browse__info info">Explorez par catégories</div>
        </div>
        <div class="live__slider">
          <nuxt-link to="/categories/technologie" class="live__item">
            <div class="live__preview">
              <img src=@/assets/images/categories/technologie.png alt="Helium
              Artworks Technologie">
            </div>
            <div class="live__subtitle text-large">Technologie</div>
            <!-- <div class="live__content">6,879 properties</div> -->
          </nuxt-link>
          <nuxt-link to="/categories/femmes" class="live__item">
            <div class="live__preview">
              <img src=@/assets/images/categories/femmes.png alt="Helium
              Artworks Femmes">
            </div>
            <div class="live__subtitle text-large">Femmes</div>
            <!-- <div class="live__content">6,879 properties</div> -->
          </nuxt-link>
          <nuxt-link to="/categories/hommes" class="live__item">
            <div class="live__preview">
              <img src=@/assets/images/categories/hommes.png alt="Helium
              Artworks Hommes">
            </div>
            <div class="live__subtitle text-large">Hommes</div>
            <!-- <div class="live__content">6,879 properties</div> -->
          </nuxt-link>
          <nuxt-link to="/categories/etudiants" class="live__item">
            <div class="live__preview">
              <img src=@/assets/images/categories/etudiants.png alt="Helium
              Artworks Etudiants">
            </div>
            <div class="live__subtitle text-large">Etudiants</div>
            <!-- <div class="live__content">6,879 properties</div> -->
          </nuxt-link>
        </div>
        <div class="live__btns">
          <!-- <button class="button-stroke button-small live__button">
            <div class="loader"></div><span>Load more</span>
          </button> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CategoryShow',
}
</script>

<style scoped>
</style>
