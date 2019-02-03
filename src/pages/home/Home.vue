<template>
  <div class="home">
    <home-header />
    <banner />
    <Option />
    <gps-and-list />
    <popular />
    <is-like />
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import Banner from './components/Banner'
import Option from './components/Option'
import GpsAndList from './components/GpsAndList'
import Popular from './components/Popular'
import IsLike from './components/IsLike'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Banner,
    Option,
    GpsAndList,
    Popular,
    IsLike
  }
}

</script>

<style>
div{
  color: aquamarine;
}
</style>
