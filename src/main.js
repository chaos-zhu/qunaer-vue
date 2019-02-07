import Vue from 'vue'
import router from './router'
import store from './store'

// swipe轮播模块全局注册
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// ElementUI模块全局注册
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Vuejsonp from 'vue-jsonp'

import App from './App'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
// import './assets/styles/px2rem.scss'放这没用

// 引入ele.UI后使用中间件，即注册组件
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper, {})
Vue.use(Vuejsonp)

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
