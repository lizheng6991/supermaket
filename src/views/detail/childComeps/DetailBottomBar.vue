<template>
  <div class="bottom-bar">
      <div class="bar-item bar-left">
          <div>
              <i class="icon service"></i>
              <span class="text">客服</span>
          </div>
           <div>
              <i class="icon shop"></i>
              <span class="text">店铺</span>
          </div>
           <div @click="addCart" >
              <i class="icon" :class="{'cartde':isCart}"></i>
              <span class="text">收藏</span>
          </div>
      </div>
      <div class="bar-item bar-right">
          <div class="cart" @click="addToCart">加入购物车</div>
          <div class="buy">购买</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  data () {
    return {
      isCart:false
    };
  },
  methods: {
      addToCart(){
         this.$emit('addCart');     
      },
      addCart(){
          this.isCart = !this.isCart
      }
  },
}
</script>

<style scpoed>
.bottom-bar{
     height: 58px;
    display: flex;
    position: fixed;
    bottom: 0px;
    right: 0px;
    left: 0px;
    z-index: 20;
    text-align: center;
} 
.bar-item{
    display: flex;
    flex: 1;
}
.bar-item div{
    flex: 1;
}
.bar-left{
    background-color: #FFF;
}
.bar-left .text{
    font-size: 13px;
}
.bar-left .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url('~@/assets/img/detail/detail_bottom.png') 0 0/100%;
}
.bar-left .service{
    background-position: 0 -54px;
}
.bar-left .shop{
    background-position: 0 -98px;
}
.bar-left .cartde{
    background-position: 0 -27px;
}
.bar-right{
    text-align: center;
    font-size: 18px;
    color: #FFF;
    line-height: 58px;
    font-weight: bold;
}
.bar-right .cart{
    flex: 1;
    background-color: #ecd501;
}

.bar-right .buy{
    flex: 1;
    background-color: #f69;
}
</style>