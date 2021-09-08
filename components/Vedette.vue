<template>
  <section class="p-relative mb-6">
    <div class="container">
      <h2 class="text-bold pt-2rem">En vedette</h2>
      <div class="render-images-vedette pb-2">
        <div v-if="errored" class="error">
          <p>
            Impossible de charger les images pour l'instant. Veuillez réessayer
            ultérieurement.
          </p>
        </div>
        <div v-else class="columns">
          <figure v-if="loading" class="loading loading-lg"></figure>

          <masonry :cols="4" :gutter="10">
            <figure
              class="m-2 p-relative image-preview h-rounded"
              v-for="image in images"
              :key="image.id"
            >
              <div class="p-relative">
                <a href="#">
                  <img
                    class="img-responsive img-fit-cover"
                    :src="image.thumb400"
                    :alt="image.title"
                  />
                  <div class="price p-absolute label label-rounded">
                    <span class="font-500">{{
                      parseInt(image.offer_price) +
                      parseInt(image.transaction_fees)
                    }}</span>
                    <span class="text-muted text-tiny"> FCFA</span>
                  </div>
                </a>
                <figcaption class="figure-caption">
                  <p class="image-title mb-1">{{ image.title }}</p>
                  <button class="btn btn-cta-y btn-action mx-1">
                    <i class="icon icon-bookmark"></i>
                  </button>
                  <button class="btn btn-cta-y btn-action mx-1">
                    <i class="icon icon-downward"></i>
                  </button>
                </figcaption>
              </div>
            </figure>
          </masonry>
        </div>
        <!--end v-else -->
      </div>
      <div class="columns flex-centered">
        <button href="#" class="btn btn-lg btn-cta-y text-center font-500">
          Afficher plus d'images
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
let url =
  'https://heliumartworks.herokuapp.com/files/ressources?resource_type=images&limit=12'

export default {
  name: 'Vedette',
  data() {
    return {
      images: '',
      loading: true,
      errored: false,
    }
  },

  mounted() {
    axios
      .get(url)
      .then((response) => {
        this.images = response.data
      })
      .catch((error) => {
        error = true
        this.errored = error
      })
      .finally(() => (this.loading = false))
  },
}
</script>

<style scoped>
section {
  z-index: 6;
  background: #fff;
}
</style>
