<template>
  <div class="toast" v-show="isshow">
      {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      message:"",
      isshow:false
    };
  },
  methods: {
      show(mes = '默认文字',delay = 2000){
          /* clearTimeout */
          this.message = mes
          this.isshow = true
          setTimeout(() => {
              this.isshow = false
              this.message = ""
          }, delay);
      }
  },
}
</script>

<style scpoed>
.toast{
    position: fixed;
    padding: 8px 10px;
    top: 50%;
    left: 50%;
    background-color: rgb(0, 0, 0,0.8);
    color: white;
    z-index: 999;
    transform: translate(-50%,-50%);
}
</style>