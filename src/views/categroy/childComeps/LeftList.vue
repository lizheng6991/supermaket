<template>
  <div>
      <div v-for="(item, index) in titles" :key="index" 
      class="left-list-content"
      @click="isActive(index)" :class="{'left-list-active':currentIndex == index}">
      {{item.title}}
      </div>
  </div>
</template>

<script>
export default {
  name: 'LeftList',
  props:{
      titles:[]
  },
  data () {
    return {
      isactive:false,
      currentIndex:0
    };
  },
  methods: {
      isActive(index){
          this.currentIndex = index
          this.$emit('getsubCate',index);     
      }
  },
}
</script>

<style scpoed>
.left-list-content{
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    padding: 10px ;
    font-weight: bold;
}
.left-list-active{
    background-color: #fff;
    color: var(--color-tint);
}
</style>