<template>
  <div>
    <detail-banner></detail-banner>
    <div class="cur-id xxoo border">↑点击banner图查看画廊效果↑</div>
    <detail-recursion :list='list' class="cur-id border"><span slot='xxoo' class="xxxooo">递归组件与插槽的实现:</span></detail-recursion>
    <p class="cur-id border">当前id：<span>{{id}}</span>
    </p>
    <div class="cur-id xxoo border">↓向下滑动查看Header渐隐效果下↓</div>

    <div style="height:1500px"></div>
  </div>
</template>

<script>
import DetailBanner from './components/DetailBanner'
import DetailRecursion from './components/DetailRecursion'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailRecursion
  },
  data () {
    return {
      id: '',
      list: [
        {
          title: '一级内容',
          children: [
            {
              title: '二级内容',
              children: [
                {
                  title: '三级内容'
                }
              ]
            }
          ]
        },
        {
          title: '一级内容'
        },
        {
          title: '一级内容'
        }
      ]
    }
  },
  activated () {
    this.getId()
  },
  methods: {
    getId: function () {
      this.id = this.$route.params.id
      console.log('this.$route.params.id')
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/px2rem.scss';
.cur-id{
  margin-top: px2rem(30);
  color: gray;
  font-size: px2rem(18);
  padding: px2rem(10);
  span{
    color: rgb(151, 19, 19);
  }
}
.xxoo{
  text-align: center;
}
.xxxooo{
  color: black!important;
}
</style>
