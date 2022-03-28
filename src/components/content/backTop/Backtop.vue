<template>
  <div class="back-top">
    <!-- <img src="/assets/img/commom/top.png" alt=""> -->
    <img src="@/assets/img/tabbar/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data () {
    return {
      
    };
  },
}
</script>

<style scpoed>
.back-top{
    position: fixed;
    right: 8px;
    bottom: 50px;
    /* left: 10px;
    top:50px; */
    z-index: 10;
}
.back-top img{
    width: 43px;
    height: 43px;
}
</style>