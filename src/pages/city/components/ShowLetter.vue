<template>
  <div>
    <transition
     leave-active-class="animated fadeOut"
    :duration="300"
    >
      <div class="show-letter" v-if="touchStatus">
        <span>
        {{letter}}
        </span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ShowLetter',
  props: {
    letter: String,
    touchStatus: Boolean
  }
}
</script>

<style lang="scss">
@import '../../../assets/styles/px2rem.scss';
.show-letter{
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 9999;
  width: px2rem(50);
  height: px2rem(50);
  line-height: px2rem(50);
  background-color:rgba(0, 0, 0, 0.3);
  text-align: center;
  color: orangered;
  margin-left: px2rem(-25);
  margin-top: px2rem(-25);
  font-size: px2rem(35);
}
</style>
