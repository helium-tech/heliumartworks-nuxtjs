<template>
  <div>
    <HeroSecond></HeroSecond>

    <div class="section-mb80 main__center center">
      <!-- <div v-if="errored" class="error">
        <p>
          Impossible de charger les images pour l'instant. Veuillez réessayer
          ultérieurement.
        </p>
      </div> -->
      <div class="columns flex-centered">
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
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Images',
  computed: {
    ...mapState({
      images: (state) => state.images.recentsImages,
    }),
  },

  created() {
    this.$store.dispatch('images/getRecentsImages')
  },
}
</script>
<style scoped>
</style>
