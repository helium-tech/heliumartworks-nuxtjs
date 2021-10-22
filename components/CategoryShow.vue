<template>
  <section>
    <div class="section live">
      <div class="live__center center">
        <div class="live__head">
          <h2 class="live__title h2">Que cherchez vous?</h2>
          <div class="browse__info info">Explorez par catégories</div>
        </div>
        <div class="live__slider js-slider-live js-slider-resize">
          <nuxt-link to="/categories/technologie">
            <a class="live__item" href="/categories/technologie">
              <div class="live__preview">
                <img src=@/assets/images/categories/technologie.png alt="Helium
                Artworks Technologie">
              </div>
              <div class="live__subtitle">Technologie</div>
              <!-- <div class="live__content">6,879 properties</div> -->
            </a>
          </nuxt-link>
          <nuxt-link to="/categories/femmes">
            <a class="live__item" href="/categories/femmes">
              <div class="live__preview">
                <img src=@/assets/images/categories/femmes.png alt="Helium
                Artworks Femmes">
              </div>
              <div class="live__subtitle">Femmes</div>
              <!-- <div class="live__content">6,879 properties</div> -->
            </a>
          </nuxt-link>
          <nuxt-link to="/categories/hommes">
            <a class="live__item" href="/categories/hommes">
              <div class="live__preview">
                <img src=@/assets/images/categories/hommes.png alt="Helium
                Artworks Hommes">
              </div>
              <div class="live__subtitle">Hommes</div>
              <!-- <div class="live__content">6,879 properties</div> -->
            </a>
          </nuxt-link>
          <nuxt-link to="/categories/etudiants">
            <a class="live__item" href="/categories/etudiants">
              <div class="live__preview">
                <img src=@/assets/images/categories/etudiants.png alt="Helium
                Artworks Etudiants">
              </div>
              <div class="live__subtitle">Etudiants</div>
              <!-- <div class="live__content">6,879 properties</div> -->
            </a>
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
