<template>
  <div class="header" :style="{backgroundColor:bgc}">
    <div class="item">
      <slot name="center"></slot>
    </div>
    <div class="item" >
      <slot name="left"></slot>
    </div>
    <div class="item" >
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
  export default  {
      name:'tabbar-header',
      props:{
          bgc:{
              type:String,
              default:'#34393c'
          }
      }
  }
</script>
<style lang="less" scoped>
  .header {
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 38px;
    z-index: 9999999999999999999;
    .item {
      &:first-child {
        width: 100%;

        box-sizing: border-box;
        padding: 0 50px;
      }
      &:nth-child(2) {
        margin-left: -100%;
      }
      &:nth-child(3) {
        margin-left: -50px;
      }
      float: left;
      height: 100%;

      width: 50px;
    }
  }
</style>
