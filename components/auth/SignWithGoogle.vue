<template>
  <div>
      <vs-button vs-color="danger" @click="signWithGoogle">Signin with google </vs-button>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import firebase from 'firebase'
import { mapState, mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState({
      authUser: (state: any) => state.auth.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },


  methods: {
      async signWithGoogle(){
          var provider = new firebase.auth.GoogleAuthProvider()
          firebase.auth().signInWithPopup(provider).then( result => {
            //   console.log(result)
            //TODO Show success login result
          }).catch(e => {
              console.log(e)
          })
      }
  }
})
</script>