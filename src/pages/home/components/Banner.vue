<template>
  <!-- 轮播图 -->
  <div class='swiper-container banner'>
    <div class='swiper-wrapper'>
      <div class='swiper-slide'
      v-for='item in bannerImg'
      :key='item.id'>
        <img :src='item.imgUrl' :alt='item.id'>
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
  props: {
    bannerImg: Array
  },
  data () {
    return {
      xxxx: ''
    }
  },
  methods: {
    newSwiper () {
    // eslint-disable-next-line
      new Swiper('.banner', {
        loop: true, // 循环模式选项
        autoplay: true, // 自动播放
        pagination: { // 指示器小圆点
          el: '.swiper-pagination'
        }
      })
    }
  },
  updated () {
    // 数据更新后调用，否则轮播图不能正确渲染
    this.newSwiper()
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
