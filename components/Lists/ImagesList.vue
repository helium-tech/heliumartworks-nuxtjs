<template>
  <div>
    <masonry 
    :cols="{default: 4, 1000: 3, 700: 1, 400: 1}"
  :gutter="{default: '10px', 700: '10px'}"
    >


      <figure
        class="m-2 p-relative image-preview h-rounded"
        v-for="image in images"
        :key="image.id"
      >
        <nuxt-link :to="'/images/' + image.slug">
          <div class="p-relative">
            <img
              class="img-responsive img-fit-cover"
              :src="image.thumb800"
              :alt="image.title"
            />
            <div class="price p-absolute label label-rounded">
              <span class="font-500">{{
                parseInt(image.offer_price) + parseInt(image.transaction_fees)
              }}</span>
              <span class="text-muted text-tiny"> FCFA</span>
            </div>

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
        </nuxt-link>
      </figure>
      
    </masonry>
  </div>
</template>


<script>
export default {
  props: {
    images: {},
  },
}
</script>