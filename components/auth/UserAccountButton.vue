<template>
  <div>
    <nuxt-link to="/account" v-if="isLoggedIn"><button class="btn btn-cta-y my-2 font-500 btn-block">Mon Compte</button></nuxt-link> 
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapState, mapGetters} from 'vuex'
export default Vue.extend({
  computed: {
    ...mapState({
      authUser: (state: any) => state.auth.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
})
</script>