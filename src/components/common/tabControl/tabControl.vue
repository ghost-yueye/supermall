<template>
  <div class="tab">
    <div class="tab_item" v-for="(item, index) in title" :key="index" :class="{active: index === currentIndex}" @click="chooseItem(index)">
      <span class="tab_item_title">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    chooseItem (index) {
      this.currentIndex = index
      this.$emit('changeIndex', this.currentIndex)
    }
  }
}
</script>

<style lang="less" scoped>
.tab {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  background-color: #fff;
  .tab_item {
    flex: 1;
    height: 40px;
    .tab_item_title {
      padding: 5px;
    }
  }
  .active {
    color: var(--color-high-text);
    span {
      border-bottom: 3px solid pink;
    }
  }
}
</style>
