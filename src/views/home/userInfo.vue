<template>
  <div>
    <el-menu-item index="5" @click="login()" style="float: right;">
      Hi，请登陆
    </el-menu-item>
    <el-menu-item index="6" @click="dev()" style="float: right;">
      注册
    </el-menu-item>
  </div>
</template>

<script>
  export default {
    name: 'userInfo'
  }
</script>

<style scoped>

</style>
