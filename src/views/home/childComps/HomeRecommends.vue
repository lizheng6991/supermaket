<template>
  <div class="recommend">
      <div class="recommend-item" v-for="item in recommends" :key="item.sort">
        <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
        </a>        
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommends',
  props:{
      recommends:{
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

<style>
.recommend{
  display: flex;
  text-align: center;
  padding-top: 10px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  padding-bottom: 20px;
  border-bottom: 10px solid #eee;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 65px;
  height: 65px;
}

</style>