<template>
  <div class="tabheader">
    <div class="hd-bar">
      <div class="hd clearfix">
        <div class="f-l">
          <span class="left-title">全部歌单</span>
        </div>
        <div class="f-r">

        </div>
      </div>
      <div class="main">
        <div class="f-l">
          <a href="">
            <img :src="list.imgsrc" alt="">
          </a>
        </div>
        <div class="f-l">
          <h4>{{list.title}}</h4>
          <p><span>{{list.l}}</span> | <span>{{list.r}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default  {
      name:'tabheader',
      props:{
          list:{
              type:Object,
              required:true,
              default:function(){
                  return {};
              }
          }
      }
  }
</script>
<style lang="less" scoped>
  .tabheader {
    >.hd-bar {

      >.main {
        height: 80px;
        overflow: hidden;
        >div {

          &:first-child {
            width: 80px;
            background-color: purple;
            height: 100%;
            box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.3);
            img {
              height: 100%;
              width: 100%;
              vertical-align: top;
            }
          }
          &:nth-child(2) {
            margin-left: 20px;
            padding-top: 18px;
            letter-spacing: 1px;
            h4 {
              line-height: 26px;
              color: #000;
              font-weight: bold;
              font-size: 18px;

            }
            p {
              font-size: 14px;
              color: #a9a9a9;
            }
          }
        }
      }
      >.hd {
        padding: 10px 0;
        .left-title {
          &:before {
            content: "";
            position: absolute;
            left: 0;
            width: 4px;
            background-color:red;
            height: 100%;
          }
          position: relative;
          font-size: 17px;
          font-weight: 600;
          color: #000;
          padding-left: 8px;
        }
      }
    }
  }
</style>
