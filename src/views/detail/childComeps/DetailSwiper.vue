<template>
  <div>
      <swiper>
          <swiper-item class="detail-swiper" 
          v-for="(item, index) in topImages" :key="index">
              <img :src="baceUrl+item" alt="">
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper/index' 
export default {
  name: 'DetailSwiper',
  components:{
      Swiper,
      SwiperItem
    
  },
  props:{
      topImages:{
          type:Array,
          defalut:[]
      }
  },
  data () {
    return {
      baceUrl:"http:"
    };
  },
}
</script>

<style scpoed>
.detail-swiper{
    height: 300px;
    overflow: hidden;
}

</style>