<template>
<div class="songSheetPage">
   <tab-header :list="list" :cats="cats" @func="changeListData"></tab-header>
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
 <div class="more">
   <van-button type="info" class="load-btn" round v-if="!isLoading" @click="more">加载更多</van-button>
   <van-button loading type="info" round class="loading-btn"  loading-text="加载中..." v-else />
 </div>
</div>
</template>
<script>

  export default {
    name:'songSheet',
    data(){
        return {
            isLoading:false,
            list:{
              imgsrc:'https://p1.music.126.net/YtpbI33i55eq9e7_W0DZEA==/109951164485325270.jpg',
              title:'精品歌单',
              l:'书背景音乐',
              r:'小提琴篇'
            },
            queryInfo:{
                before:0,
                limit:8,
                cat:""
            },
            hotList:[],
            cats:[]
        };
    },
    created(){
      this.getHot((res)=>{
          this.hotList = res.playlists;
      });
      this.getAllCate();
    },
    methods:{
        changeListData(val) {
            this.queryInfo.cat = val;

            this.getHot((res)=>{
                this.hotList = res.playlists;
            });

        },
       async getAllCate(){
          const {data:res} = await this.$axios.get('playlist/catlist');
          if(res.code!==200)
              return;
          this.cats = res.categories;
          },
        more(){
            this.isLoading = true;
            this.queryInfo.before = this.hotList[this.hotList.length-1].updateTime;
            this.getHot((res)=>{
                this.isLoading = false;
                if(res.playlists.length===0)
                  return this.$Toast("没有更多");
                  this.hotList.push(...res.playlists);

            });
        },
      async getHot(callback){
          const {data:res} = await this.$axios.get('top/playlist/highquality',{params:this.queryInfo});
          if(res.code!==200)
              return;
           callback(res);

      }
    },
    components:{
        tabHeader:()=>(import('../../components/tabheader/index.vue'))
    }
  }
</script>
<style lang="less" scoped>

.songSheetPage {
  padding: 0 8px 60px;
  .showListencount {
    position: absolute;
    top: 0;
    width: 100%;
    height: 20px;
    background:rgba(0,0,0,0.1);
    text-align: right;
    color: #fff;
    font-size:14px;
  }
  .showauthor {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20px;
    background:rgba(0,0,0,0.1);
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
  .more {
    text-align: center;
    margin-top: 20px;
    .load-btn,
    .loading-btn {
      width: 80%;
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>
