<template>
    <section>
      <div class="section live">
      <div class="live__center center">
        <div class="live__head">
          <h2 class="live__title h2">Que cherchez vous?</h2>
          <div class="browse__info info">Explorez par catégories</div>
        </div>
        <div class="live__slider js-slider-live js-slider-resize">
          <a class="live__item" href="#">
            <div class="live__preview"><img src=@/assets/images/travail-cat.jpg alt="Travail"></div>
            <div class="live__subtitle">Travail</div>
            <!-- <div class="live__content">6,879 properties</div> -->
          </a>
          <a class="live__item" href="#">
            <div class="live__preview"><img src=@/assets/images/personnes-cat.jpg alt="Personnes"></div>
            <div class="live__subtitle">Personnes</div>
          </a>
          <a class="live__item" href="#">
            <div class="live__preview"><img src=@/assets/images/art-cat.jpg alt="Art"></div>
            <div class="live__subtitle">Art</div>
          </a>
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
