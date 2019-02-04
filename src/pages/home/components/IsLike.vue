<template>
  <div class="is-like-container">
    <div class="is-like-header">
      <i class="iconfont icon-xinaixin"></i> <span>猜你喜欢</span>
    </div>
    <ul class="is-like-list">
      <li v-for='item in guessList' :key='item.id'>
        <img
          :src="item.imgUrl"
          alt="item.id"
        />
        <div>
          <h2>{{item.title}}</h2>
          <p>
            <span>{{item.score}}</span>
            <b>{{item.comment}}条评论</b>
          </p>
          <div>
            <span>￥{{item.price}}起</span>
            <p>{{item.area}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IsLike',
  props: {
    guessList: String
  }
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
