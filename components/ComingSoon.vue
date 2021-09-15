<template>
    <section class="container">
      <div class="empty">
        <div class="empty-icon">
          <i class="icon icon-3x icon-emoji"></i>
        </div>
        <p class="empty-title h4">A venir bientôt</p>
        <p class="empty-subtitle">Et si vous parcouriez les images pour le moment ?!</p>
        <div class="empty-action">
          <nuxt-link to="/images" class="btn btn-cta font-500">Parcourir les images</nuxt-link>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'ComingSoon'
}
</script>

<style scoped>

</style>
