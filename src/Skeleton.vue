<template>
  <div class="skeleton">
    骨架屏Test...
    <div class="skeleton-nav"></div>
    <div class="skeleton-swiper"></div>
    <ul class="skeleton-tabs">
      <li v-for="i in 8" :key="i" class="skeleton-tabs-item"><span></span></li>
    </ul>
    <ul class="skeleton-banner"><li  class="skeleton-banner-item"></li></ul>
    <div v-for="i in 2" :key="i" class="skeleton-productions"></div>
  </div>
</template>

<style>
@import './assets/styles/px2rem.scss';
.skeleton {
  position: relative;
  height: 100%;
  overflow: hidden;
  padding: 15px;
  box-sizing: border-box;
  background: #fff;
  text-align: center;
  color: #eee;
  font-size: 15px;
}
.skeleton-nav {
  height: 88px;
  background: #eee;
  margin-bottom: 15px;
}
.skeleton-swiper {
  height: 180px;
  background: #eee;
  margin-bottom: 15px;
}
.skeleton-tabs {
  list-style: none;
  padding: 0;
  margin: 0 -15px;
  display: flex;
  flex-wrap: wrap;
}
.skeleton-tabs-item {
  width: 25%;
  /* height: 80px; */
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 45px;
}
.skeleton-tabs-item span {
  display: inline-block;
  width: 130px;
  height: 120px;
  border-radius: 50%;
  background: #eee;
}
.skeleton-banner {
  height: 90px;
  background: #eee;
  margin-bottom: 15px;
  box-sizing: border-box;
}
.skeleton-banner-item{
  width: 50%;
  height: 100%;
  border-right: 22px solid white;
}
.skeleton-productions {
  height: 150px;
  margin-bottom: 35px;
  background: #eee;
}
</style>
