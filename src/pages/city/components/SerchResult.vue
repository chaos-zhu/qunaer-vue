<template>
<div class="serch-result-container" ref="wrapper">
  <ul class="c-search-result">
    <li
      v-for="item in serchResult"
      :key="item.id"
       class="border-bottom"
    >
      {{item.name}}
    </li>
    <li class="not-found-city" v-show="!serchResultLength">暂无城市信息</li>
  </ul>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'SerchResult',
  props: {
    serchResult: Array
  },
  updated () {
    this.$nextTick(() => {
      this.Bscroll = new Bscroll(this.$refs.wrapper, {
        bounceTime: 300
      })
    })
  },
  computed: {
    serchResultLength () {
      console.log(this.serchResult.length)
      return this.serchResult.length
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/styles/px2rem.scss';
.serch-result-container{
  touch-action: none;
  flex: 1;
  position: fixed;
  top: px2rem(72);
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background-color: #fffffc;
  .c-search-result{
    min-height: px2rem(30);
    li{
      height: px2rem(30);
      line-height: px2rem(30);
      padding-left: px2rem(5);
      font-size: px2rem(16);
      color: #212121;
    }
    .not-found-city{
      margin: px2rem(15);
      text-align: center;
    }
  }
}

</style>
