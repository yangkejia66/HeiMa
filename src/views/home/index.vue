<template>
  <el-container class="home-container">
    <el-aside class="my-aside" :width="isCollapse? '64px':'200px'">
      <div class="logo" :class="{close:isCollapse}"></div>
      <el-menu
        :default-active="$route.path"
        background-color="#002233"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="border-right:none"
        :collapse="isCollapse"
        :collapse-transition="false"
        router
      >
        <el-menu-item index="/home">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/content">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/matter">
          <i class="el-icon-money"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-position"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/review">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-s-tools"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="my-header">
        <span class="el-icon-s-fold" @click="myCollapse"></span>
        <span class="czbk">江苏传智播客教育有限公司</span>
        <el-dropdown style="float:right">
          <span class="el-dropdown-link">
            <img width="23" style="vertical-align: middle" :src="avatr" alt />
            <b>{{name}}</b>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="Perset()">个人设置</el-dropdown-item>
            <el-dropdown-item @click.native="Outlogin()">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      name: '',
      avatr: ''
    }
  },
  created () {
    const user = JSON.parse(window.sessionStorage.getItem('heima-it'))
    this.name = user.name
    this.avatr = user.photo
  },
  methods: {
    myCollapse () {
      this.isCollapse = !this.isCollapse
    },
    Perset () {
      this.$router.push('/Perset')
    },
    Outlogin () {
      window.sessionStorage.removeItem('heima-it')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="less">
.home-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  .my-header {
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    .el-icon-s-fold {
      font-size: 26px;
      vertical-align: middle;
    }
    .czbk {
      vertical-align: middle;
    }
  }
  .my-aside {
    background-color: #002233;
    .logo {
      width: 100%;
      height: 60px;
      background: #002840 url("../../assets/images/logo_admin.png") no-repeat
        center / 135px auto;
    }
    .close {
      background: url("../../assets/images/logo_admin_01.png") no-repeat center /
        20px auto;
    }
  }
}
</style>
