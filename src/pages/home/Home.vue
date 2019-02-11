<template>
  <div class='home'>
    <home-header />
    <banner :bannerImg.sync='bannerImg' />
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
      lastCity: '',
      loading: null
    }
  },
  computed: {
    ...mapState(['curCity'])
  },
  methods: {
    getIndexData () {
      this.loading = this.$loading({
        text: '由于服务器太过高级，首页数据请求较慢，请稍等片刻~'
      })
      axios.get(`//157.230.145.159:3000/index?city=${this.curCity}`)
        .then(this.getIdenxData)
    },
    getIdenxData (result) {
      var res = result.data[0]
      this.bannerImg = res.data.swiperList
      this.iconList = res.data.iconList
      this.recommendList = res.data.recommendList
      this.guessList = res.data.guessList
      this.loading.close()
    }
  },
  mounted () {
    this.getIndexData()
    this.lastCity = this.curCity
  },
  activated () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
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
.home{
  color: aquamarine;
}
</style>
