<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-col style="background-color: #EBEEF5;height: 40px;" :span="24">
          <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">
              <router-link to="/" style="font-size: 18px;">日月星辰</router-link>
            </el-menu-item>
            <el-menu-item index="2" @click="home()">
              主页
            </el-menu-item>
            <el-menu-item index="3" @click="about()">
              关于我
            </el-menu-item>
            <el-menu-item @click="message" index="4">
              留言
            </el-menu-item>
            <el-menu-item index="5" @click="login()" style="float: right;">
              Hi，请登陆
            </el-menu-item>
            <el-menu-item index="6" @click="dev()" style="float: right;">
              注册
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import globalValues from 'commons/js/globalValues'
  import ipConfig from 'commons/js/ipConfig'
  import cookieUtil from 'commons/utils/cookieUtil'
  import userUtile from 'commons/utils/userUtile'

  export default {
    name: 'App',
    mounted () {
      //this.init()
      // console.log(globalValues.access_token)
      if (cookieUtil.get('access_token') != null) {
        let info = userUtile.getInfo()

      }
      console.log(userUtile.getInfo())
    },
    methods: {
      login () {
        //跳到统一登陆中心
        let loginURL = ipConfig.ssoLogin + '?service=' + window.location.href
        window.location.replace(loginURL)
      }
    }
  }
</script>

<style>
  #app {
  }

  a {
    text-decoration: none;
  }
</style>
