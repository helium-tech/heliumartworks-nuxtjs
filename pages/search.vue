<template>
  <div class="outer__inner">
    <div class="section-pt80 catalog">
      <div class="catalog__center center">
        <div class="catalog__top">
          <form class="catalog__search">
            <input
              class="catalog__input"
              type="text"
              name="keyword"
              placeholder="Rechercher..."
              v-model="keyword"
              v-on:keyup.enter="makeSearch"
              required
            />
            <button class="catalog__result" @click="makeSearch">
              <svg class="icon icon-search">
                <use xlink:href="#icon-search"></use>
              </svg>
            </button>
          </form>
        </div>
        <div class="catalog__sorting">
          <select class="select">
            <option>Récent</option>
            <option>Ancien</option>
          </select>
          <div class="catalog__nav">
            <a class="catalog__link active" href="#">Toutes les images</a>
            <a class="catalog__link" href="#">Art</a>
            <a class="catalog__link" href="#">Personnes</a>
            <a class="catalog__link" href="#">Emotions</a>
            <a class="catalog__link" href="#">Nature</a>
            <a class="catalog__link" href="#">Travail</a>
          </div>
        </div>
        <div class="catalog__row">
          <div class="catalog__filters">
            <div class="catalog__group">
              <div class="field">
                <div class="field__label">Taille</div>
                <select class="select">
                  <option>800x400</option>
                  <option>1720x480</option>
                </select>
              </div>
              <div class="field">
                <div class="field__label">couleur</div>
                <select class="select">
                  <option>Toutes les couleurs</option>
                  <option>Noir</option>
                  <option>Vert</option>
                  <option>Rose</option>
                  <option>Pourpre</option>
                </select>
              </div>
              <div class="field">
                <div class="field__label">Auteur</div>
                <select class="select">
                  <option>Certifié seulement</option>
                  <option>Tous</option>
                  <option>Plus appréciés</option>
                </select>
              </div>
            </div>
            <a class="catalog__reset" href="#">
              <svg class="icon icon-close-circle-fill">
                <use xlink:href="#icon-close-circle-fill"></use></svg
              >Réinitialiser les filtres</a
            >
          </div>
          <div class="catalog__wrapper">
            <div class="catalog__list">
              <ImagesList :images="searchImages" />
            </div>
            <div class="catalog__btns">
              <button class="button-stroke catalog__button">
                Charger plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import ImagesList from '~/components/Lists/ImagesList.vue'
let url = 'https://heliumartworks.herokuapp.com/files/search'

export default {
  name: 'Images',
  components: {
    ImagesList,
  },
  data() {
    return {
      keyword: '',
      loading: true,
      errored: false,
    }
  },

  computed: {
    ...mapState({
      images: (state) => state.images.recentsImages,
      searchImages: (state) => state.images.searchImages,
    }),
  },

  methods: {
    makeSearch() {
      this.$store.dispatch('images/searchImages', this.keyword)
    },
  },

  mounted() {
    // var searchUrl = url + '?keyword=filles&page=1&limit=20'
    // var queryParam = this.$route.query.keyword
    // axios
    //   .get(searchUrl)
    //   .then((response) => {
    //     this.images = response.data.data
    //     console.log('search is good')
    //   })
    //   .catch((error) => {
    //     error = true
    //     this.errored = error
    //   })
    //   .finally(() => (this.loading = false))
  },

  created() {
    var queryParam = this.$route.query.keyword
    var page = this.$route.query.page
    var limit = this.$route.query.limit
    console.log(queryParam)

    this.$store.dispatch('images/searchImages', queryParam, page, limit)
  },
}
</script>
<style scoped>
.catalog__top {
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid #e6e8ec;
}
.catalog__title {
  margin-right: auto;
  font-size: 24px;
  line-height: 1.33333;
  letter-spacing: -0.01em;
}
.catalog__search {
  position: relative;
  flex-shrink: 0;
  width: 100%;
}
.catalog__result {
  position: absolute;
  top: 8px;
  right: 8px;
  bottom: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ffc71c;
  transition: background 0.2s;
}
.catalog__result .icon {
  width: 16px;
  height: 16px;
  fill: #fcfcfd;
}
.catalog__sorting .select {
  width: 256px;
  margin-right: auto;
}
.catalog__sorting .select {
  width: 256px;
  margin-right: auto;
}
.select .current {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.select .list {
  right: 0;
  margin-top: 2px;
  border-radius: 12px;
  background: #fcfcfd;
  border: 2px solid #e6e8ec;
  box-shadow: 0 4px 12px rgba(35, 38, 47, 0.1);
}
.select::before {
  content: '';
  position: absolute;
  top: 50%;
  right: 8px;
  width: 32px;
  height: 32px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px #e6e8ec;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none' viewBox='0 0 10 6'%3E%3Cpath fill-rule='evenodd' d='M9.207.793a1 1 0 0 0-1.414 0L5 3.586 2.207.793A1 1 0 1 0 .793 2.207l3.5 3.5a1 1 0 0 0 1.414 0l3.5-3.5a1 1 0 0 0 0-1.414z' fill='%23777e91'/%3E%3C/svg%3E")
    no-repeat 50% 50%/10px auto;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
}
.select .option:hover,
.select .option.focus,
.select .option.selected.focus {
  background: #f4f5f6;
}
.select .option.selected {
  font-weight: 500;
}
.select .option {
  min-height: auto;
  padding: 10px 14px;
  font-weight: 500;
  line-height: 1.4;
}
.nice-select .option {
  cursor: pointer;
  font-weight: 400;
  line-height: 40px;
  list-style: none;
  min-height: 40px;
  outline: none;
  padding-left: 18px;
  padding-right: 29px;
  text-align: left;
  transition: all 0.2s;
}

.catalog__sorting {
  display: flex;
  align-items: center;
  margin-bottom: 48px;
}
.catalog__nav {
  display: flex;
}
.catalog__link.active {
  background: #ffc71c;
}
.catalog__link {
  flex-shrink: 0;
  margin: 0 6px;
  padding: 6px 12px;
  border-radius: 14px;
  background: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  line-height: 1.14286;
  font-weight: 700;
  transition: all 0.2s;
}

.catalog__row {
  display: flex;
}
.catalog__filters {
  flex-shrink: 0;
  width: 256px;
}
.catalog__wrapper {
  flex-grow: 1;
  padding-left: 32px;
}
.catalog__list {
  display: flex;
  flex-wrap: wrap;
  margin: -32px -16px 0;
}
.catalog .card {
  flex: 0 0 calc(33.333% - 32px);
  max-width: calc(33.333% - 32px);
  margin: 32px 16px 0;
  padding: 12px;
  box-shadow: 0px 32px 32px rgba(31, 47, 70, 0.12);
  border-radius: 20px;
}

.catalog__input {
  width: 100%;
  height: 48px;
  padding: 0 48px 0 14px;
  border-radius: 12px;
  background: none;
  border: 2px solid #e6e8ec;
  font-size: 14px;
  line-height: 1.71429;
  color: #23262f;
  transition: border-color 0.2s;
}

.catalog .range {
  margin-bottom: 24px;
}
.range__label {
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 1;
  font-weight: 700;
  text-transform: uppercase;
  color: #b1b5c3;
}
.range__indicators {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}
.range__text {
  font-weight: 500;
}
.catalog .field:not(:last-child) {
  margin-bottom: 24px;
}
.catalog__reset {
  display: inline-flex;
  align-items: center;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  line-height: 1.14286;
  font-weight: 700;
  color: #23262f;
  cursor: pointer;
  transition: color 0.2s;
}
</style>
