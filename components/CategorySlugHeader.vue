<template>
  <div class="section main main_stays-category">
<div class="main__center center">
  <div class="main__preview bg-gray">
    <div class="main__wrap">
      <h1 class="main__title h2 hero">Catégorie: {{title}}</h1>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'CategorySlugHeader',
  props: {
    title: String
  }
}
</script>

<style scoped>
.main__preview img {
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    -o-object-fit: cover;
    object-fit: cover;
}

.main_stays-category .main__preview:before {
    padding-bottom: 20%;
}

.main__wrap {
  padding: 0
}
</style>
