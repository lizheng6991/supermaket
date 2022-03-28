<template>
  <div class="shop-info"> 
      <div class="shop-top">
          <img :src="shop.logo" alt="" @load="shopLoad">
          <span class="title">{{shop.name}}</span>
      </div>
      <div class="shop-middle">
          <div class="shop-middle-item shop-middle-left">
              <div class="info-sells">
                  <div class="sell-count">
                      {{formatNumber}}
                  </div>
                  <div class="sells-text">总销量</div>
              </div>
              <div class="info-goods">
                  <div class="goods-count">
                      {{shop.goodsCount}}
                  </div>
                  <div class="sells-text">全部宝贝</div>
              </div>
          </div>
          <div class="shop-middle-center"></div>
          <div class="shop-middle-item shop-middle-right">
              <table>
                  <tr v-for="(item, index) in shop.score" :key="index">
                      <td>{{item.name}}</td>
                      <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                      <td class="better" :class="{'better-more':item.isBetter}">
                        <span>{{item.isBetter ? '高':'低'}}</span>    
                      </td>                  
                  </tr>
              </table>
          </div>
      </div>
      <div class="shop-bottom">
          <a :href="shop.shopURL">
            <div class="enter-shop">进店逛逛</div>
          </a> 
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props:{
      shop:{
          type:Object,
          default:{}
      }
  },
  computed: {
      formatNumber() {
           return  this.sells = (this.shop.sells / 10000).toFixed(1) + '万';
    }

  },
  methods: {
      shopLoad(){
          this.$emit('shopLoad');
      }
  },
  data () {
    return {
      sells:1
    };
  },
}
</script>

<style scpoed>
.shop-info{
    margin-top: 5px;
     padding: 0 8px;
    position: relative;
    z-index: 13;
    border-bottom: 5px solid #f2f5f8;
}
.shop-top{
    margin-left: 10px;
    margin-top: 20px;
}
.shop-top img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
}
.shop-top span{
    margin-left: 10px;
    position: relative;
    top:-16px;
    font-size: 18px;
    font-weight: bold;
}
.shop-middle-center{
    background:#9e9292;/*背景色为浅灰色*/
	width:1.2px;/*设置宽高*/
	height:50px;
}
.shop-middle{
    display: flex;
    justify-content:space-around;
    margin-top: 40px;
}
.shop-middle-left{
    display: flex;
    justify-content: space-around;
    text-align: center;
    
}
.info-sells{
    margin-right: 15px;
    font-size: 14px;
    
}
.sell-count ,.goods-count{
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
    font-weight: bold;
}
.sells-text{
    color: #333;
}
.shop-middle-right table{
    position: relative;
    margin-top: -13px;
    text-align: center;
     font-size: 16px;
     width: 25vh;
     height: 80px;
     color: #333;
    font-weight: bold;
}
.score{
    color: rgb(126, 211, 56);
}
.score-better{
    color: var(--color-tint);
}
.better{
    background-color: rgb(126, 211, 56);
    border-radius: 10%;
    color: #fff;
    font-size: 14px;
}
.better-more{
    background-color:var(--color-tint);
}
.shop-bottom{
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    font-weight: bold;
    width: 180px;
    height: 30px;
    text-align: center;
    margin-top: 30px;
    margin: 20px auto;
    background-color: #eff5f6;
    border-radius: 64px;
    letter-spacing: 5px;
}
</style>