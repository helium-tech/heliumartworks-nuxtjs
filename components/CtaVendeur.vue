<template>
    <section class="cta-vendeur">
      <div class="section center">
        <h2 class="text-bold pt-2">Vendez vos oeuvres</h2>
        <nuxt-link to="/vendre-mes-oeuvres">
          <img class="img-responsive fit-img s-rounded" src=@/assets/images/sell-cta.jpg alt="Vendre mes oeuvres">
        </nuxt-link>
    </div>
    </section>
</template>

<script>
export default {
  name: 'CtaVendeur',
}
</script>

<style scoped>

.buy_oeuvre_back{
  background-image: url("@/assets/images/art-cat.jpg");
}
.cta-vendeur {
 padding-top: 4rem;
}
.l-rounded {
  border-top-left-radius: .4rem;
  border-bottom-left-radius: .4rem;
}
.r-rounded {
  border-top-right-radius: .4rem;
  border-bottom-right-radius: .4rem;
}
.px-6 {
  padding: 0 2rem;
}

@media (max-width: 840px) {
  .px-6 {
    padding: 1rem;
  }
}
</style>
