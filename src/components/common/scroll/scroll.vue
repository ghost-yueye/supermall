<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
    })

    this.scrollTo(0, 0)
  },
  methods: {
    scrollTo (x, y, time = 500) {
      this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
