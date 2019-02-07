<template>
  <div class='home'>
    <home-header/>
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
  }
}

</script>

<style>
div{
  color: aquamarine;
}
</style>
