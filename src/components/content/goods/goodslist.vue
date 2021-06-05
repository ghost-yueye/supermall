<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :key="item.id" :goodsitem="item" class="item"></goods-list-item>
  </div>
</template>

<script>
import goodsListItem from './goodslistitem'
export default {
  components: {
    goodsListItem
  },
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-around;
    .item {
      width: 48%;
    }
  }
</style>
