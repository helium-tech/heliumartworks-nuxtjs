<template>
  <Lightgallery
    :settings="{ speed: 500, plugins: plugins }"
    :onInit="onInit"
    :onBeforeSlide="onBeforeSlide"
  >
    <a href="https://images.pexels.com/photos/9715702/pexels-photo-9715702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
      <img alt=".." src="https://images.pexels.com/photos/9715702/pexels-photo-9715702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    </a>
    <a href="https://images.pexels.com/photos/10522615/pexels-photo-10522615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
      <img alt=".." src="https://images.pexels.com/photos/10522615/pexels-photo-10522615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    </a>
    ...
  </Lightgallery>
</template>

<script lang="ts">
import Lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

export default {
  components: {
    
  },
  data: () => ({
    plugins: [lgThumbnail, lgZoom],
  }),
  methods: {
    onInit: () => {
      console.log('lightGallery has been initialized')
    },
    onBeforeSlide: () => {
      console.log('calling before slide')
    },
  },
}
</script>
<style lang="css" scoped>
@import 'lightgallery/css/lightgallery.css';
@import 'lightgallery/css/lg-thumbnail.css';
@import 'lightgallery/css/lg-zoom.css';
</style>
