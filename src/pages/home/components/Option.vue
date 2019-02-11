<template>
  <div class='swiper-container option'>
    <div class='swiper-wrapper'>
      <div class='swiper-slide'>
        <ul class="option-1">
          <li v-for='item in iconList' :key='item.id'>
            <img :src='item.imgUrl' alt='item.id'>
            <span>{{item.desc}}</span>
          </li>
        </ul>
      </div>
      <div class='swiper-slide'>
        <ul class="option-2">
          <li>
            <img src='@/assets/option/option-1.png' alt>
            <span>著名景点</span>
          </li>
          <li>
            <img src='@/assets/option/option-2.png' alt>
            <span>全部玩乐</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 分页器 -->
    <div class='swiper-pagination'></div>
  </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.min.js'
export default {
  name: 'Option',
  // import { mapMutations } from 'vuex';
  props: {
    iconList: Array
  },
  data () {
    return {
      optionSwiper: null
    }
  },
  methods: {
    getIconList () {
      if (this.optionSwiper) {
        this.optionSwiper.updated()
        return
      }
      this.optionSwiper = new Swiper('.option', {
        loop: false, // 循环模式选项
        autoplay: false, // 自动播放
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  },
  updated () {
    this.getIconList()
  }
}
</script>

<style lang='scss' scoped>
@import 'swiper/dist/css/swiper.min.css';
@import '../../../assets/styles/px2rem.scss';
.swiper-container{
  height: px2rem(190);
  // 解决swiper报错的问题
  touch-action: none;
  .swiper-wrapper{
    height: 100%;
  }
  .swiper-slide{
    height: 100%;
    img{
      width: px2rem(55);
      height: px2rem(55);
    }
    span{
      font-size: px2rem(13);
      margin: px2rem(3) 0;
      color: #212121;
    }
    .option-1{
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li{
        width: px2rem(94);
        height: px2rem(80);
        width: 25%;
        padding-top: px2rem(5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
     }
    }
    .option-2{
      display: flex;
      li{
        display: flex;
        flex-direction: column;
        width: 25%;
        justify-content: center;
        align-items: center;
      }
    }
  }

}
</style>
