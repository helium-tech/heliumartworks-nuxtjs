<template>
  <div>

    <div class="section-mb80">

      <div class="columns flex-centered" v-if="isSearching == false">

        <ImagesList :images="images" />

      </div>
      <!--end v-else -->
    </div>
  </div>
</template>

<script>
import CategorySlugHeader from '~/components/CategorySlugHeader.vue'
import ImagesList from '~/components/Lists/ImagesList.vue'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Images',
  components:{
    ImagesList,
  },
  data() {
    return {
      cat_title: ''
    }
  },
  computed: {
    ...mapState({
      images: (state) => state.images.searchImages,
      isSearching: (state) => state.images.isSearching,
    }),
  },

  created() {
    let slug = this.$route.params.slug
    this.cat_title = slug
    return this.$store.dispatch('images/searchImages', slug);
  },
}
</script>
<style scoped>
</style>
