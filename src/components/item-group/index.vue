<template>
  <div class="signer-more">
    <div class="main-hd">
      <div class="f-l hd-left"><span :class="['l-icon',hdLeftIcon]"></span><a href="">{{hdTip}}</a></div>
      <div class="f-r hd-right"><a href="">更多</a><i class="l-icon icon-right-arrow"></i></div>
    </div>
    <div class="main-bd">
      <slot name="main"></slot>
    </div>
  </div>
</template>
<script>
  export default {
      name:'itemgroup',
      props:{
          hdTip:{
              type:String,
              default:""
          },
          hdLeftIcon:{
              type:String,
              default:""
          }
      }
  }
</script>
<style lang="less" scoped>
  .signer-more {
    padding: 0 7px;
    .main-hd {
      height: 30px;

      .hd-left {
        a {
          font-weight: bolder;
          color: #000;
        }
        span {
          margin-right: 6px;
        }
      }
      .hd-right {
        a {
          color: #babbbb;
          font-size: 12px;
          font-weight: 300;
        }
        i {
          font-size: 12px;
          color: #babbbb;

        }
      }
    }

  }
</style>
