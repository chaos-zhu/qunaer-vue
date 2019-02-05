<template>
  <div class='p-wrap'>
    <div class='p-container'>
      <!-- 头部，本周热门榜单和全部榜单 -->
      <ul class='p-header'>
        <li>
          <i class='iconfont icon-huo1'></i>
          <span>本周热门榜单</span>
        </li>
        <li class='p-all-list'>
          <span>全部榜单</span>
          <i class='iconfont icon-sp icon-arrow-right'></i>
        </li>
      </ul>
      <ul class='p-hot-content'>
        <li v-for="item in recommendList" :key='item.id'>
          <img
            :src='item.imgUrl'
            :alt='item.id'
          >
          <span>{{item.title}}</span>
          <p>￥{{item.price}}起</p>
        </li>
      </ul>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popular',
  props: {
    recommendList: Array
  }
}
</script>

<style lang='scss'>
@import '../../../assets/styles/px2rem.scss';
.p-wrap {
  min-height: px2rem(190);
  background-color: #eee;
  padding: px2rem(10) 0;
  .p-container {
    height: 100%;
    background-color: white;
    padding: 0 px2rem(10);
    .p-header {
      height: px2rem(47);
      line-height: px2rem(47);
      padding: 0 px2rem(10);
      display: flex;
      justify-content: space-between;
      font-size: px2rem(15);
      color: #212121;
      li {
        i {
          font-size: px2rem(15);
          color: orangered;
          margin: 0 px2rem(2);
        }
      }
    }
    .p-all-list {
      font-size: px2rem(14);
      color: gray;
      .icon-sp {
        color: gray;
      }
    }
    .p-hot-content {
      min-height: px2rem(140);
      overflow-x: scroll;
      display: flex;
      li {
        width: px2rem(100);
        height: 100%;
        padding-bottom: px2rem(10);
        margin-right: px2rem(5);
        text-align: center;
        img {
          height: px2rem(100);
          width: px2rem(100);
        }
        span {
          font-size: px2rem(13);
          display: inline-block;
          width: px2rem(100);
          color: #212121;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          margin: px2rem(3) 0;
        }
        p {
          font-size: px2rem(14);
          color: orangered;
        }
      }
    }
  }
}
</style>
