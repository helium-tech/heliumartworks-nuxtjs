<template>
  <div class="section main main_stays-category">
<div class="">
  <div class="main__preview"><img src=@/assets/images/emotions-cat.jpg alt="Main">
    <div class="main__wrap">
      <h1 class="main__title hero">{{title}}</h1>
    </div>
  </div>
  <div class="panel panel_stays-category">
    <div class="panel__background"></div>
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
</template>

<script>
let url = 'https://heliumartworks.herokuapp.com/files/search'
export default {
  name: 'HeroSecond',
  props: {
    title: String
  },
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
.panel {
	border: none;
	border-radius: inherit;
}
.main__preview img {
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.main__title.hero {
	color: #fff;
}
</style>
