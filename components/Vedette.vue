<template>
  <section class="section center">
    <div class="live__head">
      <h2 class="live__title h2">En vedette</h2>
    </div>
      <div class="render-images-vedette pb-2">
        <div v-if="errored" class="error">
          <p>
            Impossible de charger les images pour l'instant. Veuillez réessayer
            ultérieurement.
          </p>
        </div>
        <div v-else class="columns flex-centered">
          <!-- <figure v-if="loading" class="loading loading-lg"></figure> -->

          <masonry
            :cols="{ default: 4, 1000: 3, 700: 2, 400: 1 }"
            :gutter="{ default: '30px', 700: '15px' }"
          >
            <figure
              class="m-2 p-relative image-preview h-rounded"
              v-for="image in images"
              :key="image.id"
            >
            <div class="p-relative">
              <nuxt-link :to="'/images/' + image.slug">
                <img
                  class="img-responsive img-fit-cover"
                  :src="image.thumb800"
                  :alt="image.title"
                />
                <div class="price p-absolute label label-rounded">
                  <span class="font-500">{{
                    parseInt(image.offer_price) +
                    parseInt(image.transaction_fees)
                  }}</span>
                  <span class="text-muted text-tiny"> FCFA</span>
                </div>
              </nuxt-link>
              <figcaption class="figure-caption hide-md">
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
        <nuxt-link to="/images" class="btn btn-cta-y text-center font-500">Afficher plus d'images</nuxt-link>
      </div>
  </section>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapState } from 'vuex'
let url =
  'https://heliumartworks.herokuapp.com/files/ressources?resource_type=images&limit=12'

export default {
  name: 'Vedette',
  data() {
    return {
      // loading: true,
      errored: false,
      images: [],
    }
  },
  computed: {
    //   ...mapState({
    //   images: (state) => state.images.recentsImages,
    // }),
  },

  created() {
    axios
      .get(url)
      .then((data) => {
        console.log(data.data)
        var recentsImages = data.data
        this.images = recentsImages
      })
  },
}
</script>

<style scoped>
section {
  z-index: 6;
  background: #fff;
}
</style>
