<template>
    <div>
      <nav-bar class="profile-navbar">
        <div slot="center">个人中心</div>
      </nav-bar>
      <el-container style="margin-top:42px">
        <el-header style="background:var(--color-tint)">
          <div style="color:#fff;display:flex">
            <div style="color:#fff;display:flex"><img src="@/assets/img/common/top.png" alt=""></div>
            <div>
              <div>登录注册</div>
              <div>暂无绑定手机号</div>
            </div>
            <div>跳转</div>
          </div>
        </el-header>
        <el-main style="background:black">Main</el-main>
        <el-footer style="background:skyblue">Footer</el-footer>
      </el-container>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar';
export default {
  components: { 
    NavBar 
  },
  name: 'Profile',
  data () {
    return {
      
    };
  },
}
</script>

<style scpoed>
.profile-navbar{
  background-color: var(--color-tint);
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 9;
}
</style>