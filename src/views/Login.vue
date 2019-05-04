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
  import axios from 'axios';
  Vue.prototype.axios = axios;

  export default {
    name: "Login",
    data(){
      return{
        form: {
          username: '',
          password: ''
        },
        info: {},
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
        let that = this;
        this.$refs[form].validate((valid) => {
          if (valid) {


            axios.post('/api/users/login', {
              loginCode: this.form.username,
              password: this.form.password
            })
              .then(function (response) {
                that.info = response.data.data;
                console.log(that.info);
                if (response.data.data != null){
                  that.$store.dispatch("asyncUpdateToken", true);
                  that.$store.dispatch("asyncUpdateUser", {username: that.info.loginCode});
                  sessionStorage.setItem("token", JSON.stringify(that.$store.state.token));
                  sessionStorage.setItem("user", JSON.stringify(that.$store.state.user));
                  // that.$router.push({name: 'Main', query: {info: JSON.stringify(that.info)}});
                  that.$router.push({name: 'Main'});
                } else {
                  that.$message({
                    showClose: true,
                    message: '账号或密码不正确',
                    type: 'warning'
                  });
                }

              })
              .catch(function (error) {
                console.log(error);
              });

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
