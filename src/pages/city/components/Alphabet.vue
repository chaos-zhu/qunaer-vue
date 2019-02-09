<template>
  <ul class='alphabet-container'>
    <li
      v-for="(val, key) in cities"
      :key="key"
      :ref="key"
      @click="showCity(key)"
      @touchstart.prevent='handleTouchStart'
      @touchmove='handleTouchMove'
      @touchend='handleTouchEnd'
    >
      {{key}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters: function () {
      var letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    showCity: function (key) {
      // console.log(e.target.innerText)
      // console.log(key)
      this.$emit('change', key)
    },
    handleTouchStart: function () {
      this.touchStatus = true
    },
    handleTouchMove: function (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY
          const index = Math.floor((touchY - this.startY) / 16)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index], this.touchStatus)
          }
        }, 16)
      }
    },
    handleTouchEnd: function () {
      this.touchStatus = false
      this.$emit('touchStatus', this.touchStatus)
    }
  }
}
</script>

<style lang='scss'>
@import '../../../assets/styles/px2rem.scss';
.alphabet-container{
  touch-action: none;
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  text-align: center;
  width: px2rem(16);
  display: flex;
  flex-direction: column;
  justify-content: center;
  li{
    font-size: px2rem(15);
    padding: px2rem(1) px2rem(2);
    color: #00bcd4;
    background-color: #FFFFF0;
  }
}
</style>
