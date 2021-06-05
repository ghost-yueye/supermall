<template>
  <div class="nav_bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="middle"><slot name="middle"></slot></div>
    <div class="right"><slot name="right"></slot></div>
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

<style scope>
.nav_bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.left {
  width: 60px;
}
.right {
  width: 60px;
}
.middle {
  flex: 1;
}
</style>
