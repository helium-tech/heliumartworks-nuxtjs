<template>
  <div class="bg-gray collections">
<div class="collections__center center">
  <div class="collections__wrapper">
    <h3 class="collections__title h3">Packs</h3>
    <div class="collections__inner">
      <div class="collections__slider js-slider-collections"><a class="collections__item" href="#">
          <div class="collections__gallery">
            <div class="collections__preview"><img src=@/assets/images/emotions-cat.jpg alt="Collections"></div>
            <div class="collections__preview"><img src=@/assets/images/emotions-cat.jpg alt="Collections"></div>
            <div class="collections__preview"><img src=@/assets/images/emotions-cat.jpg alt="Collections"></div>
            <div class="collections__preview"><img src=@/assets/images/emotions-cat.jpg alt="Collections"></div>
          </div>
          <h3 class="collections__subtitle">Pack Nature</h3>
          <div class="collections__line">
            <div class="collections__user">
              <div class="collections__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"></div>
              <div class="collections__author">Par <span>Helium</span></div>
            </div>
            <div class="status-stroke-black collections__counter"><span>24 images</span></div>
          </div></a><a class="collections__item" href="#">
            <div class="collections__gallery">
              <div class="collections__preview"><img src=@/assets/images/emotions-cat.jpg alt="Collections"></div>
              <div class="collections__preview"><img src=@/assets/images/emotions-cat.jpg alt="Collections"></div>
              <div class="collections__preview"><img src=@/assets/images/emotions-cat.jpg alt="Collections"></div>
              <div class="collections__preview"><img src=@/assets/images/emotions-cat.jpg alt="Collections"></div>
            </div>
            <h3 class="collections__subtitle">Pack Sport</h3>
          <div class="collections__line">
            <div class="collections__user">
              <div class="collections__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"></div>
              <div class="collections__author">Par <span>Helium</span></div>
            </div>
            <div class="status-stroke-black collections__counter"><span>28 images</span></div>
          </div></a><a class="collections__item" href="#">
            <div class="collections__gallery">
              <div class="collections__preview"><img src=@/assets/images/emotions-cat.jpg alt="Collections"></div>
              <div class="collections__preview"><img src=@/assets/images/emotions-cat.jpg alt="Collections"></div>
              <div class="collections__preview"><img src=@/assets/images/emotions-cat.jpg alt="Collections"></div>
              <div class="collections__preview"><img src=@/assets/images/emotions-cat.jpg alt="Collections"></div>
            </div>
            <h3 class="collections__subtitle">Pack Design</h3>
          <div class="collections__line">
            <div class="collections__user">
              <div class="collections__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"></div>
              <div class="collections__author">Par <span>Helium</span></div>
            </div>
            <div class="status-stroke-black collections__counter"><span>20 images</span></div>
          </div></a></div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'Packs',
}
</script>

<style scoped>
.collections {
  padding: 4rem 0;
}
.collections__wrapper {
    position: relative;
}

.collections__slider {
  display: flex;
}
.collections__inner {
    margin: 0 -16px;
}
.collections__gallery {
    display: flex;
    flex-wrap: wrap;
    margin: -8px -4px 16px;
}
.collections__preview:first-child {
    flex: 0 0 calc(100% - 8px);
    width: calc(100% - 8px);
}
.collections__preview {
	flex: 0 0 calc(33.333% - 8px);
	width: calc(33.333% - 8px);
	margin: 8px 4px 0;
}
.collections__preview img {
    width: 100%;
    border-radius: 8px;
}
.collections__item  {
  padding: 0 14px;
}
.collections__line {
    display: flex;
    align-items: center;
}
.collections__user {
    display: flex;
    align-items: center;
    margin-right: auto;
    color: #353945;
}
.collections__counter {
    flex-shrink: 0;
}
.status-stroke-black {
    box-shadow: inset 0 0 0 2px #E6E8EC;
    color: #777E90;
}
</style>
