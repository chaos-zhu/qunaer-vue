<template>
  <div class="city">
    <Header
    :cities='cities'
    >
    </Header>

    <city-area
    :hotCities='hotCities'
    :cities='cities'
    :letter="letter"
    class="cityarea"
    >
    </city-area>

    <Alphabet
    :cities='cities'
    @change="receiveKey"
    @touchStatus='isTouch'
    >
    </Alphabet>

    <show-letter
      :letter="letter"
      :touchStatus='touchStatus'
    >
    </show-letter>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import CityArea from './components/CityArea.vue'
import Alphabet from './components/Alphabet.vue'
import ShowLetter from './components/ShowLetter'
// import { Loading } from 'element-ui'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    Header,
    CityArea,
    Alphabet,
    ShowLetter
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: '',
      touchStatus: false,
      loading: null
    }
  },
  methods: {
    getCityData: function () {
      this.loading = this.$loading({
        text: '城市数据首次加载较慢，先欣赏公虾米~'
      })
      axios.get('//157.230.145.159:3000/city')
        .then(this.getCityDataSucc)
    },
    getCityDataSucc: function (result) {
      var res = result.data[0]
      if (res.ret === true) {
        this.hotCities = res.data.hotCities
        this.cities = res.data.cities
      }
      this.loading.close()
    },
    receiveKey: function (key, touchStatus) {
      this.letter = key
      this.touchStatus = touchStatus
    },
    isTouch: function (touchStatus) {
      this.touchStatus = touchStatus
    }
  },
  created () {
    // $loading为全局引入element.UI后注册在Vue.prototype的方法
    this.getCityData()
  }
}
</script>

<style lang='scss'>
.city{
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
