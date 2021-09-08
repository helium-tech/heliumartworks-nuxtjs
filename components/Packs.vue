<template>
    <section class="packs mb-6">
      <div class="container">
        <h2 class="text-bold pt-2rem">Découvrez les packs images</h2>
        <div class="columns flex-centered">
          <figure class="column p-relative">
              <a href="#">
                <img class="img-responsive h-rounded p-relative img-pack fit-img img-fit-cover" src=@/assets/images/art-cat.jpg>
                <img class="img-responsive h-rounded fit-img img-fit-cover p-absolute left-image" src=@/assets/images/personnes-cat.jpg>
                <img class="img-responsive h-rounded fit-img img-fit-cover p-absolute right-image" src=@/assets/images/art-cat.jpg>
                <figcaption>
                  <h5 class="category-title py-1">Pack Artiste</h5>
                </figcaption>
              </a>
          </figure>
          <figure class="column p-relative">
              <a href="#">
                <img class="img-responsive h-rounded p-relative img-pack fit-img img-fit-cover" src=@/assets/images/travail-cat.jpg>
                <img class="img-responsive h-rounded fit-img img-fit-cover p-absolute left-image" src=@/assets/images/art-cat.jpg>
                <img class="img-responsive h-rounded fit-img img-fit-cover p-absolute right-image" src=@/assets/images/art-cat.jpg>
                <figcaption>
                  <h5 class="category-title py-1">Pack Designer</h5>
                </figcaption>
              </a>
          </figure>
          <figure class="column p-relative">
              <a href="#">
                <img class="img-responsive h-rounded p-relative img-pack fit-img img-fit-cover" src=@/assets/images/personnes-cat.jpg alt="Categorie Personnes" title="Categorie Personnes">
                <img class="img-responsive h-rounded fit-img img-fit-cover p-absolute left-image" src=@/assets/images/art-cat.jpg alt="Categorie Art">
                <img class="img-responsive h-rounded fit-img img-fit-cover p-absolute right-image" src=@/assets/images/emotions-cat.jpg alt="Categorie Emotions" title="Categorie Emotions">
                <figcaption>
                  <h5 class="category-title py-1">Pack Special</h5>
                </figcaption>
              </a>
          </figure>
          <figure class="column p-relative">
              <a href="#">
                <img class="img-responsive h-rounded p-relative img-pack fit-img img-fit-cover" src=@/assets/images/emotions-cat.jpg>
                <img class="img-responsive h-rounded fit-img img-fit-cover p-absolute left-image" src=@/assets/images/art-cat.jpg>
                <img class="img-responsive h-rounded fit-img img-fit-cover p-absolute right-image" src=@/assets/images/art-cat.jpg>
                <figcaption>
                  <h5 class="category-title py-1">Pack Nature</h5>
                </figcaption>
              </a>
          </figure>
          <figure class="column p-relative">
              <a href="#">
                <img class="img-responsive h-rounded p-relative img-pack fit-img img-fit-cover" src=@/assets/images/travail-cat.jpg>
                <img class="img-responsive h-rounded fit-img img-fit-cover p-absolute left-image" src=@/assets/images/art-cat.jpg>
                <img class="img-responsive h-rounded fit-img img-fit-cover p-absolute right-image" src=@/assets/images/art-cat.jpg>
                <figcaption>
                  <h5 class="category-title py-1">Pack Designer</h5>
                </figcaption>
              </a>
          </figure>
        </div>
        <div class="columns flex-centered">
          <button href="#" class="btn btn-lg btn-cta-y text-center font-500">Plus de packs</button>
        </div>
    </div>
    </section>
</template>

<script>
export default {
  name: 'Packs',
}
</script>

<style scoped>
.fit-img {
  height: 14em;
  width: 100%;
}
.left-image {
	right: .6rem;
	top: -1.2rem;
}
.right-image {
	left: 1rem;
	top: -.8rem;
}

.img-pack {
  position: relative;
  z-index: 1;
}
</style>
