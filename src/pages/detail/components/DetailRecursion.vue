// 递归组件
<template>
  <div>
    <slot name='xxoo'></slot>
    <div v-for='(item, index) in list' :key='index' class='list-item'>
      <i class='iconfont icon-ai225-copy'></i>
      <span>{{item.title}}</span>
      <!-- ↓判断，如果存在子级菜单，则递归调用本组件进行循环使用 -->
      <div v-if="item.children"  class='list-item'>
         <detail-recursion :list='item.children'></detail-recursion>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailRecursion',
  props: {
    list: Array
  }
}
</script>

<style lang='scss'>
@import '../../../assets/styles/px2rem.scss';
.list-item {
  font-size: px2rem(18);
  color: gray;
  margin: px2rem(10);
  i {
    color: orangered;
  }
}
</style>
