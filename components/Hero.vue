<template>
    <section class="bg-gray hero hero-lg">
      <div class="container">
        <div class="columns flex-centered">
        <div class="column col-lg-12 hero-text">
          <h1 class="text-bold h2">
            Des <span class="text-yellow">images africaines</span> de qualité en un seul et même endroit
          </h1>
          <h2 class="pt-2 h3">Que cherchez vous ?</h2>
          <SearchImage></SearchImage>
        </div>
        <div class="column hide-md">
          <img src=@/assets/images/hero.png class="img-responsive p-absolute hero-image">
        </div>
      </div>
    </div>
    </section>
</template>

<script>
import SearchImage from './SearchImage.vue'
export default {
  name: 'Hero',
  components: {
    SearchImage
  }
}
</script>

<style scoped>
.hero-text {
  z-index: 4;
}

.hero-image {
  z-index: 1;
  right: 0;
  top: 4.5em;
}

@media (max-width:840px)  {
.hero.hero-lg {
 padding-bottom:2rem;
 padding-top:2rem;
  }
}
</style>
