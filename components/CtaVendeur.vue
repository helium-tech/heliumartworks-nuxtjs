<template>
    <section class="cta-vendeur pb-8">
      <div class="container">
        <h2 class="text-bold pt-2">Vendez vos oeuvres</h2>
        <div class="columns flex-centered bg-gray r-rounded">
          <div class="col-5 hide-lg">
            <img class="img-responsive fit-img img-fit-cover l-rounded" src=@/assets/images/art-cat.jpg alt="Categorie Art">
          </div>
          <div class="column col-7 px-6 py-2 col-lg-auto">
            <h2>Vous êtes artiste, photographe ou créateur africain de contenu ?!</h2>
            <p>Ouvrez un compte, publiez vos oeuvres et faites vous un revenu passif !</p>
            <button href="#" class="btn btn-cta btn-lg mr-1 font-500">Vendre mes oeuvres</button>
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
.fit-img {
  height: 24rem;
  width: 100%;
}
.l-rounded {
  border-top-left-radius: .4rem;
  border-bottom-left-radius: .4rem;
}
.r-rounded {
  border-top-right-radius: .4rem;
  border-bottom-right-radius: .4rem;
}
</style>
