<template>
  <div class="home-header">
    <div class="h-goback"><i class="iconfont icon-left-arrow"></i></div>
    <div class="h-search"><i class="iconfont icon-sousuo"></i><input type="text" placeholder="输入城市/景点/游玩主题"></div>
    <div class="h-position"><span>北京</span><i class="iconfont icon-xiala"></i></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
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
  .h-goback{
    width: px2rem(40);
    text-align: center;
    i{
      font-size: px2rem(20);
      color: white;
    }
  }
  .h-search{
    width: px2rem(333);
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
    }
    input::-webkit-input-placeholder {
    color: #e2dfdf;
    }
  }
  .h-position{
    width: px2rem(66);
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
    span{
      font-size: px2rem(16);
    }
    i{
      font-size: px2rem(15);
    }
  }
}
</style>
