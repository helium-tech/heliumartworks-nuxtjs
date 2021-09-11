<template>
    <section class="promote pt-2rem mb-2">
      <div class="container">

        <div class="columns">
          <div class="column hide-md">
              <a href="#">
                <img class="img-responsive side-img h-rounded fit-img img-fit-cover" src=@/assets/images/painting.jpg alt="Painting">
              </a>
          </div>
          <div class="column">
            <figure class="m-0 mb-2 p-relative h-rounded">
              <div class="p-relative">
                <a href="#">
                  <img class="img-responsive h-rounded middle-img-fit img-fit-cover" src=@/assets/images/personnes-cat.jpg alt="Categorie Personnes" title="Categorie Personnes">
                </a>
                <figcaption class="figure-caption">
                  <span class="image-title">Profitez de la promo</span>
                  <h2 class="image-title mb-2 text-bold">-50% sur ces images</h2>
                </figcaption>
              </div>
            </figure>
            <figure class="m-0 mt-2 p-relative h-rounded">
              <div class="p-relative">
                <a href="#">
                  <img class="img-responsive h-rounded middle-img-fit img-fit-cover" src=@/assets/images/personnes-cat.jpg alt="Categorie Personnes" title="Categorie Personnes">
                </a>
              </div>
            </figure>
          </div>
          <div class="column">
            <a href="#">
              <img class="img-responsive h-rounded side-img fit-img img-fit-cover" src=@/assets/images/painting.jpg alt="Painting">
            </a>
          </div>
        </div>

      </div>
    </section>
</template>

<script>

export default {
  name: 'Promote'
}
</script>

<style scoped>
.fit-img {
	height: 30em;
	width: 100%;
}

.figure-caption {
  opacity: 1
}

.middle-img-fit {
	height: 15em;
	width: 100%;
}
</style>
