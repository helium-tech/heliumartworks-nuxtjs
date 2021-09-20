<template>
  <div class="section-mb80 main main_stays-category">
<div class="main__center center">
  <div class="main__preview"><img src=@/assets/images/emotions-cat.jpg alt="Main">
    <div class="main__wrap">
      <h1 class="main__title hero">Images</h1>
    </div>
  </div>
  <div class="panel panel_stays-category">
    <div class="panel__background"></div>
    <div class="panel__body">
      <div class="panel__row">
        <div class="location js-location location_small">
          <div class="location__head js-location-head">
            <div class="location__icon">
              <svg class="icon icon-image">
                <use xlink:href="#icon-location"></use>
              </svg>
            </div>
            <input class="location__input js-location-input" type="text" name="location" autocomplete="off" placeholder="Entrer le mot clé"/>
            <button class="location__clear js-location-clear">
              <svg class="icon icon-close-circle">
                <use xlink:href="#icon-close-circle"></use>
              </svg>
            </button>
          </div>
        </div>
        <button class="panel__search">
          <svg class="icon icon-search">
            <use xlink:href="#icon-search"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import SearchImage from './SearchImage.vue'
export default {
  name: 'HeroSecond',
  components: {
    SearchImage
  }
}
</script>

<style scoped>
.panel {
	border: none;
	border-radius: inherit;
}
.main__preview img {
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    -o-object-fit: cover;
    object-fit: cover;
}

.main__title.hero {
	color: #fff;
}
</style>
