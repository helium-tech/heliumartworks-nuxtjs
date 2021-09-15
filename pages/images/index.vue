<template>
  <div>
    <HeroSecond></HeroSecond>

    <div class="render-images-vedette pb-2 pt-2rem container">
      <div v-if="errored" class="error">
        <p>
          Impossible de charger les images pour l'instant. Veuillez réessayer
          ultérieurement.
        </p>
      </div>
      <div v-else class="columns flex-centered">
        <!-- <figure v-if="loading" class="loading loading-lg"></figure> -->

        <masonry :cols="4" :gutter="10">
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
  </div>
</template>

<script>
import SearchImage from '~/components/SearchImage.vue'
import axios from 'axios'
import { mapGetters, mapState } from 'vuex'
let url = 'https://heliumartworks.herokuapp.com/files/ressources?resource_type=images'

export default {
  name: 'Images',
  components: {},
  data() {
    return {
      errored: false,
    }
  },

  computed: {
    ...mapState({
      images: (state) => state.images.recentsImages,
    }),
  },

  mounted() {
    this.$store.dispatch('images/getRecentsImages')
  },
}
</script>
<style scoped>
.menu {
  background: inherit !important;
  box-shadow: initial !important;
}
</style>
