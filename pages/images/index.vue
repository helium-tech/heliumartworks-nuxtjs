<template>
    <div class="columns">
      <aside class="filters column col-lg-auto col-2 mr-2 bg-gray">
        <ul class="menu">
          <li>
            <h4>Filtres</h4>
          </li>
          <li class="divider py-2 font-600" data-content="Catégories"></li>
          <li class="menu-item">
            <label class="form-checkbox">
              <input type="checkbox">
              <i class="form-icon"></i>
              Arts
            </label>
          </li>
          <li class="menu-item">
            <label class="form-checkbox">
              <input type="checkbox">
              <i class="form-icon"></i>
              Travail
            </label>
          </li>
          <li class="menu-item">
            <label class="form-checkbox">
              <input type="checkbox">
              <i class="form-icon"></i>
              Emotions
            </label>
          </li>
          <li class="menu-item">
            <label class="form-checkbox">
              <input type="checkbox">
              <i class="form-icon"></i>
              Retro
            </label>
          </li>
          <li class="menu-item">
            <label class="form-checkbox">
              <input type="checkbox">
              <i class="form-icon"></i>
              Personnes
            </label>
          </li>

          <li class="divider py-2 font-600" data-content="Types"></li>
          <li class="menu-item">
            <label class="form-checkbox">
              <input type="checkbox">
              <i class="form-icon"></i>
              PNG
            </label>
          </li>
          <li class="menu-item">
            <label class="form-checkbox">
              <input type="checkbox">
              <i class="form-icon"></i>
              JPEG
            </label>
          </li>
          <li class="menu-item">
            <label class="form-checkbox">
              <input type="checkbox">
              <i class="form-icon"></i>
              PSD
            </label>
          </li>
          <li class="menu-item">
            <label class="form-checkbox">
              <input type="checkbox">
              <i class="form-icon"></i>
              AES
            </label>
          </li>

          <li class="divider py-2 font-600" data-content="Orientation"></li>
          <li class="menu-item">
            <label class="form-checkbox">
              <input type="checkbox">
              <i class="form-icon"></i>
              Horizontal
            </label>
          </li>
          <li class="menu-item">
            <label class="form-checkbox">
              <input type="checkbox">
              <i class="form-icon"></i>
              Verticale
            </label>
          </li>

          <li class="divider py-2 font-600" data-content="Prix"></li>
          <li class="menu-item">
            <input class="slider tooltip" type="range" min="0" max="100" value="50" oninput="this.setAttribute('value', this.value);">
          </li>
        </ul>
      </aside>

      <div class="content column col-lg-auto pt-2">
        <SearchImage></SearchImage>
        <div class="render-images-vedette pb-2">
          <div v-if="errored" class="error">
            <p>Impossible de charger les images pour l'instant. Veuillez réessayer ultérieurement.</p>
          </div>
          <div v-else class="columns">
            <figure v-if="loading" class="loading loading-lg"></figure>

            <masonry :cols="4" :gutter="10">
            <figure class="m-2 p-relative image-preview h-rounded" v-for="image in images" :key="image.id">
                <div class="p-relative">
                  <router-link :to="'/images/' + image.id">
                    <img class="img-responsive" :src="image.thumb400" :alt="image.title">
                    <div class="price p-absolute label label-rounded">
                      <span class="font-500">{{ parseInt(image.offer_price) + parseInt(image.transaction_fees) }}</span>
                      <span class="text-muted text-tiny"> FCFA</span>
                    </div>
                   </router-link>
                  <figcaption class="figure-caption">
                      <p class="image-title mb-1">{{image.title}}</p>
                      <button class="btn btn-cta-y btn-action mx-1"><i class="icon icon-bookmark"></i></button>
                      <button class="btn btn-cta-y btn-action mx-1"><i class="icon icon-downward"></i></button>
                  </figcaption>
                </div>
            </figure>
            </masonry>
          </div><!--end v-else -->
        </div>
      </div>
    </div>
</template>

<script>
import SearchImage from '~/components/SearchImage.vue'
import axios from 'axios'
let url = "https://heliumartworks.herokuapp.com/files/ressources?resource_type=images&limit=24"

export default {
  name: 'Images',
  components: {
    SearchImage
  },
  data() {
    return {
      images: '',
      loading: true,
      errored: false
    };
  },

  mounted() {
    axios.get(url)
    .then(response => {
      this.images = response.data;
    })
    .catch(error => {
      error = true;
      this.errored = error;
    })
    .finally(() => this.loading = false)
  }
}
</script>
