<template>
  <div class="gallery-container" @click="cancelGallery">
    <div class="swiper-container ga-content">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in imgList" :key="index">
          <img :src="item" alt="加载中~">
        </div>
      </div>
      <div class="swiper-pagination ga-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Gallery',
  props: {
    imgList: Array
  },
  methods: {
    cancelGallery: function () {
      this.$emit('cancelGallery')
    }
  },
  mounted () {
    // eslint-disable-next-line
    new Swiper('.ga-content', {
      pagination: {
        el: '.ga-pagination',
        type: 'fraction'
      }
    })
  }
}
</script>

<style lang="scss">
@import '../assets/styles/px2rem.scss';
.gallery-container{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: black;
  display: flex;
  align-items: center;
  touch-action: none;
  .ga-content{
    width: 100%;
    height: px2rem(258);
    background-color: white;
    overflow: inherit;
    img{
      height: 100%;
      width: 100%;
    }
  }
  .swiper-pagination-fraction{
    color: white;
    bottom: px2rem(-150);
    z-index: 999;
    font-size: px2rem(16);
  }
}
</style>
