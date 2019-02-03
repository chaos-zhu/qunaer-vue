<template>
  <div class='p-wrap'>
    <div class='p-container'>
      <!-- 头部，本周热门榜单和全部榜单 -->
      <ul class="p-header">
        <li><i class="iconfont icon-huo1"></i><span>本周热门榜单</span></li>
        <li class="p-all-list"><span>全部榜单</span><i class="iconfont icon-sp icon-arrow-right"></i></li>
      </ul>
      <ul class="p-hot-content">
        <li><img src="http://img1.qunarzz.com/sight/p0/1603/97/97a91e052b51aa9890.water.jpg_250x250_e3fdfad6.jpg" alt="加载失败"><span>天涯海角</span><p>￥66.6起</p></li>
        <li><img src="http://img1.qunarzz.com/sight/p0/1811/da/da5d81a240eb2b3da3.img.jpg_250x250_97225988.jpg" alt="加载失败"><span>支洲岛</span><p>￥66.6起</p></li>
        <li><img src="http://img1.qunarzz.com/wugc/p189/201206/12/a3ace34bc010041193835fbb.jpg_250x250_91601e97.jpg" alt="加载失败"><span>南山文化旅游区</span><p>￥66.6起</p></li>
        <li><img src="http://img1.qunarzz.com/sight/p0/1809/ff/ffc62d609a5c3521a3.img.jpg_250x250_4b6fbf3e.jpg" alt="加载失败"><span>亚龙热带天堂旅游区</span><p>￥66.6起</p></li>
        <li><img src="http://img1.qunarzz.com/sight/p0/1812/93/93df8114ba3bbcf9a3.img.jpg_250x250_b619f436.jpg" alt="加载失败"><span>鹿头风景区</span><p>￥66.6起</p></li>
        <li><img src="http://img1.qunarzz.com/sight/p0/1802/10/106dffb752b06f6a3.img.jpg_250x250_f5085b8f.jpg" alt="加载失败"><span>亚特兰蒂斯水世界</span><p>￥66.6起</p></li>
      </ul>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
@import '../../../assets/styles/px2rem.scss';
.p-wrap{
  height: px2rem(190);
  background-color: #eee;
  padding: px2rem(10) 0;
  .p-container{
    height: 100%;
    background-color: white;
    padding: 0 px2rem(10);
    .p-header{
      height: px2rem(47);
      line-height: px2rem(47);
      padding: 0 px2rem(10);
      display: flex;
      justify-content: space-between;
      font-size: px2rem(15);
      color: #212121;
      li{
        i{
          font-size: px2rem(15);
          color: orangered;
          margin: 0 px2rem(2);
        }
      }
    }
    .p-all-list{
      font-size: px2rem(14);
      color: gray;
      .icon-sp{
        color: gray;
      }
    }
    .p-hot-content{
      max-height: px2rem(140);
      overflow-x: scroll;
      display: flex;
      li{
        width: px2rem(100);
        height: 100%;
        padding-bottom:px2rem(10);
        margin-right:px2rem(5);
        text-align: center;
        img{
          height: px2rem(100);
          width: px2rem(100);
        }
        span{
          font-size: px2rem(13);
          display: inline-block;
          width: px2rem(100);
          color: #212121;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          margin: px2rem(3) 0;
        }
        p{
          font-size: px2rem(14);
          color: orangered;
        }
      }
    }
  }
}
</style>
