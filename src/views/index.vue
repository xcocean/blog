<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-col style="background-color: #EBEEF5;height: 40px;" :span="24">
          <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">
              <router-link to="/" style="font-size: 18px;">Blog</router-link>
            </el-menu-item>
            <el-menu-item index="2" @click="index">
              主页
            </el-menu-item>
            <el-menu-item index="3" @click="article">
              文章
            </el-menu-item>
            <el-menu-item index="4" @click="trajectory">
              轨迹
            </el-menu-item>
            <el-menu-item index="5" @click="project">
              项目
            </el-menu-item>
            <el-menu-item index="6" @click="progress">
              历程
            </el-menu-item>
            <el-menu-item index="7" @click="board">
              留言
            </el-menu-item>
            <el-menu-item index="8" @click="about">
              关于
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
  import store from '../store/index'
  import axios from 'axios'
  import cookieUtil from '../commons/utils/cookieUtil'
  import commonUtil from '../commons/utils/commonUtil'

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
      register () {
      },
      login () {
        //跳到统一登陆中心
        let loginURL = this.$store.getters.ssoLoginURL + '?service=' + window.location.href
        window.location.href = (loginURL)
      },
      handleCommand (command) {
        if (command == 'logout') {
          store.commit('logout')
        }
      },
      index () {
        this.$router.push({
          path: '/'
        })
      },
      trajectory () {
        this.$router.push({
          path: '/trajectory'
        })
      },
      project () {
        this.$router.push({
          path: '/project'
        })
      },
      progress () {
        this.$router.push({
          path: '/progress'
        })
      },
      about () {
        this.$router.push({
          path: '/about'
        })
      },
      board () {
        this.$router.push({
          path: '/board'
        })
      },
      article () {
        this.$router.push({
          path: '/article'
        })
      }
    },
    created () {
      const token = cookieUtil.get('token')
      if (token != null) {
        store.dispatch('setIsLogin', true)
        store.dispatch('setToken', token)
        try {
          axios.get('/api/user/info?access_token=' + token).then(res => {
            if (res.data.code != 2000) {
              cookieUtil.remove('token')
              store.dispatch('setIsLogin', false)
              return
            }
            res = res.data.data
            store.dispatch('setIsLogin', true)
            store.dispatch('setToken', token)
            cookieUtil.set('setToken', token, 60 * 60 * 12)
            store.dispatch('setName', res.name)
            store.dispatch('setImage', res.imgUrl)
            this.userInfo = res.name + '，您好！'
          })
        } catch (e) {
          store.dispatch('setIsLogin', false)
          cookieUtil.remove('token')
        }
      } else {
        let token = commonUtil.getUrlParam('access_token')
        if (token != null) {
          cookieUtil.set('token', token, 60 * 60 * 12)
          window.location.replace(window.location.href.split('?')[0])
        } else {
          store.dispatch('setIsLogin', false)
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
