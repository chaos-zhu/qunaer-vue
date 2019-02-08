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
      src="http://fs.w.kugou.com/201902081538/4d38546f8d7b127bfdec888338a42c12/G058/M01/1E/17/2oYBAFcZfXSAFkgUABo3MIGxzk8960.mp3"
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
    background: red !important;
    height: px2rem(5);
  }
#nprogress .spinner-icon{
    border-color: white!important;
    border-left-color: red!important;
  }
</style>
