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
    <audio
      src="http://qiniu.zhulijun.club/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E2%98%85%20%E5%90%AC%E5%A6%88%E5%A6%88%E7%9A%84%E8%AF%9D.mp3"
      loop
      id="audio"
     >
     </audio>
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
    background: green !important;
    height: px2rem(5);
  }
#nprogress .spinner-icon{
    border-color: white!important;
    border-left-color: green!important;
  }
</style>
