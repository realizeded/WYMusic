<template>
<div class="singListPage">
  <x-header :bgc="'transparent'">
    <template #left>
      <div class="hd-left" @click="$router.back()">
        <span class="l-icon icon-left-arrow"></span>
      </div>
    </template>
    <template #center>
      <div class="hd-center">
        歌单
      </div>
    </template>
    <template #right>
      <div class="">

      </div>
    </template>
  </x-header>
  <div class="singList-hd">
       <div class="singList-hd-up">
        <div class="f-l">
          <img :src="sings.coverImgUrl" alt="">
        </div>
        <div class="f-r">
          <p v-text="sings.name"></p>
        </div>
      </div>
        <div :style="{'backgroundImage':`url(${sings.coverImgUrl})`}"></div>
       <div class="singList-hd-down">
         <div class="item">
           <i class="l-icon icon-new-folder"></i>
           <p v-text="sings.playCount"></p>
         </div>
         <div class="item" @click="$router.push({path:'/commentPage',query:{id:2}})">
               <i class="l-icon icon-message"></i>
           <p v-text="sings.commentCount"></p>
         </div>
         <div class="item">
               <i class="l-icon icon-redirect"></i>
           <p v-text="sings.shareCount"></p>
         </div>
         <div class="item">
               <i class="l-icon icon-download"></i>
           <p v-text="sings.trackCount"></p>
         </div>
       </div>
  </div>
  <xlist :list="sings.tracks">

  </xlist>
</div>
</template>
<script>

    export default {
    data:function() {
        return {sings:[]};
    },
      methods:{
        async getSings() {
            const {data:res} = await this.$axios.get(`playlist/detail?id=${this.$route.params.id}`);
            if(res.code!==200)
                return;
            console.log(res);
            this.sings = res.playlist;
        }
      },
      created() {
        this.getSings();
      },
      components:{
        xHeader:()=>import('../../components/tabbar-header/index.vue'),
        xlist:()=>import('../../components/list/index.vue')
    }
  }
</script>
<style lang="less" scoped>
.singListPage {

  .hd-center {
    text-align: center;
    line-height: 38px;
    color: #fff;
  }
  .hd-left {
    color: #fff;
    line-height: 38px;
    text-align: center;
    font-size: 21px;
  }
  .singList-hd {

    position: relative;
    background: transparent;
    padding-top: 40px;
    >div {
      &:nth-child(2) {
        position: absolute;
        width: 100%;
        height: 100%;
        background-repeat:no-repeat;
        background-size: cover;
        background-position: center;
        filter: blur(12px);
        top:0;
        left: 0;
        z-index:-1;
      }
    }
    .singList-hd-up {
      padding: 0 15px;
      overflow: hidden;
      position: relative;
      div {
        margin-top: 12px;
        &:first-child {
          width: 40%;
          height:140px;
          box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.4);
          img {
            width: 100%;
            height: 100%;
          }
        }

        &:last-child {
          width: 57%;
          height: 140px;
          color: #fff;
          p {
            padding:20px 0;
            letter-spacing: 4px;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: lighter;
          }
        }
      }

    }
    .singList-hd-down {
      margin-top: 10px;

      justify-content: space-around;
      display: flex;
      .item {
        flex: 1;

        text-align:center;
        padding:10px 0;
        color: #ffffff;
        i {
          font-size: 18px;

        }
        p {
          padding:5px 0;
          font-weight: lighter;
        }
      }
    }
  }
}
</style>
