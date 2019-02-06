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
    >
    </Alphabet>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import CityArea from './components/CityArea.vue'
import Alphabet from './components/Alphabet.vue'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    Header,
    CityArea,
    Alphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
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
    receiveKey: function (key) {
      this.letter = key
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
