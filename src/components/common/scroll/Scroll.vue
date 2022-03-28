<template>
  <div class="wrapper"  ref="wrapper"> 
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  name: 'Scroll',
  props:{
    probeType:{
      type:Number,
      defalut:0
    },
    pullUpLoad:{
      type:Boolean,
      defalut:false
    }
  },
  data () {
    return {
      scroll:null
    };
  },
  mounted() { 
    //创建滚动对象scroll
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM:true,
      click:true,
      observeImage: true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    //监听滚动
    this.scroll.on('scroll',position=>{
      this.$emit('scroll', position);
      
    })
    //监听上拉事件
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp');  
    })
  },
  methods: {
    //跳转到指定 xy位置
    scrollTo(x,y,time=500){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    //关闭上拉加载更多，以便反复调用
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    //刷新函数，重新定义可刷新区域
    refresh(){  
      this.scroll && this.scroll.refresh()
    }
  },
}
</script>

<style>
</style>