<template>
  <div>
    <el-form ref="form" :rules="rules" :model="form" label-width="60px" class="login-box">
      <h3 class="login-title">欢迎登陆</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Axios from "axios";
  Vue.prototype.$axios = Axios;

  export default {
    name: "Login",
    data(){
      return{
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      onSubmit(form) {
        this.jiaoyan(form, "/main");
      },
      jiaoyan(form, url){
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.$store.dispatch("asyncUpdateToken", true);
            this.$store.dispatch("asyncUpdateUser", {username: this.form.username});
            sessionStorage.setItem("token", JSON.stringify(this.$store.state.token));
            sessionStorage.setItem("user", JSON.stringify(this.$store.state.user));
            this.$router.push(url);
          } else {
            this.$message({
              showClose: true,
              message: '账号或密码不能为空',
              type: 'warning'
            });
            return false;
          }
        });
      },
    }
  }
</script>

<style scoped>
  .login-box {
    width: 350px;
    margin: 150px auto;
    padding: 20px;
    border: 1px solid #DCDFE6;
    border-radius: 5px;
    box-shadow: 0 0 25px #DCDFE6;
  }

  .login-title {
    text-align: center;
  }
</style>
