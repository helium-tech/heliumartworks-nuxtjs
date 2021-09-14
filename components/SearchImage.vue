<template>
  <div class="input-group">
    <input class="form-input input-lg" type="text" v-model="keyword" placeholder="Travailleur africain...">
    <button class="btn btn-lg btn-cta-y input-group-btn" @click.prevent="makeSearch">Rechercher</button>
  </div>
</template>

<script>
import axios from 'axios'
let url = 'https://heliumartworks.herokuapp.com/files/search'
export default {
  name: 'SearchImage',
  data() {
    return {
      keyword: "",
    }
  },
  methods : {
    makeSearch() {
      this.$router.push('/images/search?' + `keyword=${this.keyword}`); //redirige vers la page recherche avec mot clé pour tester la mise en page
    }
  }
}
</script>

<style scoped>

</style>
