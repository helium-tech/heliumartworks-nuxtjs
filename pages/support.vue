<template>
  <div class="outer__inner">
        <div class="section__mb80">
          <div class="support__center center">
            <h1 class="support__title py-2">Support & FAQ</h1>
            <div class="support__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
        </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      isTabActive : false,
    }
  },
  methods: {

    toggleTab() {
      this.isTabActive = !this.isTabActive
    },
  },
}
</script>
<style scoped>

</style>
