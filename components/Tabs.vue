<template>
  <div class="setting__center">
    <div class="setting__menu">
      <a v-for="(tab, index) in tabs" :key="tab.title" @click="selectTab(index)"
        class="setting__link">
        <svg class="icon" :class="tab.svg">
          <use :xlink:href="tab.useSvg"></use>
        </svg>
        {{ tab.title }}
      </a>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedIndex: 0,
      tabs: []
    }
  },
  mounted () {
    this.selectTab(0)
  },
  methods: {
    selectTab (i) {
      this.selectedIndex = i
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
 },
created () {
    this.tabs = this.$children
  }
}
</script>
