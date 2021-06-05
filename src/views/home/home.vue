<template>
  <div id="home">
    <navbar class="home_navbar"><div slot="middle">蘑菇街</div></navbar>
    <scroll class="content" ref="scroll">
      <home-swiper :banner="banner"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control :title="[ '流行', '新款', '精选']" class="tab_control" @changeIndex="currentIndexData"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <backtop @click.native="backToTop"></backtop>
  </div>
</template>

<script>
import homeSwiper from './childComps/homeSwiper.vue'
import recommendView from './childComps/recommendView'
import featureView from './childComps/featureView'

import navbar from 'components/common/navbar/navbar'
import tabControl from 'components/common/tabControl/tabControl.vue'
import scroll from 'components/common/scroll/scroll'
import goodsList from 'components/content/goods/goodslist'
import backtop from 'components/content/backtop/backtop'

import { getHomeMultidata, getHomeGoods } from 'network/home.js'
export default {
  components: {
    navbar,
    homeSwiper,
    recommendView,
    featureView,
    tabControl,
    goodsList,
    scroll,
    backtop
  },
  data () {
    return {
      banner: [],
      keyword: [],
      dkeyword: [],
      recommend: [],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      currentType: 'pop'
    }
  },
  created () {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {

    // 网络请求相关
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        console.log(res.data)
        console.log(this.banner)
        this.banner = res.data.banner.list
        this.keyword = res.data.keywords.list
        this.dkeyword = res.data.dKeyword.list
        this.recommend = res.data.recommend.list
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        console.log(res)
      })
    },
    // 逻辑处理
    currentIndexData (index) {
      // console.log(index)
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backToTop () {
      this.$refs.scroll.scrollTo(0, 0)
    }
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  }
}
</script>

<style lang="less" scoped>
#home {
  position: relative;
  height: 100vh;
  padding-top: 44px;
}
.home_navbar {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tab_control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  /* height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px; */
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
