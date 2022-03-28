<template>
  <div class="tab-control">
      <div class="tab-control-item" :class="{active:index == currentIndex}"
      v-for="(item,index) in titles" :key="index" @click="itemclick(index)">
          <span>{{item}}</span>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props:{
      titles:{
          type:Array,
          default:['bn1','bn2','bn3']
      }
  },
  data () {
    return {
      currentIndex:0
    };
  },
  methods: {
      itemclick(index){
          this.currentIndex = index
          this.$emit('tabClick', index);
      }
  },
}
</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    background-color: #fff;
}
.tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: bold;
}
.tab-control-item span{
    padding: 5px;
}
.active{
    color: var(--color-tint);
}
.active span{
    border-bottom: 3px solid var(--color-tint);
}
</style>