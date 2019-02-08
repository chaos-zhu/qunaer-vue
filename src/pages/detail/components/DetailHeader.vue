<template>
  <div class="detail-header-container">
    <router-link to="/" tag='div' class="de-goback"><i class="iconfont icon-left-arrow"></i></router-link>
    <span class="de-title">游乐详情</span>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  methods: {
  },
  created () {
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/px2rem.scss';
.detail-header-container{
  height: px2rem(44);
  text-align: center;
  width: 100%;
  background-color: #00bcd4;
  position: fixed;
  top: 0;
  z-index: 999;
  .de-goback{
    width: px2rem(40);
    height: 100%;
    position: absolute;
    background-color: #00bcf9;
    line-height: px2rem(40);
    i{
      font-size: px2rem(20);
      color: white;
    }
  }
  .de-title{
    line-height: px2rem(44);
    font-size: px2rem(18);
    color: white;
  }
}
</style>
