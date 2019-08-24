import Vue from 'vue'
import Router from 'vue-router'

// 进度条, 无需在main.js中注册
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 路由根组件
import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  base: 'qunaer',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from, next) => {
  NProgress.done()
})

export default router
