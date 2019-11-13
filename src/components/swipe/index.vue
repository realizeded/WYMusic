<template>
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in list" :key="item.id">
      <img :src="item.picUrl" alt="">
    </van-swipe-item>
  </van-swipe>
</template>
<script>
export default {
    name:'swipe',
    props:['list']
}

</script>
<style lang="less" scoped>
img {
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
  .van-swipe {
    height: 180px;

  }
</style>
