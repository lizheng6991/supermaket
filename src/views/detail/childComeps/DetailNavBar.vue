<template>
  <div>
      <nav-bar class="navbar">
          <div class="left" slot="left" @click="backClick"> &lt;</div>
          <div slot="center" class="detail-nav">
              <div class="title" @click="titleClick(index)" :class="{active:currentIndex == index}"
              v-for="(item, index) in titles" :key="index">{{item}}</div>
          </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  components: { 
      NavBar,
  },
  name: 'DetailNavBar',
  data () {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    };
  },
  methods: {
      titleClick(index){
          this.currentIndex = index
          this.$emit('titleClick', index);
      },
      backClick(){
          this.$router.push('/home')
      }
  },
}
</script>

<style scpoed>
.navbar{
  position: relative;
  z-index: 15;
  background-color: #fff;
}
.detail-nav{
  display: flex;
  font-size: 15px;
}
.detail-nav .title{
   flex: 1;
}
.active{
    color: var(--color-tint);
}
.left{
    font-weight: 300;
    font-size: 30px;
}
</style>