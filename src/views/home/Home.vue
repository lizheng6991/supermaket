<template>
  <div id="home" >
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommends :recommends="recommends"></home-recommends>
 </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

import {getHomeMultidata} from '@/network/home'

import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommends from './childComps/HomeRecommends'

export default {
  name: 'Home',
 
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommends
  },
  data() {
    return {
      banners:[],
      recommends:[]
    }
  },
  created() {
    //请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(this.banners,this.recommends);
    })
  },
}
</script>
<style >
.home-nav{
  background-color: var(--color-tint)
}
@import "~@/assets/css/page.css";
</style>