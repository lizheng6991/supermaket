<template>
  <div class="goods-item" @click="itemClick">   
    <img :src="showImg" alt="" @load="imgLoad"> <!-- load:图片加载一次执行一次 -->
    <div class="goods-info">  
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props:{
      goodsItem:{
          type:Object,
          defalut(){
              return {}
          }
      }
  },
  methods: {
    imgLoad(){
      this.$bus.$emit('imgItemLoad')
    },
    itemClick(){
      this.$router.push('/detail/'+this.goodsItem.iid)
      
    }
  },
  computed:{
    showImg(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  data () {
    return {
      
    };
  },
}
</script>

<style>
.goods-item{
    padding-bottom: 40px;
     width: 50%;
     position: relative;
}
.goods-item img{
    height: 99%;
    width: 100%;
    border-radius: 5px;
}
.goods-info{
    width: 100%;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    margin-bottom: 2px;
}
.goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}
.price{
    color: var(--color-high-text);
    margin-right: 20px;
}
.goods-info .collect {
    position: relative;
}
.collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>