<template>
  <div class='c-container'>
    <div class='c-header'>
      <router-link to="/"><i class='iconfont icon-left-arrow go-home'></i></router-link>
      <span>选择城市</span>
      <input type="text" placeholder="输入城市名或拼音" v-model="serchKey">
    </div>
    <serch-result
      v-show="serchKey.length"
      :serchResult="serchResult"
    ></serch-result>
  </div>
</template>

<script>
import SerchResult from './SerchResult.vue'
export default {
  name: 'Header',
  components: {
    SerchResult
  },
  props: {
    cities: Object
  },
  data () {
    return {
      serchKey: '',
      serchResult: [],
      timmer: null
    }
  },
  watch: {
    serchKey () {
      if (this.timmer) {
        clearTimeout(this.timmer)
      }
      this.timmer = setTimeout(() => {
        var result = []
        for (let key in this.cities) {
          this.cities[key].forEach(item => {
            if (item.spell.indexOf(this.serchKey) > -1 || item.name.indexOf(this.serchKey) > -1) {
              result.push(item)
            }
          })
        }
        this.serchResult = result
      }, 200)
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../../assets/styles/px2rem.scss';
.c-container{
  position: sticky;
  top: 0;
  z-index: 999;
  height: px2rem(72);
  background-color: #00bcd4;
  display: flex;
  flex-direction: column;
  .c-header{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: white;
    .go-home{
      position: absolute;
      top: px2rem(10);
      left: px2rem(10);
      font-size: px2rem(18);
    }
    span{
      font-size: px2rem(17);
      margin: px2rem(10) 0;
    }
    input{
      width: 90%;
      height: px2rem(26);
      border-radius: px2rem(5);
      font-size: px2rem(15);
      text-align: center;
      outline: none;
      border: 0;
    }
  }
}
</style>
