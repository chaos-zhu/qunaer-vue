<template>
  <div class="home-header">
    <div class="h-goback"><p :style="transformStyle" @click="ctrlRotate"><i class="iconfont icon-vynil"></i></p></div>
    <div class="h-search"><i class="iconfont icon-sousuo"></i><input type="text" disabled placeholder="输入城市/景点/游玩主题"></div>
    <router-link to="/city">
      <div class="h-position"><span>{{this.curCity}}</span><i class="iconfont icon-xiala"></i></div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import axios from 'axios'
export default {
  name: 'HomeHeader',
  data () {
    return {
      transformStyle: {
        transform: 'rotate(0deg)'
      },
      deg: 45,
      isRotate: true,
      timer: null
    }
  },
  computed: {
    ...mapState(['curCity'])
  },
  methods: {
    getCityName () {
      if (this.curCity === '定位中...') {
        this.$jsonp('//api.map.baidu.com/location/ip?ak=30tm8wTH4b2COhbq7B7y65yVU6z1qIgU')
          .then((res) => {
            this.$store.commit('changeCity', res.content.address_detail.city)
            localStorage.curCity = this.curCity
          })
      }
    },
    musicTransfrom () {
      this.$nextTick(() => {
        var audio = document.getElementById('audio')
        audio.play()
      })
      this.timer = setInterval(() => {
        this.deg += 10
        this.transformStyle.transform = `rotate(${this.deg}deg)`
      }, 80)
    },
    ctrlRotate: function () {
      var audio = document.getElementById('audio')
      this.isRotate = !this.isRotate
      if (this.timer) {
        clearInterval(this.timer)
        audio.pause()
      }
      if (this.isRotate) {
        this.musicTransfrom()
      }
    }
  },
  created () {
    this.musicTransfrom()
  },
  mounted () {
    this.getCityName()
  }
}
</script>

<style lang="scss">
@import '../../../assets/styles/px2rem.scss';
.home-header{
  height: px2rem(44);
  background-color: rgb(219, 72, 72);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  .h-goback{
    width: px2rem(40);
    border-radius: 50%;
    text-align: center;
    p{
      display: inline-block;
      width: px2rem(25);
      height: px2rem(25);
      border-radius: 50%;
    }
    i{
      font-size: px2rem(23);
      color: white;
    }
  }
  .h-search{
    flex: 1;
    height: px2rem(30);
    border-radius: px2rem(3);
    background-color: white;
    display: flex;
    align-items: center;
    i{
      width: 9%;
      font-size: px2rem(22);
      margin-left:px2rem(5);
    }
    input{
      display: inline-block;
      width: 100%;
      font-size: px2rem(16);
      height: 100%;
      color: gray;
      outline: none;
      background-color: rgba(0, 0, 0, 0);
      border: 0;
    }
    input::-webkit-input-placeholder {
    color: #e2dfdf;
    }
  }
  .h-position{
    min-width: px2rem(60);
    margin-left: px2rem(5);
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
    span{
      font-size: px2rem(15);
    }
    i{
      font-size: px2rem(14);
    }
  }
}
</style>
