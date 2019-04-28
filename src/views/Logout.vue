<template>
  <div>
    <el-form>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">注销</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Logout",
    methods: {
      onSubmit() {
        this.$store.dispatch('asyncUpdateToken', false);
        this.$store.dispatch('asyncUpdateUser', {});
        sessionStorage.clear();
        this.$router.push("/login");
      }
    }
  }
</script>

<style scoped>

</style>
