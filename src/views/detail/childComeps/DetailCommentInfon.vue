<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
      <div class="info-header">
          <div class="header-title">用户评价</div>
          <div class="header-more">更多
              <i class="arrow-right"></i>
          </div>
      </div>
      <div class="info-user">
          <img :src="commentInfo.user.avatar" alt="">
          <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="info-detail">
          <p>{{commentInfo.content}}</p>
          <div class="info-other">
              <span class="date">{{dataFormate}}</span>
              <span>{{commentInfo.style}}</span>
          </div>
          <div class="info-img">
              <img :src="item" v-for="(item, index) in commentInfo.images" :key="index">
          </div>
      </div>
  </div>
</template>

<script>
import {debounce,formatDate} from '@/components/common/utils/Utils'
export default {
  name: 'DetailCommentInfon',
  props:{
      commentInfo:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  computed:{
      dataFormate(){
        return this.data = formatDate(this.commentInfo.created)
      }
  },
  data () {
    return {
      data:''
    };
  },
}
</script>

<style scpoed>
.comment-info{
    border-bottom: 5px solid #f2f5f8;
    margin-bottom: 20px;
}
.info-header{
    padding: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    
    border-bottom: 2px solid rgb(235, 235, 235);
    font-size: 14px;
    font-weight: bold;
}
.info-user{
    margin: 10px;
    position: relative;
}
.info-user img{
    widows: 40px;
    height: 40px;
    margin-right: 10px;
}
.info-user span{
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    top: 12px;
}
.info-detail{
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
}
.info-detail p{
    font-size: 14px;
    color: rgb(141, 141, 141);
}
.info-other{
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
}
.info-other span{
    position: relative;
    margin-left: 10px;
    color: rgb(117, 117, 117);
    letter-spacing: 0px;
}
.date{
    position: absolute;
    left: -10px;
    letter-spacing: 1px;
}
.info-img img{
    width: 100px;
    height: 100px;
}
.info-img{
    margin-top: 10px;
}
</style>