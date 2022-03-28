<template>
    <div id="detail">
        <detail-nav-bar @titleClick="titleClick" ref="navbar"/>
        <scroll class="centent"
        :probe-type="3"
        :pull-up-load="true"
        ref="scroll" 
        @scroll="tabscroll">
        <detail-swiper class="detail-swiper" :top-images="topImages" ref="detail-swiper" />
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop" @shopLoad="shopLoad" />
        <detail-goods-info :detailInfo="detailInfo" @imgLoad="goodsLoad"/>
         <detail-param-info :paramInfo="paramInfo" class="paraminfo" ref="paraminfo"/>
         <detail-comment-infon :commentInfo="commentInfon" class="comment" ref="comment"/>
         <goods-list :goods="recommendInfo" class="shopinfo" ref="shopinfo"/>
        </scroll>
    </div>
</template>

<script>
import {getDetail,Goods,Shop,GoodsParam,getRecomend} from '@/network/detail';

import Scroll from '@/components/common/scroll/Scroll';
import GoodsList from '@/components/content/goods/GoodsList';

import {debounce} from '@/components/common/utils/Utils.js';

import DetailNavBar from './childComeps/DetailNavBar.vue';
import DetailSwiper from './childComeps/DetailSwiper.vue';
import DetailBaseInfo from './childComeps/DetailBaseInfo.vue';
import DetailShopInfo from './childComeps/DetailShopInfo.vue';
import DetailGoodsInfo from './childComeps/DetailGoodsInfo.vue';
import DetailParamInfo from './childComeps/DetailParamInfo.vue';
import DetailCommentInfon from './childComeps/DetailCommentInfon.vue';



export default {
  components: { 
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfon,
    GoodsList
  },
  name: 'Detail',
  data () {
    return {
      iid:null,
      topImages:null,
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfon:{},
      recommendInfo:[],
      themeTopYs:['.detail-swiper','.paraminfo','.comment','.shopinfo'],
      tabY:[],
      debance:null,
      currentIndex:0

    };
  },
  methods:{
    //监听顶部按钮事件
    titleClick(index){
      console.log(index);
      this.currtentindex = index
      //this.$refs.scroll.scroll.scrollToElement(this.themeTopYs[index],1000)
      this.$refs.scroll.scrollTo(0,-this.tabY[index],300)
    },
    //监听滚动
    tabscroll(opsition){
      this.tabY.forEach((element,index) => {
        if(this.$refs.navbar.currentIndex !== index ){
          if(-opsition.y < this.tabY[index+1] && -opsition.y >= this.tabY[index] ){
            this.$refs.navbar.currentIndex = index 
            console.log(this.$refs.navbar.currentIndex,index); 
          }
          if(-opsition.y >= this.tabY[this.tabY.length - 1]){
                this.$refs.navbar.currentIndex = this.tabY.length - 1
            }
        }
        
        
      });
     
  
     
    },
    //detailshop 刷新
    shopLoad(){
        this.$refs.scroll.refresh()
    },
    //detailgoods 刷新
    goodsLoad(){
     this.$refs.scroll.refresh()
       
      this.debance()
    }
  },
  created() {
     this.iid = this.$route.params.iid
      //通过iid请求数据
      getDetail(this.iid).then(res =>{
      //保存result数据  
      const data = res.result
      //获取轮播图图片
      this.topImages = data.itemInfo.topImages 
      //创建goods对象
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //创建店铺信息对象
      this.shop = new Shop(data.shopInfo)
      //保存商品详情信息
      this.detailInfo = data.detailInfo
      //保存商品参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      //保存评价信息
      if(data.rate.cRate !== 0){
        this.commentInfon = data.rate.list[0]
      }
      }),
      //请求推荐商品信息
      getRecomend().then(res =>{
        this.recommendInfo =res.data.list
      })
      this.debance = debounce(()=>{ 
        this.tabY=[]
        this.tabY.push(0)
        this.tabY.push(this.$refs.paraminfo.$el.offsetTop)
        this.tabY.push(this.$refs.comment.$el.offsetTop)
        this.tabY.push(this.$refs.shopinfo.$el.offsetTop)
      },500) 
  },
}
</script>

<style scpoed>
#detail{
  position: relative;
  z-index: 12;
  background-color: #fff;
  height: 100vh;
}
.centent{
  height: calc(100vh - 44px);
}
</style>