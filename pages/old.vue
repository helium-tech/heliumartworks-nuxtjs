<template>
  <div class="home">
    <Hero></Hero>
    <Vedette></Vedette>
    <CategoryShow></CategoryShow>
    <Promote></Promote>
    <Packs></Packs>
    <CtaVendeur></CtaVendeur>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Vedette from '~/components/Vedette.vue'
import CategoryShow from '~/components/CategoryShow.vue'
import Promote from '~/components/Promote.vue'
import Packs from '~/components/Packs.vue'
import CtaVendeur from '~/components/CtaVendeur.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Vedette,
    CategoryShow,
    Promote,
    Packs,
    CtaVendeur
  }
}
</script>
