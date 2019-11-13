<template>
  <div class="PersonalRecommendation">
    <x-swipe :list="mvList"></x-swipe>
    <div class="nav clearfix">
      <div class="item">
        <div class="circle">
          <img src="./img/fm.svg" alt="">
        </div>
        <p>私人FM</p>
      </div>
      <div class="item">
        <div class="circle">
          <span class="badge">31</span>
        </div>
        <p>每日歌曲推荐</p>
      </div>
      <div class="item">
        <div class="circle">
          <img src="./img/sort.svg" alt="">
        </div>
        <p>云音乐新歌榜</p>
      </div>
    </div>
    <div class="main">
      <item-group :hdTip="'推荐歌单'" :hdLeftIcon="'icon-singer-list'">
        <template v-slot:main>
          <div class="singer">
            <router-link v-for="item in singerList" :key="item.id" tag="div" :to="`/singer/${item.id}`">
              <img :src="item.picUrl" alt="">
              <p>{{item.name}}</p>
              <span class="lsitenPeople"><i class="l-icon icon-listens"></i><span>{{item.playCount|peopolcount}}</span></span>
            </router-link>
          </div>
        </template>
      </item-group>
      <item-group :hdTip="'独家放送'" :hdLeftIcon="'icon-dujia'">
        <template #main>
          <div class="du">
              <div :class="[index===0?'f-l':'f-r']" v-for="(item,index) in dujiaList" :key="index">
                <img :src="item.picUrl" alt="">
                <p>{{item.name}}</p>
                <a href="" class="badge-circle">
                  <span class="l-icon icon-camera"></span>
                </a>
              </div>

          </div>
        </template>
      </item-group>
      <item-group :hdTip="'最新音乐'" :hdLeftIcon="'icon-music-latest'">
        <template v-slot:main>
          <div class="singer">
            <div v-for="item in latestMusic" :key="item.id">
              <img :src="item.song.artists[0].img1v1Url" alt="">
              <p>{{item.name}}</p>
              <span class="lsitenPeople"><i class="l-icon icon-listens"></i><span>{{item.song.playedNum|peopolcount}}</span></span>
            </div>
          </div>
        </template>
      </item-group>
      <item-group :hdTip="'推荐MV'" :hdLeftIcon="'icon-zhuanji'">
        <template #main>
          <div class="du">
            <div :class="[(index===0||index%2===0)?'f-l':'f-r']" v-for="(item,index) in mvList" :key="index">
              <img :src="item.picUrl" alt="">
              <p>{{item.name}}</p>
              <span class="lsitenPeople"><i class="l-icon icon-camera"></i><span>{{item.playCount|peopolcount}}</span></span>

            </div>

          </div>
        </template>
      </item-group>
      <item-group :hdTip="'主播电台'" :hdLeftIcon="'icon-diantai'">
        <template v-slot:main>
          <div class="singer">
            <div v-for="item in diantaiList" :key="item.id">
              <img :src="item.blurCoverUrl" alt="">
              <p class="diantai-desc">{{item.name}}</p>
              <div class="plays"></div>
              <div class="diantai"><p>{{item.description}}</p></div>
            </div>
          </div>
        </template>
      </item-group>

    </div>
  </div>
