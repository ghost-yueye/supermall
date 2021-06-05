<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.id" class="recommend_item">
      <a :href="item.link" class="recommend_item_it">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    recommend: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.recommend {
  display: flex;
  width: 100%;
  padding: 10px 0 20px;
  justify-content: space-around;
  border-bottom: 8px solid #eee;
  .recommend_item {
    text-align: center;
    margin-top: 5px;
    .recommend_item_it {
      display: flex;
      font-size: .75rem;
      flex-direction: column;
      justify-content: center;
      img {
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
