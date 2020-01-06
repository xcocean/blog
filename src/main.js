// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router'

//axios请求
import axiosInterceptors from 'interceptors/axiosInterceptors'

// Vue.use(ElementUI)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // 每次切换页面时，调用进度条
  NProgress.start()
  // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
  next()
})
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})

//全局axios处理
Vue.use(axiosInterceptors.request)
Vue.use(axiosInterceptors.response)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
