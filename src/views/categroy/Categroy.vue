<template>
    <div class="category">
      <nav-bar class="cate-navbar">
          <div slot="center">分类</div>
      </nav-bar>
      <div class="category-content" >
      <scroll class='cate-content cate-left' 
      ref="scroll" 
      :probe-type="3" 
      :pull-up-load="true">
        <left-list :titles="goodsList" @getsubCate='getsubCate' class="left-list"/>
      </scroll>
      <scroll class='cate-content cate-right'
      ref="scroll" 
      :probe-type="3" 
      :pull-up-load="true">
        <right-list :showGoods="subgoods" class="right-list"  @tabClick='tabClick'/>
      </scroll>
      </div>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar';
import Scroll from '@/components/common/scroll/Scroll';

import {getLists,getSubcategory,getCategoryDetail} from '@/network/categroy';

import LeftList from './childComeps/LeftList.vue';
import RightList from './childComeps/RightList.vue';

export default {
  name: 'Category',
  components:{
    LeftList,
    RightList,
    NavBar,
    Scroll
  },
  data () {
    return {
      goodsList:[],
      subgoods:{top:[],bom:[]},
      types:['pop','new','sell'],
      currenttype:'pop'
    };
  },
  created() {
    //请求分类列表
    getLists().then(res =>{
      const data = res.data.category 
      //左边列表的内容
      this.goodsList = data.list
      //右边对应的内容
      getSubcategory(this.goodsList[0].maitKey).then(res =>{
        //赋值给subgoods第一个属性中
        this.subgoods.top = res.data.list
      })
      //请求默认的右边下面商品展示内容
      this.getcate(0,this.currenttype)
    })
   
  },
  methods: {
    //左边按钮事件，点击获取右边对应的内容
    getsubCate(index){
      getSubcategory(this.goodsList[index].maitKey).then(res =>{
        //赋值给subgoods第一个属性中
        this.subgoods.top = res.data.list
      })
    },
    //切换综合、新品、销量
    tabClick(index){
      this.currenttype = this.types[index]
      this.getcate(index,this.currenttype)
    },
    //封装请求右边下面商品展示内容
    getcate(index,type){
      //请求右边下面商品展示内容
      getCategoryDetail(this.goodsList[index].miniWallkey,type).then(res =>{
        //将属性中的img改名为image，方便goodsList展示
        let obj = {}
        obj.image = ''
        res.forEach(item => {
          if('img' in item){
          obj.image = item.img
          delete item.img
          item.image = obj.image
          }else{
            return
          }
        });
        //赋值给subgoods第二个属性中
        this.subgoods.bom = res
      })
    }
  },
}
</script>

<style scpoed>
.cate-navbar{
  background-color: var(--color-tint);
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 9;
}
.category-content{
  display: flex;
}
.cate-left{
  width: 25%;
  background-color: aliceblue;
}
.cate-right{
  width: 75%;
}
.cate-content{
  margin-top: 44px;
  height: calc(100vh - 98px);
}
</style>