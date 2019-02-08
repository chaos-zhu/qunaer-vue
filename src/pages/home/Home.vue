<template>
  <div class='home'>
    <home-header />
    <banner :bannerImg='bannerImg' />
    <Option :iconList='iconList' />
    <gps-and-list />
    <popular :recommendList='recommendList' />
    <is-like :guessList='guessList'/>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import Banner from './components/Banner'
import Option from './components/Option'
import GpsAndList from './components/GpsAndList'
import Popular from './components/Popular'
import IsLike from './components/IsLike'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Banner,
    Option,
    GpsAndList,
    Popular,
    IsLike
  },
  data () {
    return {
      bannerImg: [],
      iconList: [],
      recommendList: [],
      guessList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['curCity'])
  },
  methods: {
    getIndexData () {
      axios.get(`/api/index.json?city=${this.curCity}`)
        .then(this.getIdenxData)
    },
    getIdenxData (result) {
      var res = result.data
      this.bannerImg = res.data.swiperList
      this.iconList = res.data.iconList
      this.recommendList = res.data.recommendList
      this.guessList = res.data.guessList
    }
    // handleScroll () {
    //   var top = document.documentElement.scrollTop
    //   console.log(top)
    //   var opacity = 1 - (top / 288)
    //   opacity = opacity < 0 ? 0 : opacity
    //   this.headerOpcity = { opacity }
    //   if (this.headerOpcity.opacity === 0) {
    //     this.showHeader = false
    //   } else {
    //     this.showHeader = true
    //   }
    // },
    // 函数防抖
    // debounce (fn, wait) {
    //   // 定时器变量
    //   var timeout
    //   return function () {
    //     // 每次触发 scroll handler 时先清除定时器
    //     clearTimeout(timeout)
    //     // 指定 xx ms 后触发真正想进行的操作 handler
    //     timeout = setTimeout(fn, wait)
    //   }
    // }
  },
  mounted () {
    this.getIndexData()
    this.lastCity = this.curCity
  },
  activated () {
    if (this.lastCity !== this.curCity) {
      this.getIndexData()
      this.lastCity = this.curCity
    }
    // window.document.addEventListener('scroll', this.debounce(this.handleScroll, 20))
  },
  deactivated () {
    // window.removeEventListener('scroll', this.handleScroll)
  }
}

</script>

<style>
div{
  color: aquamarine;
}
</style>
