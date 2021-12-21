<template>
  <div>
    <HeroSecond title="Images"/>

    <div class="section-mb80">
      <!-- <div v-if="errored" class="error">
        <p>
          Impossible de charger les images pour l'instant. Veuillez réessayer
          ultérieurement.
        </p>
      </div> -->
      <div class="columns flex-centered">
        <!-- <figure v-if="loading" class="loading loading-lg"></figure> -->

        <ImagesList :images="images" />

      </div>
      <!--end v-else -->
    </div>
  </div>
</template>

<script>
import ImagesList from '~/components/Lists/ImagesList.vue'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Images',
  components:{
    ImagesList,
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
