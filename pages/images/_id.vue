<template>
  <section class="container p-relative">
  <div class="columns flex-centered pt-2rem">
    <div class="column flex-centered col-6 p-relative">
      <!-- <v-zoomer
      ref="zoomer"
      style="width: 500px; height: 500px; border: solid 1px #dedede;"
      :max-scale="10"
      :zooming-elastic="false"
      :zoomed.sync="zoomed"
      > -->
        <img class="img-responsive img-fit-contain" :src="image.thumb800" :alt="image.title" style="width: 100%; height: 100%;">
      <!-- </v-zoomer> -->
      <div class="p-absolute zoom-controls">
        <button class="btn btn-cta" type="action" @click="$refs.zoomer.zoomIn()">Zoom+</button>
        <button class="btn btn-cta" type="action" @click="$refs.zoomer.zoomOut()">Zoom-</button>
      </div>
    </div>

    <div class="column">
      <h1 class="h4 text-bold">{{image.title}}</h1>
      <div class="size mb-2">
        <span class="font-600">Description :</span>
        <span> {{image.description}}</span>
      </div>
      <div class="size mb-2">
        <span class="font-600">Taille :</span>
        <span> {{image.file_size}}</span>
      </div>
      <div>
        <span class="old-price h4 text-muted">{{image.price}}</span>
        <span class="h2">{{ parseInt(image.offer_price) + parseInt(image.transaction_fees) }}</span>
        <span class="text-muted h3"> FCFA</span>
      </div>
      <section class="">
        <button href="#" class="btn btn-cta-y mr-1 font-500">Télécharger</button>
        <button href="#" class="btn btn-cta ml-2 font-500">Ajouter à ma sélection</button>
      </section>
      <div class="divider"></div>
        <div class="size mb-2">
          <span>
            <figure class="avatar avatar-lg mr-2 bg-secondary" data-initial="HT">
              <img src="img/avatar-1.png" alt="...">
            </figure>
          </span>
          <span class="font-600">Auteur :</span>
          <span> {{image.user_id}}</span>
        </div>
    </div>
  </div>
  <h4 class="text-bold pt-2rem">Tags</h4>
  <span class="label">{{image.keywords}}</span>

    <h4 class="text-bold pt-2rem">Images similaires</h4>
  </section>
</template>

<script>
import axios from 'axios'
let url = "https://heliumartworks.herokuapp.com/files/"

export default {
  name: 'ImageContent',
  data() {
    return {
      image: {},
      zoomed: false,
    }
  },

  mounted() {
    axios.get(url + this.$route.params.id)
    .then(response => {
      this.image = response.data;
    })
    .catch(error => {
      error = true;
      this.errored = error;
    })
    .finally(() => this.loading = false)
  }
}
</script>

<style scoped>
.old-price {
  text-decoration: line-through;
}

.zoom-controls {
  top: 0
}
</style>
