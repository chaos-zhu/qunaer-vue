<template>
  <div id="app">
    <transition
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      :duration="300"
      appear
    >
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/styles/px2rem.scss';
#app {
  height: 100%;
  width: 100%;
  background: rgba(#666, #333, #999, 0.5);
}
#nprogress .bar {
    background: red !important;
    height: px2rem(5);
  }
#nprogress .spinner-icon{
    border-color: white!important;
    border-left-color: red!important;
  }
</style>
