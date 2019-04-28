<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  mounted() {
    // 监听刷新事件
    window.addEventListener("unload", this.saveState);
  },
  methods: {
    // 刷新时将 Vuex 中的 登录状态存到 sessionStorage
    saveState() {
      sessionStorage.setItem("token", JSON.stringify(this.$store.state.token));
      sessionStorage.setItem("user", JSON.stringify(this.$store.state.user));
    }
  }
}
</script>
