<template>
  <div class="cartList">
      <div v-for="(item, index) in cacl" :key="index" class="cartLists" @click="isShow(index,item)">
        <div class="item-selsect" >
          <button class="select" :class="{'item-active':item.checked}">✔</button>
        </div>
        <div class="item-img">
          <img :src="item.image" alt="商品图片">
        </div>
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
          <div class="item-button">
            <div class="item-price">￥{{item.price}}</div>
            <div  class="item-count">×{{item.count}}</div>
          </div>
        </div>
      </div>
      
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll';
export default {
  components: { Scroll },
  name: 'CartList',
  props:{
    scrollObject:Object
  },
  data () {
    return {
      cartLists:[],
      ischeck:true
    };
  },
  computed:{
    cacl(){  
      return this.cartLists = this.$store.state.cartList
    },
  },
  methods: {
    //选中结算按钮
     isShow(index,item){
       //取反赋值
      this.ischeck = !item.checked
      //合并属性，方便发送
      const check = {index:index,ischeck:this.ischeck}
      //发送 check 对象 ，通过mutations修改checked属性
      this.$store.commit('caclCount',check)
    }
  },
  activated() {
      this.scrollObject.refresh()
  },

}
</script>

<style  scpoed >
.centent{
  height: 100%;
}
.cartLists{
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.select{
  margin-top: 40px;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  color: #fff;
  background-color: #FFF;
}
.item-img img{
  width: 80px;
  height: 100px;
  padding: 5px;
}
.item-info{
  width: 100%;
  font-size: 17px;
  color: #336;
  padding: 6px 10px;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  right: 10px;
  margin-left: 10px;
}
.item-title{
 overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 17px;
  font-weight: bold;
}
.item-desc{
  margin-top: 10px;
   overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 10px;
}
.item-button{
  position: relative;
  margin-top: 20px;
  font-size: 20px;
  display: flex;
}
.item-price{
  left: 10px;
  color: rgb(241, 115, 12);
}
.item-count{
  position: absolute;
  right: 1px;
  font-weight: bold;
}
.item-active{
  background-color: #ff8198;
  color: white;
}

</style>