<template>
  <div class="main-box">
    <h1 class="main-title">你好! {{this.$store.getters.getUser.username}}</h1>
    <img src="../assets/logo.png"/>
    <logout class="logout-box" />
  </div>
</template>

<script>
  import Logout from "./Logout";
  export default {
    name: "Main",
    components: {Logout}
  }
</script>

<style scoped>
  .main-box {
    width: 200px;
    margin: 150px auto;
  }

  .main-title {
    text-align: center;
  }

  .logout-box{
    text-align: center;
  }
</style>
