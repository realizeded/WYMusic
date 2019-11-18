<template>
<div class="songSheetPage">
<tab-header :list="list"></tab-header>
  <div class="list-sheet">
      <router-link tag="div" :to="'/singer/'+item.id" class="item" v-for="(item,index) in hotList" :key="index">
        <div class="up">
          <div class="showListencount">
            <span>
              <i class="l-icon icon-listens"></i>
              {{item.subscribedCount|peopolcount}}
            </span>
          </div>
          <div class="showauthor">
            <span>
              <i class="l-icon icon-user"></i>
              {{item.creator.nickname}}
            </span>
          </div>
          <img :src="item.subscribers[0].backgroundUrl" alt="">
        </div>
        <div class="down">{{item.copywriter}}</div>
      </router-link>

  </div>
</div>
</template>
<script>

  export default {
    name:'songSheet',
    data(){
        return {
            list:{
              imgsrc:'https://p1.music.126.net/YtpbI33i55eq9e7_W0DZEA==/109951164485325270.jpg',
              title:'精品歌单',
              l:'书背景音乐',
              r:'小提琴篇'
            },
            queryInfo:{
                before:0,
                limit:8
            },
            hotList:[]
        };
    },
    created(){
      this.getHot();
    },
    methods:{
      async getHot(){
          const {data:res} = await this.$axios.get('top/playlist/highquality',{params:this.queryInfo});
          if(res.code!==200)
              return;
          this.hotList = res.playlists;

      }
    },
    components:{
        tabHeader:()=>(import('../../components/tabheader/index.vue'))
    }
  }
</script>
<style lang="less" scoped>

.songSheetPage {
  padding: 0 8px 50px;
  .showListencount {
    position: absolute;
    top: 0;
    width: 100%;
    height: 20px;
    background:rgba(0,0,0,0.4);
    text-align: right;
    color: #fff;
    font-size:14px;
  }
  .showauthor {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20px;
    background:rgba(0,0,0,0.4);
    text-align: left;
    color: #fff;
    font-size:14px;
  }
  .list-sheet {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      height: 160px;
      width: 46%;
      margin: 10px 0;
      position: relative;
      .up {
        height: 86%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          vertical-align: top;
        }
      }
      .down {
        text-align: center;
        height: 14%;
      }
    }
  }
}
</style>
