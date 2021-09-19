<template>
    <div class="hidden">
      <vs-sidebar
        absolute
        v-model="active"
        open
        >
        <vs-sidebar-item id="categories">
          Catégories
        </vs-sidebar-item>
        <vs-sidebar-item id="art">
          <vs-checkbox val="html" v-model="options">
            Art
          </vs-checkbox>
        </vs-sidebar-item>
        <vs-sidebar-item id="travail">
          <vs-checkbox val="html" v-model="options">
            Travail
          </vs-checkbox>
        </vs-sidebar-item>
        <vs-sidebar-item id="personnes">
          <vs-checkbox val="html" v-model="options">
            Personnes
          </vs-checkbox>
        </vs-sidebar-item>
        <vs-sidebar-item id="nature">
          <vs-checkbox val="html" v-model="options">
            Nature
          </vs-checkbox>
        </vs-sidebar-item>

        <vs-sidebar-item id="types">
          Types
        </vs-sidebar-item>
        <vs-sidebar-item id="jpeg">
          <vs-checkbox val="html" v-model="options">
            JPEG
          </vs-checkbox>
        </vs-sidebar-item>
        <vs-sidebar-item id="png">
          <vs-checkbox val="html" v-model="options">
            PNG
          </vs-checkbox>
        </vs-sidebar-item>
        <vs-sidebar-item id="psd">
          <vs-checkbox val="html" v-model="options">
            PSD
          </vs-checkbox>
        </vs-sidebar-item>
        <vs-sidebar-item id="aes">
          <vs-checkbox val="html" v-model="options">
            AES
          </vs-checkbox>
        </vs-sidebar-item>

        <vs-sidebar-item id="orientation">
          Orientation
        </vs-sidebar-item>
        <vs-sidebar-item id="horizontale">
          <vs-checkbox val="html" v-model="options">
            Horizontale
          </vs-checkbox>
        </vs-sidebar-item>
        <vs-sidebar-item id="verticale">
          <vs-checkbox val="html" v-model="options">
            Verticale
          </vs-checkbox>
        </vs-sidebar-item>

      </vs-sidebar>

      <div class="page-content col-lg-auto pt-2">
        <SearchImage></SearchImage>
        <div class="content render-images-vedette pb-2">
          <div v-if="errored" class="error">
            <p>Impossible de charger les images pour l'instant. Veuillez réessayer ultérieurement.</p>
          </div>
          <div v-else class="columns">
            <figure v-if="loading" class="loading loading-lg"></figure>

            <masonry :cols="4" :gutter="10">
            <figure class="m-2 p-relative image-preview h-rounded" v-for="image in images" :key="image.id">
                <div class="p-relative">
                  <router-link :to="'/images/' + image.id">
                    <img class="img-responsive" :src="image.thumb800" :alt="image.title">
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
let url = 'https://heliumartworks.herokuapp.com/files/search'

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
    axios
      .get(url, {
        params: {
          keyword: this.$route.query.keyword
        }
      })
    .then(response => {
      this.images = response.data.data;
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
.page-content {
  margin: 1em 2em auto 18em;
  height: 80vh;
}

.vs-sidebar-content {
  top: 4rem;
}

.vs-sidebar__item {
  padding: 8px 16px !important;
}
</style>
