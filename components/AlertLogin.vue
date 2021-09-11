<template>
  <div class="center">
  </div>
</template>

<script>
export default {
  name: 'AlertLogin',
  methods: {
       openNotification(duration, position = null) {
         this.$vs.notification({
           position,
           duration,
           title: 'Il semblerait que vous ne soyez pas connecté',
           text: `Connectez vous pour profiter de vos images<br>
           <button href="#" class="btn btn-cta-y font-500">Se connecter</button>`
         })
       }
    },
  mounted() {
    this.openNotification('none', 'top-right')
  }
}
</script>

<style scoped>

</style>
