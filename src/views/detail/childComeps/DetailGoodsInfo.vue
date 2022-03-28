<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
      <div class="info-desc clear-fix"> 
          <div class="i-start"></div>
          <div class="start"></div>
          <div class="desc">{{detailInfo.desc}}</div>
          <div class="end"></div>
          <div class="i-end"></div>
      </div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list" 
      v-for="(item, index) in detailInfo.detailImage[0].list" :key="index">
          <img :src="item" alt="" @load="imgLoad">
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props:{
      detailInfo:{
          type:Object,
          defalut:{}
      }
  },
  data () {
    return {
      
    };
  },
  methods: {
      imgLoad(){
          this.$emit('imgLoad');     
      }
  },
}
</script>

<style scpoed>
.goods-info{
    margin-top: 15px;
    position: relative;
}
.info-list img{
    width: 100%;
}
.start{
    background-color: black;
    width: 100px;
    height: 1px;
    margin-bottom: 10px;
     margin-left: 11px;
}
.i-start{
    background-color: black;
    width: 5px;
    height: 5px;
    margin-left: 10px;
    margin-top: 10px;
}
.end{
    background-color: black;
    width: 100px;
    height: 1px;
    position: absolute;
    right: 10px;
    margin-top: 10px;
}
.i-end{
    background-color: black;
    width: 5px;
    height: 5px;
    position: absolute;
    right: 10px;
    margin-top: 5px;
}
.desc{
    line-height: 40px;
    margin-left: 10px;
    font-size: 14px;
}
.info-key{
    margin-top: 10px;
    margin-bottom: 10px;
     font-size: 16px;
     margin-left: 10px;
     font-weight: bold;
}
</style>