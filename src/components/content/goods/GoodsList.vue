<template>
  <div class="goods-list">
    <goods-item v-for="(item,index) in goods" :key="index" :goodsItem="item"/>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem';
export default {
  components: { 
      GoodsItem 
  },
  name: 'GoodsList',
  props:{
      goods:{
          type:Array,
          defalut(){
              return []
          }
      }
  },
  data () {
    return {
      
    };
  },
}
</script>

<style scpoed>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

</style>