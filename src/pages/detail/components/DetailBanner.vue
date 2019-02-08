// 详情页轮播图
<template>
  <div class="detail-banner-container">
    <div class="de-go-back" @click="goBack" v-show="!showHeader"><i class="iconfont icon-left-arrow"></i></div>
    <detail-header :style="headerStyle" v-show="showHeader"></detail-header>
    <div class="swiper-container de-banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" @click="seeBigBanner" v-for="(item, index) in imgList" :key="index">
          <img :src="item" alt="加载中~">
        </div>
      </div>
      <div class="swiper-pagination detail-banner"></div>
    </div>
    <div class="bottom-pro">
      <span>{{curCity}}游乐园(AAA游乐园)</span>
      <p>
       <i class="iconfont icon-location"></i>
       <span>{{curCity}}</span>
      </p>
    </div>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <gallary
      v-if='showGallary'
      @cancelGallary='cancelGallary'
      :imgList='imgList'
      ></gallary>
    </transition>

  </div>
</template>

<script>
import Swiper from 'swiper'
import Gallary from '@/common/Gallary'
import DetailHeader from './DetailHeader'
import { mapState } from 'vuex'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgList: ['//img1.qunarzz.com/sight/p0/1604/90/900c47b803dc8f990.img.jpg_600x330_cb44785e.jpg', 'http://img1.qunarzz.com/sight/p0/1604/24/24e8c9405d04d92390.img.jpg_r_800x800_440ff8ba.jpg', '//img1.qunarzz.com/sight/p0/1604/bc/bc74b17c62f3306190.img.jpg_r_800x800_fe64a554.jpg'],
      showHeader: false,
      headerStyle: {
        opacity: 1
      }
    }
  },
  components: {
    Gallary,
    DetailHeader
  },
  computed: {
    ...mapState(['curCity'])
  },
  methods: {
    goBack: function () {
      // this.$router.push('/')
      this.$router.go(-1)
    },
    seeBigBanner: function () {
      this.showGallary = true
    },
    cancelGallary: function () {
      this.showGallary = false
    },
    handleScrool: function () {
      var top = document.documentElement.scrollTop
      var opacity = top / 288
      opacity = opacity > 1 ? 1 : opacity
      this.headerStyle.opacity = opacity
      if (top >= 1) {
        this.showHeader = true
      } else {
        this.showHeader = false
      }
    }
  },
  activated () {
    // eslint-disable-next-line
    new Swiper('.de-banner')
    window.addEventListener('scroll', this.handleScrool)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScrool)
  }
}
</script>

<style lang="scss">
@import '../../../assets/styles/px2rem.scss';
.detail-banner-container{
  position: relative;
  .de-go-back{
    width: px2rem(35);
    height: px2rem(35);
    line-height: px2rem(30);
    text-align: center;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: px2rem(10);
    left: px2rem(10);
    z-index: 2;
    i{
      font-size: px2rem(18);
      color: white;
    }
  }
  .de-banner{
    touch-action: none;
    height: px2rem(188);
    img{
      width: 100%;
    }
  }
  .bottom-pro{
    position: absolute;
    bottom: 0;
    height: px2rem(22);
    font-size: px2rem(16);
    color: white;
    width: 100%;
    z-index: 99;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) , rgba(0, 0, 0, 0.9));
    display: flex;
    justify-content: space-between;
    p{
      margin-right: px2rem(25);
      i{
        font-size: px2rem(16);
      }
    }
  }
}

</style>
