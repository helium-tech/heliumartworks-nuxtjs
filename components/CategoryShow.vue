<template>
    <section class="category-show mb-6">
      <div class="container">
        <h2 class="text-bold pt-2rem">Catégories</h2>
        <div class="columns flex-centered">
          <figure class="m-1 column">
              <a href="#">
                <img class="img-responsive h-rounded fit-img img-fit-cover" src=@/assets/images/art-cat.jpg alt="Categorie Art" title="Categorie Art">
                <figcaption>
                  <h4 class="category-title py-1">Arts</h4>
                </figcaption>
              </a>
          </figure>
          <figure class="m-1 column">
              <a href="#">
                <img class="img-responsive h-rounded fit-img img-fit-cover" src=@/assets/images/travail-cat.jpg alt="Categorie Travail" title="Categorie Travail">
                <figcaption>
                  <h4 class="category-title py-1">Travail</h4>
                </figcaption>
              </a>
          </figure>
          <figure class="m-1 column">
              <a href="#">
                <img class="img-responsive h-rounded fit-img img-fit-cover" src=@/assets/images/personnes-cat.jpg alt="Categorie Personnes" title="Categorie Personnes">
                <figcaption>
                  <h4 class="category-title py-1">Personnes</h4>
                </figcaption>
              </a>
          </figure>
          <figure class="m-1 column">
              <a href="#">
                <img class="img-responsive h-rounded fit-img img-fit-cover" src=@/assets/images/emotions-cat.jpg alt="Categorie Emotions" title="Categorie Emotions">
                <figcaption>
                  <h4 class="category-title py-1">Emotions</h4>
                </figcaption>
              </a>
          </figure>
          <figure class="m-1 column">
              <a href="#">
                <img class="img-responsive h-rounded fit-img img-fit-cover" src=@/assets/images/retro-cat.jpg alt="Categorie Retro" title="Categorie Retro">
                <figcaption>
                  <h4 class="category-title py-1">Retro</h4>
                </figcaption>
              </a>
          </figure>
        </div>
    </div>
    </section>
</template>

<script>
export default {
  name: 'CategoryShow',
}
</script>

<style scoped>
.fit-img {
  height: 18em;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
}
</style>