</template>
<script>
    import xSwipe from '../../components/swipe/index.vue';
    import itemGroup from '../../components/item-group/index.vue'
    export default {
        name:'swipe',
      data() {
        return {
            mvList:[],
            singerList:[],
            latestMusic:[],
            dujiaList:[],
            diantaiList:[]
        };
      },
       methods:{
         async getMvList() {
             const {data:res} = await this.$axios.get('personalized/mv');
             if(res.code!==200)
             {
                 return;
             }
             this.mvList = res.result;
         },
         async getSingerList() {
            const {data:res} =  await this.$axios.get('personalized',{params:{
                     limit:3
                 }});
            if(res.code!==200)
            {
                return;
            }

            this.singerList = res.result;
         },
         async getLatestMusic() {
            const {data:res} = await this.$axios.get('personalized/newsong');
            if(res.code!==200)
            {
                return;
            }

          res.result.splice(3);
          this.latestMusic = res.result;
         },
         async getDuList() {
             const {data:res} = await this.$axios.get('personalized/privatecontent');
             if(res.code!==200)
             {
                 return;
             }

             res.result.splice(0,1);
             console.log(res);
             this.dujiaList = res.result;

         },
         async getDianTai() {
            const {data:res} = await this.$axios.get('program/recommend');
            if(res.code!==200)
                return;
             console.log(res);
             res.programs.splice(3);
             this.diantaiList = res.programs;
         }
       },
        created() {
            this.getMvList();
            this.getSingerList();
            this.getLatestMusic();
            this.getDuList();
            this.getDianTai();
        },
      components:{
          xSwipe,
          itemGroup
      }
  }
</script>
<style lang="less" scoped>
 .PersonalRecommendation {
   padding-bottom: 50px;
   .plays {
     position: absolute;
     width: 26px;
     height: 26px;
     border-radius: 50%;
     border: 1px solid pink;
     background-color:rgba(0,0,0,0.4);
     right: 2px;
     top: 50px;

   }
   .plays:before {
     content: '';
     position: absolute;
     top:50%;
     left: 50%;
     transform: translate(-50%,-50%);
     border-left: 6px solid #fff;
     border-top: 4px solid transparent;
     border-bottom: 4px solid transparent;
     border-right: none;

   }
   .lsitenPeople {
     position: absolute;
     width: 100%;
     background-color:rgba(0,0,0,0.1);
     top:0;
     right: 0;
     color: #fff;
     text-align: right;
     span {
       font-size: 12px;
       margin-left: 4px;
     }
   }
   .signer-more {
     margin-bottom: 20px;
   }
   .nav {
     margin: 15px 0;
     .item {
       &:nth-child(n+1)
       {

       }
       .circle {
         width: 54px;
         height: 54px;
         border: 1px solid #313639;
         border-radius: 50%;
         margin: 0 auto;
         line-height: 54px;
         .badge {
           font-size: 23px;
           color: #313639;
           font-weight: bolder;
         }
         img {
           vertical-align: middle;
           height: 30px;
           width: 30px;
         }
       }
       p {
        margin-top: 4px;
         font-size: 14px;
         color: #000;
       }
       text-align: center;
       float:left;
       width: 33.333%;
       height: 78px;
     }
   }
   .main {
     border:1px solid #e7e9ec;
     padding:20px 0;
     .diantai-desc {
       line-height: 15px !important;
       height: 30px;
       overflow: hidden;
     }
        .du {
          overflow: hidden;

          >div {
            position:relative;
            width: 47%;
            height: 125px;
            >a {
              top: 4px;
              left: 2px;
              span {
                color: #fff;
                font-size: 14px;
              }
            }
            >img {
              width: 100%;
              height: 90px;
            }
            >p {
              line-height: 15px;
              font-size: 12px;
            }
          }
        }
     .diantai {
       position: absolute;
       top:60px;
       width: 100%;
       height: 20px;
       line-height: 20px;

       p {
         float: left;
         width: 60%;
         text-overflow: ellipsis;
         overflow: hidden;
         white-space: nowrap;
         color: #fff;
         box-sizing: border-box;
         padding-left: 10px;
         font-size: 12px;

       }
     }
        .singer {
          height:120px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          >div {
            &:nth-child(2)
            {
              margin: 0 10px;
            }
            position: relative;
            overflow: hidden;
            flex: 1;
            }
            img {
              height: 80px;
              width: 100%;
              vertical-align: middle;
            }
            p {
              font-size: 12px;
              letter-spacing: 1px;
              line-height: 20px;
              font-weight: 300;
            }
            flex: 1;
            &:first-child {
              margin-left: 0;
            }
            margin-left: 10px;

          }
        }


 }
</style>
