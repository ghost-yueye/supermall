<template>
  <div class="back_top">
    <img src="~assets/img/common/top.png" alt="11">
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.back_top {
  position: fixed;
  width: 45px;
  height: 45px;

  bottom: 55px;
  right: 5px;
  z-index: 9;
  img {
    width: 100%;
  }
}
</style>
