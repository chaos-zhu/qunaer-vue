<template>
<!-- ref写在最外层的Dom元素上 -->
  <div class='c-city-area' ref='cityWrap'>
    <div>
      <dl class='common-city-container'>
        <dt class='h2-title'>当前城市</dt>
        <router-link to="/" tag="dd" class='cur-city common-city'>{{this.curCity}}</router-link>
      </dl>

      <dl class='common-city-container'>
        <dt class='h2-title'>热门城市</dt>
        <dd
        class='common-city'
        v-for='item in hotCities'
        :key='item.id'
        @click='selectCity(item.name)'
        >
          {{item.name}}
        </dd>
      </dl>

      <dl class='all-city-container'
        v-for='(val, key) in cities'
        :key='key'
        :ref='key'
      >
        <dt class='h2-title'>{{key}}</dt>
        <dd class='border-bottom'
          v-for='item in val'
          :key='item.id'
          @click='selectCity(item.name)'
        >{{item.name}}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityArea',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  activated () {
    this.$nextTick(() => {
      this.Bscroll = new Bscroll(this.$refs.cityWrap, {
        click: true
      })
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        var element = this.$refs[this.letter][0]
        // console.log(e)
        // 实例化后的Bscroll有一个scrollToElement方法，可以直接类似于锚点链接的跳转
        this.Bscroll.scrollToElement(element, 300)
      }
    }
  },
  computed: {
    ...mapState(['curCity'])
  },
  methods: {
    selectCity: function (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang='scss'>
@import '../../../assets/styles/px2rem.scss';
.c-city-area{
  flex: 1;
  overflow: hidden;
  .h2-title{
    padding: px2rem(5);
    background-color: #ccc;
    font-size: px2rem(14);
    color: #212121;
  }
  .common-city-container{
    overflow: hidden;
    touch-action: none;
  }
  .common-city{
    width: px2rem(95);
    height: px2rem(25);
    line-height: px2rem(23);
    font-size: px2rem(15);
    margin: px2rem(10) px2rem(13);
    border: px2rem(1) solid gray;
    border-radius: px2rem(3);
    padding: 0 px2rem(10);
    text-align: center;
    float: left;
    color: #212121;
  }
  .all-city-container{
    dd{
      height: px2rem(30);
      line-height: px2rem(30);
      padding-left: px2rem(5);
      font-size: px2rem(16);
      color: #212121;
    }
  }
}

</style>
