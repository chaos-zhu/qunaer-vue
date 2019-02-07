<template>
  <ul class='gps-and-list'>
    <li class="l-border-right"><i class="iconfont icon-location"></i><span>{{this.$store.state.curCity}}周边</span></li>
    <li><i class="iconfont icon-icon-test"></i><span>必游榜单</span></li>
  </ul>
</template>

<script>
export default {
  name: 'GpsAndList'
}
</script>

<style lang='scss'>
@import '../../../assets/styles/px2rem.scss';
.gps-and-list{
  border-top: 1px solid gray;
  height: px2rem(49);
  display: flex;
    li{
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #212121;
      font-size: px2rem(13);
      i{
        font-size: px2rem(15);
        margin-right: px2rem(3);
      }
    }
    .l-border-right{
      border-right: 1px solid gray;
    }

}
</style>
