<template>
  <div class="home">
    <home-header></home-header>
    <banner></banner>
    <Option></Option>
    <gps-and-list />
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import Banner from './components/Banner'
import Option from './components/Option'
import GpsAndList from './components/GpsAndList'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Banner,
    Option,
    GpsAndList
  }
}

</script>

<style>
div{
  color: aquamarine;
}
</style>
