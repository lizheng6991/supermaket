<template>
  <div id="home" >
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control ref="tabControl1" 
                  :titles="['流行','新款','精选']" 
                  @tabClick="tabClick" v-show="istabFixed"/> 
    <scroll class="content" 
      ref="scroll" 
      :probe-type="3" 
      @scroll="showScroll"
      :pull-up-load="true"
      @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperimgLoad="swiperimgLoad"/>
      <home-recommends :recommends="recommends"/>
      <feture-view/>
      <tab-control ref="tabControl2" 
                  :titles="['流行','新款','精选']" 
                  @tabClick="tabClick" v-show="!istabFixed"/> 
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTop" class="back-top" v-show="isShow"/>
 </div>
</template>
  
<script>
import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/content/backTop/Backtop'

import FetureView from './childComps/FetureView'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommends from './childComps/HomeRecommends'

import {getHomeMultidata,getHomeGoods} from '@/network/home'
import {debounce} from '@/components/common/utils/Utils.js';






export default {
  name: 'Home', 
 
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommends,
    FetureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners:[],
      recommends:[],
      isShow:false,
      //创建分页对象
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currenttypes:['pop','new','sell'],
      currenttype:'pop',
      tabOffsetTop:0,
      istabFixed:false,
      saveY:0
    }
  },
  created() {
     //请求轮播图数据
    this.getHomeMultidata(),
    
     //请求分页数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    //用防抖函数调用刷新方法
    const refreshs = debounce(this.$refs.scroll.refresh,2000)
    
    //调用 refresh方法  bus 事件总线 ，监听事件 在main.js中用新的vue实例实现
    this.$bus.$on('imgItemLoad',() =>{
      refreshs()
    })
    
  },
  activated() {
    //回来后立即跳转到离开时的位置
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)   
  },
  deactivated() {
    //记录离开时的位置
    this.saveY = this.$refs.scroll.scroll.y
  },
  computed:{
    showGoods(){
      return this.goods[this.currenttype].list
    }
  },
  methods: {
    //吸顶计算  元素的offsetTop属性  $el 获取组件中的元素
    swiperimgLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop -40;
    },
    
    //请求轮播图数据
    getHomeMultidata(){
      //请求轮播图数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list
    })
    },

     //请求分页数据
    getHomeGoods(type){
     
      const page = this.goods[type].page + 1 
      getHomeGoods(type,page).then(res =>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.scroll.refresh()
      }).catch(err => {
        console.log('到底了')
      })
    },
    //点击事件
    tabClick(index){
      this.currenttype = this.currenttypes[index]
      //重新设置 index 避免两个tabcontrol切换时 index对不上
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    //返回顶部按钮事件
    backTop(){  
      //调用自定义ScrollTo方法
      this.$refs.scroll.scrollTo(0,0,500)  
    },
    //判断是否显示top按钮  tabcontrol 是否吸顶
    showScroll(position){
      //判断是否显示top按钮
      this.isShow = position.y < -1000

      //判断tabcontrol 是否吸顶
      this.istabFixed = -this.tabOffsetTop > position.y  
    },
    //上拉加载更多
    loadMore(){
     this.getHomeGoods(this.currenttype)
      this.$refs.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>
#home{
  padding-top: 0px;
  height: 100vh;
  
}
.home-nav{
  background-color: var(--color-tint);
  color: white;
  font-size: 24px;
  letter-spacing: 10px;
  font-weight: 400;
  text-align: center;

 /*  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 9; */
}
.content{
  height: calc(100vh - 0px);
  overflow: hidden;
}
@import "~@/assets/css/page.css";
</style>