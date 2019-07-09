<template>
  <div class="login-container">
    <el-card class="login-box-card">
      <img src="../../assets/images/logo_index.png" />
      <el-form>
        <el-form-item>
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width:240px" placeholder="请输入验证码"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-checkbox v-model="checked"></el-checkbox>我已同意
        <el-link class="login-link" :underline="false" type="primary">用户协议</el-link>和
        <el-link class="login-link" :underline="false" type="primary">隐私政策</el-link>
        <el-form-item>
          <el-button class="login-Up" style="width:100%" type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: ''
      },
      checked: true
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style lang="less">
.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../../assets/images/login_bg.jpg") no-repeat center/cover;
  left: 0;
  top: 0;

  .login-box-card {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    img {
      display: block;
      width: 150px;
      margin: 0 auto 15px;
    }
  }
  .login-Up {
    margin-top: 30px;
  }
  .login-link {
    display: inline-block;
    height: 23px;
  }
}
</style>
