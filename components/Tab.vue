<template>
  <div class="setting__container" v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Tab'
    },
    svg: {
      type: String
    },
    useSvg: {
      type: String
    }
  },
  data () {
    return {
      isActive: true
    }
  }
}
</script>
