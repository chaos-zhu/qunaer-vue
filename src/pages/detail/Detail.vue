<template>
  <div>
    <detail-banner></detail-banner>
    <detail-recursion></detail-recursion>
    <div style="height:2000px"></div>
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
      id: ''
    }
  },
  activated () {
    document.documentElement.scrollTop = 0
    this.getId()
  },
  methods: {
    getId: function () {
      this.id = this.$route.params.id
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/px2rem.scss'

</style>
