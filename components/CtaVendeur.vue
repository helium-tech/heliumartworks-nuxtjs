<template>
    <section class="cta-vendeur">
      <div class="section center">
        <h2 class="text-bold pt-2">Vendez vos oeuvres</h2>
        <div class="columns flex-centered bg-gray r-rounded buy_oeuvre_back">
          <div class="col-5 hide-lg">
            <img class="img-responsive fit-img l-rounded" src=@/assets/images/art-cat.jpg alt="Categorie Art">
          </div>
          <div class="column col-7 px-6 col-lg-auto">
            <h2>Vous êtes artiste, photographe ou créateur africain de contenu ?!</h2>
            <p>Ouvrez un compte, vendez vos oeuvres et soyez rémunéré !</p>
            <nuxt-link to="/vendre-mes-oeuvres" class="btn btn-cta btn-lg mr-1 font-500">Vendre mes oeuvres</nuxt-link>
          </div>
        </div>
    </div>
    </section>
</template>

<script>
export default {
  name: 'CtaVendeur',
}
</script>

<style scoped>
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
