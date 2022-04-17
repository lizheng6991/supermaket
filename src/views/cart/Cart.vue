<template>
    <div>
      <!-- 导航 -->
      <nav-bar class="cart-navbar">
        <div slot="center">购物车({{counts}})</div>
      </nav-bar>
      <scroll class="cart-content" 
      ref="scroll" 
      :probe-type="3"
      :pull-up-load="true">
      <!-- 商品列表 -->
      <cart-list class="cart-list" :scrollObject="scrollObject"/>
      </scroll>
       <!-- 结算按钮 -->
       <cart-bottom-bars/>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar';
import Scroll from '@/components/common/scroll/Scroll';

import CartList from './childComeps/CartList.vue';
import CartBottomBars from './childComeps/CartBottomBars.vue';




export default {
  components: { 
    NavBar,
    CartList,
    Scroll,
    CartBottomBars,
  },
  name: 'Cart',
  data () {
    return {
      count:0,
      scrollObject:null
    };
  },
  computed:{
    counts(){
      return this.count = this.$store.state.cartList.length
    },
  },
  mounted() {
    this.$refs.scroll.refresh()
    this.scrollObject =  this.$refs.scroll
  },
}
</script>

<style scpoed>
.cart-navbar{
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
.cart-content{
  height: calc(100vh - 144px);
   margin-top: 44px;
}

</style>