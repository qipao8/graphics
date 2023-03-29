<template>
  <div class="login-container">
    <h3>欢迎</h3>
    <el-form label-width="80px" :model="loginForm" style="login-form">
      <el-form-item label="账号">
        <el-input v-model="loginForm.accout"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="success"
          icon="el-icon-check"
          circle
          @click="login"
        ></el-button>
        <el-button type="warning" icon="el-icon-lock" circle></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { postUserLogin } from "../api/common"
export default {
  name: "UserLogin",
  data() {
    return {
      loginForm: {
        accout: "",
        password: "",
      },
    }
  },
  methods: {
    login() {
      postUserLogin({ ...this.loginForm }).then((res) => {
        if (res.data === "success") {
          alert(res.message)
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.login-container {
  margin: 0 auto;
  text-align: center;
  width: 80%;
}
</style>
