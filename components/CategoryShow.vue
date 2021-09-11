<template>
    <section class="category-show mb-6">
      <div class="container">
        <h2 class="text-bold pt-2rem">Catégories</h2>
        <div class="columns flex-centered">
          <figure class="m-0 column col-md-6">
              <a href="#">
                <img class="img-responsive h-rounded fit-img img-fit-cover" src=@/assets/images/art-cat.jpg alt="Categorie Art" title="Categorie Art">
                <figcaption>
                  <h4 class="category-title py-1">Arts</h4>
                </figcaption>
              </a>
          </figure>
          <figure class="m-0 column col-md-6">
              <a href="#">
                <img class="img-responsive h-rounded fit-img img-fit-cover" src=@/assets/images/travail-cat.jpg alt="Categorie Travail" title="Categorie Travail">
                <figcaption>
                  <h4 class="category-title py-1">Travail</h4>
                </figcaption>
              </a>
          </figure>
          <figure class="m-0 column col-md-auto">
              <a href="#">
                <img class="img-responsive h-rounded fit-img img-fit-cover" src=@/assets/images/personnes-cat.jpg alt="Categorie Personnes" title="Categorie Personnes">
                <figcaption>
                  <h4 class="category-title py-1">Personnes</h4>
                </figcaption>
              </a>
          </figure>
          <figure class="m-0 column col-md-6">
              <a href="#">
                <img class="img-responsive h-rounded fit-img img-fit-cover" src=@/assets/images/emotions-cat.jpg alt="Categorie Emotions" title="Categorie Emotions">
                <figcaption>
                  <h4 class="category-title py-1">Emotions</h4>
                </figcaption>
              </a>
          </figure>
          <figure class="m-0 column col-md-6">
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
  height: 20em;
  width: 100%;
}

.fit-img:hover {
  box-shadow: rgba(17, 17, 26, 0.1) 0 0 16px;
  transform: translateY(-5px);
  transition: all .3s;
}

@media (max-width:840px)  {
  .fit-img {
    height: 14em;
  }
}
</style>
