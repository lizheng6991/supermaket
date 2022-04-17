<template>
  <div>
      <!-- <div v-for="(item, index) in showGoods" :key="index">{{item}}</div> -->
      <goods-list :goods="showGoods.top"/>
      <tab-control :titles="['综合','新品','销量']" @tabClick="tabClick"/>
      <goods-list :goods="showGoods.bom"/>
  </div>
</template>

<script>
import GoodsList from '@/components/content/goods/GoodsList';
import TabControl from '@/components/content/tabControl/TabControl';



export default {
  components: {
    GoodsList,
    TabControl 
  },
  props:{
      showGoods:{}
  },
  name: 'RightList',
  data () {
    return {
     
    };
  },
  methods: {
      tabClick(index){
      this.$emit('tabClick',index);
    },
  },
}
</script>

<style scpoed>
</style>