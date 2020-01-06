import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'

Vue.use(Router)

export default new Router({
  // 去掉url中的#
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    }
  ]
})
