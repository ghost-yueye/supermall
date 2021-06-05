<template>
  <swiper>
    <swiper-item v-for="item in banner" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/swiper'
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banner: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
</style>
