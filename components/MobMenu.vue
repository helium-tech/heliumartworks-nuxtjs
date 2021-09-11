<template>
  <section class="mob-menu p-sticky p-4 show-lg bg-gray">
    <a class="column flex-centered"><i class="icon icon-menu" title="Menu"></i></a>
    <a class="column flex-centered badge" data-badge="0"><i class="icon icon-bookmark" title="Ma sélection"></i></a>
    <a class="column flex-centered"><i class="icon icon-search" title="Effectuer une recherche"></i></a>
    <a class="column flex-centered"><i class="icon icon-person" title="Se connecter"></i></a>
  </section>
</template>

<script>

export default {
  name: 'MobMenu'
}
</script>

<style scoped>
@media (max-width:840px)  {
  .mob-menu {
    display: flex !important;
  }
}

.p-4 {
	padding: .8rem;
}
</style>
