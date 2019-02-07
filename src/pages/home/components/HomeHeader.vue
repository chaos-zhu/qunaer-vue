<template>
  <div class="home-header">
    <div class="h-goback"><i class="iconfont icon-icon-test"></i></div>
    <div class="h-search"><i class="iconfont icon-sousuo"></i><input type="text" placeholder="输入城市/景点/游玩主题"></div>
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
    }
  },
  created () {
    this.getCityName()
  }
}
</script>

<style lang="scss">
@import '../../../assets/styles/px2rem.scss';
.home-header{
  height: px2rem(44);
  background-color: #00bcd4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  .h-goback{
    width: px2rem(40);
    text-align: center;
    i{
      font-size: px2rem(20);
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
