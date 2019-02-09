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
      touchStatus: false
    }
  },
  mounted () {
    this.getCityData()
  },
  methods: {
    getCityData: function () {
      axios.get('/api/city.json')
        .then(this.getCityDataSucc)
    },
    getCityDataSucc: function (result) {
      var res = result.data
      if (res.ret === true) {
        this.hotCities = res.data.hotCities
        this.cities = res.data.cities
      }
    },
    receiveKey: function (key, touchStatus) {
      this.letter = key
      this.touchStatus = touchStatus
    },
    isTouch: function (touchStatus) {
      this.touchStatus = touchStatus
    }
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
