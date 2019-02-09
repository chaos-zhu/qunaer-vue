<template>
  <div class="home-banner-container">
    <div class='swiper-container home-banner'>
      <div class='swiper-wrapper'>
        <div class='swiper-slide'
          v-for='item in bannerImg'
          :key='item.id'
        >
          <img
            :src='item.imgUrl'
            :alt='item.id'
            class="animated fadeIn"
          >
        </div>
      </div>
      <div class='swiper-pagination home-banner-pagination'></div>
    </div>
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
  methods: {
    newSwiper () {
    // eslint-disable-next-line
      new Swiper('.home-banner', {
        loop: true, // 循环模式选项
        autoplay: true, // 自动播放
        pagination: { // 指示器小圆点
          el: '.home-banner-pagination'
        }
      })
    }
  },
  updated () {
    // 数据更新后实例化，否则轮播图不能正确渲染
    this.newSwiper()
  },
  activated () {
    // 使用keep-alive优化后，从其他组件切回home再实例化一次，否则轮播图不能正确渲染
    // this.$nextTick(() => {
    //   this.newSwiper()
    //   console.log(this.bannerImg)
    // })
  }
}
</script>

<style lang='scss'>
@import 'swiper/dist/css/swiper.min.css';
.home-banner-container{
  height: px2rem(200)!important;
  .home-banner {
    height: 100%;
    touch-action: none;
    .swiper-pagination-bullet {
      width: px2rem(8);
      height: px2rem(8);
      background-color: black;
    }
    img {
      width: 100%;
    }
  }
}

</style>
