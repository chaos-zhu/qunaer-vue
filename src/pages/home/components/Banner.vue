<template>
  <!-- 轮播图 -->
  <div class='swiper-container banner'>
    <div class='swiper-wrapper'>
      <div class='swiper-slide'>
        <img src='../../../assets/banner/banner-1.jpg' alt>
      </div>
      <div class='swiper-slide'>
        <img src='../../../assets/banner/banner-2.jpg' alt>
      </div>
      <div class='swiper-slide'>
        <img src='../../../assets/banner/banner-3.jpg' alt>
      </div>
      <div class='swiper-slide'>
        <img src='../../../assets/banner/banner-4.jpg' alt>
      </div>
      <div class='swiper-slide'>
        <img src='../../../assets/banner/banner-5.jpg' alt>
      </div>
      <div class='swiper-slide'>
        <img src='../../../assets/banner/banner-6.jpg' alt>
      </div>
    </div>
    <!-- 分页器 -->
    <div class='swiper-pagination'></div>
  </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.min.js'
// import { mapMutations } from 'vuex';
export default {
  name: 'Banner',
  data () {
    return {
      xxxx: ''
    }
  },
  mounted () {
    // eslint-disable-next-line
    new Swiper('.banner', {
      loop: true, // 循环模式选项
      autoplay: true, // 自动播放
      // 如果需要滚动条
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang='scss' scoped>
@import 'swiper/dist/css/swiper.min.css';
.swiper-container {
  touch-action: none;
  height: px2rem(100);
  .swiper-pagination-bullet {
    width: px2rem(8);
    height: px2rem(8);
    background-color: black;
  }
  img {
    width: 100%;
  }
}
</style>
