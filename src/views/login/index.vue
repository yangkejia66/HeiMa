<template>
  <div class="login-container">
    <el-card class="login-box-card">
      <img src="../../assets/images/logo_index.png" />
      <el-form ref="loginForm" :model="loginForm" :rules="rules" status-icon>
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" style="width:240px" placeholder="请输入验证码"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-checkbox v-model="checked"></el-checkbox>我已同意
        <el-link class="login-link" :underline="false" type="primary">用户协议</el-link>和
        <el-link class="login-link" :underline="false" type="primary">隐私政策</el-link>
        <el-form-item>
          <el-button class="login-Up" style="width:100%" type="primary" @click="login()">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    const checkPhone = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的手机号'))
      }
    }
    return {
      form: {
        name: ''
      },
      loginForm: {
        mobile: '',
        code: ''

      },
      rules: {
        mobile: [
          { required: true, message: '请填写手机号', tirggr: 'blur' },
          { validator: checkPhone, tirggr: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', tirggr: 'blur' }
        ]
      },
      checked: true
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.axios({
            method: 'post',
            url: 'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
            data: this.loginForm
          }).then(res => {
            this.$message({
              message: '登陆成功',
              type: 'success'
            })
            this.$router.push({ name: 'home' })
          }).catch(() => {
            this.$message.error('用户名或密码')
          })
        }
      })
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
