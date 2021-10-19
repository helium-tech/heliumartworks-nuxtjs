<template>
  <section class="section center">
      <div class="render-images-vedette pb-2">
        <div v-if="errored" class="error">
          <p>
            Impossible de charger les images pour l'instant. Veuillez réessayer
            ultérieurement.
          </p>
        </div>
        <div v-else class="columns flex-centered">
          <!-- <figure v-if="loading" class="loading loading-lg"></figure> -->

          <ImagesList :images="images" />

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
import ImagesList from '~/components/Lists/ImagesList.vue'
import { mapGetters, mapState } from 'vuex'
let url =
  'https://heliumartworks.herokuapp.com/files/ressources?resource_type=images&limit=12'

export default {
  name: 'Vedette',
  components: {
    ImagesList,
  },
  data() {
    return {
      // loading: true,
      errored: false,
    }
  },
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
section {
  z-index: 6;
  background: #fff;
}
</style>
