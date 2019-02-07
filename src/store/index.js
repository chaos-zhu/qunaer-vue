import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curCity: localStorage.getItem('curCity') || '定位中...'
  },
  // actions: {
  //   changeCity: function (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations: {
    changeCity: function (state, city) {
      state.curCity = city
      // localStorage.setItem('curCity', city)
      localStorage.curCity = city
    }
  }
})
