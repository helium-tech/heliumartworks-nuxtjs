<template>
  <section class="bg-hero hero hero-lg p-relative">
    <div class="container">
        <h1 class="text-bold h2">
          L'art à la dimension africaine
        </h1>
        <div class="columns pt-2rem flex-centered">
          <div class="column col-6 col-mx-auto">
              <SearchImage></SearchImage>
          </div>
        </div>
    </div>
    <div class="overlay"></div>
  </section>
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
.bg-hero {
  background-image: url('../assets/images/art-cat.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  opacity: .4;
  z-index: 2;
}

h1 {
  color: #fff;
}

.container {
  position: relative;
  z-index: 10
}

@media (max-width:840px)  {
.hero.hero-lg {
 padding-bottom:2rem;
 padding-top:2rem;
  }
}
</style>
