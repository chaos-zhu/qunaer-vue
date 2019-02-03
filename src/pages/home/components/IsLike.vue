<template>
  <div class="is-like-container">
    <div class="is-like-header">
      <i class="iconfont icon-xinaixin"></i> <span>猜你喜欢</span>
    </div>
    <ul class="is-like-list">
      <li>
        <img
          src="http://img1.qunarzz.com/sight/p0/1707/c7/c7f3baa7a5094e3ca3.img.jpg_200x200_1e7123ce.jpg"
          alt="加载失败了~"
        />
        <div>
          <h2>三亚海上观光巴士</h2>
          <p>
            <span>⭐⭐⭐⭐⭐</span>
            <b>18条评论</b>
          </p>
          <div>
            <span>￥39.8</span>
            <p>天涯区</p>
          </div>
        </div>
      </li>
      <li>
        <img
          src="http://img1.qunarzz.com/sight/p0/1707/c7/c7f3baa7a5094e3ca3.img.jpg_200x200_1e7123ce.jpg"
          alt="加载失败了~"
        />
        <div>
          <h2>三亚海上观光巴士</h2>
          <p>
            <span>⭐⭐⭐⭐⭐</span>
            <b>18条评论</b>
          </p>
          <div>
            <span>￥39.8</span>
            <p>天涯区</p>
          </div>
        </div>
      </li>
      <li>
        <img
          src="http://img1.qunarzz.com/sight/p0/1707/c7/c7f3baa7a5094e3ca3.img.jpg_200x200_1e7123ce.jpg"
          alt="加载失败了~"
        />
        <div>
          <h2>三亚海上观光巴士</h2>
          <p>
            <span>⭐⭐⭐⭐⭐</span>
            <b>18条评论</b>
          </p>
          <div>
            <span>￥39.8</span>
            <p>天涯区</p>
          </div>
        </div>
      </li>
      <li>
        <img
          src="http://img1.qunarzz.com/sight/p0/1707/c7/c7f3baa7a5094e3ca3.img.jpg_200x200_1e7123ce.jpg"
          alt="加载失败了~"
        />
        <div>
          <h2>三亚海上观光巴士</h2>
          <p>
            <span>⭐⭐⭐⭐⭐</span>
            <b>18条评论</b>
          </p>
          <div>
            <span>￥39.8</span>
            <p>天涯区</p>
          </div>
        </div>
      </li>
      <li>
        <img
          src="http://img1.qunarzz.com/sight/p0/1707/c7/c7f3baa7a5094e3ca3.img.jpg_200x200_1e7123ce.jpg"
          alt="加载失败了~"
        />
        <div>
          <h2>三亚海上观光巴士</h2>
          <p>
            <span>⭐⭐⭐⭐⭐</span>
            <b>18条评论</b>
          </p>
          <div>
            <span>￥39.8</span>
            <p>天涯区</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
@import '../../../assets/styles/px2rem.scss';
.is-like-container{
  padding: 0 px2rem(10);
    .is-like-header{
      height: px2rem(43);
      line-height: px2rem(43);
      font-size: px2rem(15);
      color: #212121;
      i{
        font-size: px2rem(16);
        color: #ff0033;
      }
    }
    .is-like-list{

      li{
        display: flex;
        margin-bottom: px2rem(25);
        img{
          width: px2rem(100);
          height: px2rem(100);
          margin-right: px2rem(15);
        }
        div{
          flex: 1;
          h2{
            color: #212121;
            font-size: px2rem(17);
            margin: px2rem(15) 0;
          }
          p{
            margin-bottom: px2rem(15);
            span{
              font-size: px2rem(14);
              margin-right: px2rem(10);
              color: gray;
            }
            b{
              color: gray;
              font-size: px2rem(13);
            }
          }
          div{
            display: flex;
            justify-content: space-between;
            span{
              font-size: px2rem(16);
              color: orangered;
            }
            p{
              font-size: px2rem(14);
              color: gray;
            }
          }
        }
      }

    }
}
</style>
