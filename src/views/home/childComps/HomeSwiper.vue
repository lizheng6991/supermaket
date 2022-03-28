<template>
  <div>
      <swiper>
      <swiper-item v-for="item in banners" :key="item.title" >
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

import {Swiper,SwiperItem} from '@/components/common/swiper/index' 
export default {
  name: 'HomeSwiper',
  components:{
      Swiper,
      SwiperItem
  },
  props:{
    banners:{
        type:Array,
        default(){
            return []
        }
    }
  },
  data() {
    return {
      isemit:false
    }
  },
  methods: {
    imgLoad(){
      if(!this.isemit){
        this.$emit('swiperimgLoad');
        this.isemit = true
      }
    }
  }
}
</script>

<style>
</style>