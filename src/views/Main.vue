<template>
  <div class="main-box">
    <h1 class="main-title">你好!  {{form.loginCode}}</h1>
    <div class="main-img">
      <img src="../assets/logo.png"/>
    </div>
    <logout class="logout-box" />
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios';
  Vue.prototype.axios = axios;

  import Logout from "./Logout";

  export default {
    name: "Main",
    data() {
      return {
        form: {}
      }
    },
    created() {
      axios.get('/api/users/get/binzikeji@qq.com').then(response => {
        console.log(response);
        if (response.data.data != null){
          this.form = response.data.data;
        } else {
          this.$message({
            showClose: true,
            message: response.data.success,
            type: 'warning'
          });
        }
      });
    },
    components: {Logout}
  }
</script>

<style scoped>
  .main-box {
    text-align: center;
  }

  .main-img {
    width: 200px;
    margin: auto;
  }
</style>
