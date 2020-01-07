<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-col style="background-color: #EBEEF5;height: 40px;" :span="24">
          <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">
              <router-link to="/" style="font-size: 18px;">Blog</router-link>
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

            <div v-if="this.$store.getters.isLogin">
              <el-dropdown @command="handleCommand" style="float: right;margin-right: 100px;
                font-size: 18px;line-height: 60px;">
                <span class="el-dropdown-link">
                  {{userInfo}}
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">个人中心</el-dropdown-item>
                  <el-dropdown-item command="logout">注销登陆</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div v-else>
              <el-menu-item index="15" style="float: right" @click="login()">
                Hi，请登陆
              </el-menu-item>
              <el-menu-item index="16" style="float: right" @click="register()">
                注册
              </el-menu-item>
            </div>
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
  import request from '../commons/utils/request'
  import cookieUtil from '../commons/utils/cookieUtil'
  import commonUtil from '../commons/utils/commonUtil'
  import store from '../store/index'

  export default {
    name: 'App',
    data () {
      return {
        userInfo: ''
      }
    },
    mounted () {
      //this.init()
    },
    methods: {
      login () {
        //跳到统一登陆中心
        let loginURL = this.$store.getters.ssoLoginURL + '?service=' + window.location.href
        window.open(loginURL)
        // window.location.replace(loginURL)
      },
      handleCommand (command) {
        if (command == 'logout') {
          store.commit('logout')
        }
      }
    },
    //创建后只执行一次
    created () {
      const token = cookieUtil.get('token')
      if (token != null) {
        this.$store.dispatch('setIsLogin', true)
        this.$store.dispatch('setToken', token)
        request({url: '/api/user/info'}).then(res => {
          res = res.data
          this.$store.dispatch('setIsLogin', true)
          this.$store.dispatch('setToken', res.access_token)
          this.$store.dispatch('setName', res.name)
          this.$store.dispatch('setImage', res.imgUrl)
          this.userInfo = res.name + '，您好！'
        })
      } else {
        let token = commonUtil.getUrlParam('access_token')
        if (token != null) {
          cookieUtil.set('token', token, 60 * 60 * 12)
          window.location.replace(window.location.href.split('?')[0])
        } else {
          this.$store.dispatch('setIsLogin', false)
        }
      }
    }
  }

</script>

<style>
  a {
    text-decoration: none;
  }
</style>
