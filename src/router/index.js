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
      component: index,
      children: [
        {
          //关于我
          path: '/about',
          name: 'about',
          component: () => import('@/views/home/about')
        }, {
          //留言
          path: '/board',
          name: 'board',
          component: () => import('@/views/home/board')
        }, {
          //轨迹
          path: '/trajectory',
          name: 'trajectory',
          component: () => import('@/views/home/trajectory')
        }, {
          //项目
          path: '/project',
          name: 'project',
          component: () => import('@/views/home/project')
        }, {
          //历程
          path: '/progress',
          name: 'progress',
          component: () => import('@/views/home/progress')
        }, {
          //文章
          path: '/article',
          name: 'article',
          component: () => import('@/views/home/article')
        }, {
          //首页
          path: '/',
          name: 'home',
          component: () => import('@/views/home/home')
        },
      ]
    }
  ]
})
