<template>
    <section>
    <div class="section main main_stays">
      <div>
    <div class="main__preview bg-gray">
      <div class="main__wrap">
        <h1 class="main__title app-hero">Des <span class="text-yellow">images africaines</span> de qualité en un seul et même endroit</h1>
      </div>
      <div class="hero-side hide-md">
        <picture class="hero-img">
            <img src=@/assets/images/hero.png alt="Hero">
          </picture>
        </div>
    </div>
    <div class="panel panel_stays">
      <div class="panel__background"></div>
      <div class="panel__nav">
        <nuxt-link to="/images" class="panel__link">Images</nuxt-link>
        <nuxt-link to="/videos" class="panel__link">Videos</nuxt-link>
        <a class="panel__link" href="#">Musique</a>
        <a class="panel__link" href="#">Oeuvres d'art</a>
        <a class="panel__link" href="#">Stylisme</a>
      </div>
      <div class="panel__body">
        <div class="panel__row">
          <div class="location">
            <div class="location__head">
              <div class="location__icon">
                <svg class="icon icon-image">
                  <use xlink:href="#icon-image"></use>
                </svg>
              </div>
              <input class="location__input" type="text" name="searchimage" ref="searchKey"
              v-model="keyword" placeholder="Saisir votre recherche" required v-on:keyup.enter="makeSearch"/>
              <!-- <button class="location__clear js-location-clear">
                <svg class="icon icon-close-circle">
                  <use xlink:href="#icon-close-circle"></use>
                </svg>
              </button> -->
            </div>
            <!-- <div class="location__body js-location-body">
              <div class="location__list">
                <a class="location__item js-location-item" href="#">New York, NY</a>
                <a class="location__item js-location-item" href="#">New York, Manhattan</a>
                <a class="location__item js-location-item" href="#">New Zealand</a>
                <a class="location__item js-location-item" href="#">New Smyrna Beach, FL</a>
                <a class="location__item js-location-item" href="#">Newark, NJ</a>
              </div>
            </div> -->
          </div>
          <a class="panel__search" @click.prevent="makeSearch">
            <svg class="icon icon-search">
              <use xlink:href="#icon-search"></use>
            </svg></a>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
</template>

<script>
let url = 'https://heliumartworks.herokuapp.com/files/search'
export default {
  name: 'Hero',
  data() {
    return {
      keyword: "",
    }
  },
  methods : {
    makeSearch() {
      if (this.keyword) {
        this.$router.push('/search?' + `keyword=${this.keyword}`);
      }
      else {
        this.$refs.searchKey.focus()
      }
    }
  }
}
</script>

<style scoped>
.main__preview {
	display: flex;
}

.panel {
	border: none;
	border-radius: inherit;
}

.main__preview img {
    position: absolute;
    top: 0;
    right: -8em;
}

@media only screen and (max-width: 767px) {
   .main__wrap {
     position: relative;
   }
 }
</style>
