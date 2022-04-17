<template>
  <div class="cart-bottom-bar">
     <div class="cart-bottom-select" @click="selectAll">
          <button class="cart-select" :class="{'cart-bottom-active':isSelectAll}">✔</button>
          <div class="cart-select-text">全选</div>
    </div>
    <div class="cart-bottom-text">合计:￥{{calcuCount}}</div>
    <div class="cart-bottom-right" @click="calculate">
      <span>去计算({{checklength}})</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CartBottomBars',
  data () {
    return {
    };
  },
  computed:{
    calcuCount(){
      return this.$store.state.cartList.filter(item =>{
        return item.checked 
      }).reduce((pre,item) => {
        return pre + item.price*item.count
      },0).toFixed(2)
    },
    checklength(){
      return this.$store.state.cartList.filter(item =>item.checked).length
    },
    isSelectAll(){
      if(this.$store.state.cartList.length == 0){
          return false
      }
      return this.$store.state.cartList.every(item => item.checked == true )
    }
  },
  methods: {
    selectAll(){
      let flag = true
      if(this.isSelectAll){
          flag = false
      }      
    for (const item of this.$store.state.cartList) {
         item.checked =  flag
      }
    },
    calculate(){
      if(this.$store.state.cartList.every(item => item.checked == false )){
        this.$toast.show('请选择要结算的商品')
      }
    }
  },
}
</script>

<style scpoed>
.cart-bottom-bar{
  background-color: rgb(235, 235, 235);
  height: 50px;
  position:fixed;
  bottom: 48px;
  left: 0;
  right: 0;
  font-weight: bold;
  display: flex;

}
.cart-bottom-select{
  text-align: center;
  margin-left: 10px;
  display: flex;
}
.cart-select-text{
  margin-left: 5px;
  margin-top: 15px;
}
.cart-select{
  margin-top: 15px;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  color: #fff;
  background-color: #FFF;
}
.cart-bottom-text{
  margin-left: 10px;
  margin-top: 13px;
  font-size: 18px;
  color:rgb(241, 115, 12);
}
.cart-bottom-right{
  background-color:var(--color-tint);
  position: absolute;
  width: 25%;
  height: 100%;
  right: 0;
  text-align: center;
  color: white;
}
.cart-bottom-right span{
  position: relative;
  top: 15px;

}
.cart-bottom-active{
  background-color: #ff8198;
  color: white;
}
</style>