<template>
  <ul class='alphabet-container'>
    <li
      v-for="(val, key) in cities"
      :key="key"
    >
      {{key}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  mounted () {
    console.log(this.cities)
  }
}
</script>

<style lang='scss'>
@import '../../../assets/styles/px2rem.scss';
.alphabet-container{
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  text-align: center;
  width: px2rem(16);
  display: flex;
  flex-direction: column;
  justify-content: center;
  li{
    font-size: px2rem(15);
    padding: px2rem(2);
    color: #00bcd4;
    background-color: #FFFFF0;
  }
}
</style>
