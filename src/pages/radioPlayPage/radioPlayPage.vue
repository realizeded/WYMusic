<template>
  <div class="radioPlayPage" ref="radioBG" >
    <div class="musicList" v-show="musicListIsShow">
      <div>
        <x-audio-list :musics="$store.getters.musics" @delitem="delItem" @selectmusic="selectMusic"></x-audio-list>
       <!-- <ul>
          <li v-for="(item,index) in $store.getters.musics" :key="index" @click="selectMusic(index)"><a href="#">{{item.name}}</a></li>
        </ul>-->
      </div>
    </div>
    <div class="bgk" ref="bgk" @click="musicListIsShow = false"></div>
    <xhead :bgc="'transparent'" class="nbv">
      <template #center>
        <div class="heads">
          <p>{{musicInfo.name||""}}</p>
          <p>{{musicInfo.ar[0].name||""}}</p>
        </div>
      </template>
      <template #left>
          <div></div>
      </template>
      <template #right>
        <div></div>
      </template>
    </xhead>
    <div class="musice-duration">
      <div class="contains">

        <div ref="line"  @touchmove="touchmove" class="line">
          <div class="progressRadio" :style="{'width':`${offset}px`}">
            <div class="circle" @touchstart="circlestart" @touchend="circleend"></div>
          </div>
        </div>
      </div>
      <div class="du-left"><span>{{currentTime|durationFormat}}</span></div>
      <div class="du-right">{{Ttime|durationFormat}}</div>
    </div>
    <div class="main">

    </div>
    <div class="control">
      <div><i class="l-icon icon-random"></i></div>
      <div><i class="l-icon icon-paly-previous" @click="previousMusic"></i></div>
      <div @click="musicState">
        <i :class="['l-icon',playing?'icon-playing':'icon-stop']"></i>
      </div>

      <div><i class="l-icon icon-paly-next" @click="nextMusic"></i></div>

      <div @click.stop="musicListIsShow=true"><i class="l-icon icon-list-menu"></i></div>
    </div>
   <audio ref="ra" @timeupdate="playProgress($event)" :src="`https://music.163.com/song/media/outer/url?id=${cuc}.mp3 `" autoplay @canplay="getDuration" @ended="nextMusic"></audio>

  </div>
</template>
<script>
  import {mapActions} from 'vuex';
  export default {
        name:"radioPlayPage",
        data(){
            return {isTouch:false,cuIndex:0,musicListIsShow:false,offset:0,musicInfo:{},playing:true,bg:"12",Ttime:0,currentTime:0.00,cuc:this.$route.params.id};
        },
        created:function() {
                this.getMusicInfo();
                this.$store.dispatch('load');

        },
        mounted(){

            this.$refs.radioBG.style.height = window.innerHeight+'px';
        },
        methods:{
            ...mapActions(['delMusic']),
            async getLyric() {
               const {data:res} = await this.$axios.get(`lyric?id=33894312`);
                console.log(1);
               console.log(res);
               },
            delItem(index) {

                this.delMusic(index);
            },
            touchmove(el) {
                el = el || window.event;
                let pointerX = el.changedTouches[0].pageX;
                let x = pointerX - this.$refs.line.offsetLeft;
                let lineWidth = this.$refs.line.clientWidth;
                let time = this.Ttime * (x/this.$refs.line.clientWidth);
               if(this.isTouch&&(x>=0&&x<=lineWidth)) {
                   this.offset = x;
                   this.$refs.ra.currentTime = time;
                   this.currentTime = time;
               }
            },
            circleend() {
                this.isTouch = false;
            },
            circlestart() {
              this.isTouch = true;
            },
            selectMusic(index) {
                this.musicInfo = this.$store.getters.musics[index];
                this.cuc = this.musicInfo.id;
            },
            previousMusic() {
                let arr = this.$store.getters.musics;
                if(this.cuIndex>0)
                {
                    this.cuIndex--;
                    this.musicInfo = arr[this.cuIndex];
                    this.cuc = this.musicInfo.id;
                }
            },
            nextMusic() {
              let arr = this.$store.getters.musics;
              if(this.cuIndex<arr.length-1)
              {
                  this.cuIndex++;
                  this.musicInfo = arr[this.cuIndex];
                  this.cuc = this.musicInfo.id;
              }
            },
            playProgress() {
                this.currentTime = this.$refs.ra.currentTime;
                this.offset = this.$refs.line.clientWidth * (this.currentTime/this.Ttime);

            },
            getDuration() {
                this.Ttime = this.$refs.ra.duration;
             },
            musicState:function(){

                if(this.playing)
                {
                    this.$refs.ra.pause();
                } else {
                    this.$refs.ra.play();
                }
                this.playing=!this.playing;
            },
            async getMusicInfo() {
              const {data:res} = await this.$axios.get('song/detail',{params:{ids:this.$route.params.id}})
              console.log(res);
              if(res.code!==200)
                  return;
              this.musicInfo = res.songs[0];
              this.bg = res.songs[0].al.picUrl;
                this.getLyric();
          }
        },
        watch:{
            musicInfo:function(nval){
              this.$refs.bgk.style.backgroundImage =`url(${nval.al.picUrl})`;
          }


        },
        components:{
            xhead:()=>(import ('../../components/tabbar-header/index.vue')),
            xAudioList:()=>(import ('../../components/audioList/index.vue'))
        }
  }
</script>
<style lang="less" scoped>
  body {
    background-color: #232c3d;

  }
.radioPlayPage {
 .musicList {
   position: absolute;
   left: 0;
   bottom: 0;
   width:100%;
   background-color: #fff;
   z-index: 9;
   border-radius: 30px 30px 0 0;
   overflow: hidden;
   animation: show 300ms linear 1;
    height: 400px;
  >div {
    &:first-child {
      height: 100%;
      background-color:#fff;
    }
  }
 }
.musice-duration {
  position: absolute;
  height: 40px;
  bottom: 60px;
  width: 100%;
  left: 0;

  >div {
    text-align: center;
    float: left;
    height: 100%;
    line-height: 40px;
    font-size: 10px;
    &.contains {
      width: 100%;
      position: relative;

      >div:last-child{
       .progressRadio {
          height: 2px;
          position: relative;

         background-color:peru;
         .circle {
           position: absolute;
           height: 12px;
           width: 12px;
           border-radius: 50%;
           top:-6px;
           right: 0;
           background-color: peru;
         }
       }
        position: relative;
        margin: 19px 64px;
        height: 2px;
        background-color:black;
      }
    }
    &.du-left {
      width: 60px;
      margin-left: -100%;
      color: #fff;
    }
    &.du-right {
      width: 60px;
      color: #fff;
      margin-left: -60px;
    }
  }
}
 .bgk {
   position: absolute;
   width: 100%;
   height: 100%;
   background-repeat: no-repeat;
   background-position: center center;
   background-size: 100% 100%;
   filter:blur(10px) !important;
 }
  .nbv {
      box-shadow:  0px 0px 0px 0px #ff0000,   /*上边阴影  红色*/

      0px 0px 0px 0px #3bee17,   /*左边阴影  绿色*/

      0px 0px 0px 0px #2279ee,    /*右边阴影  蓝色*/

      0px 3px 10px 0px rgba(0,0,0,0.1);    /*下边阴影  黄色*/;
   }
  .heads {
   text-align: center;
    letter-spacing: 1px;
    font-weight: 300;

   >p {
     color: #fff;
     &:first-child {

     }
     &:last-child {
      font-size: 10px;
     }
   }
  }
  .control {
    display: flex;
    justify-content: space-between;
    height: 60px;

    position: absolute;
    width:100%;
    bottom: 0;
    text-align: center;
    line-height: 60px;
    div {
      color: #a1a4a8;
      &:first-child {
        font-size: 24px;
      }
      &:last-child {
        font-size: 18px;
      }
      &:nth-child(2),
      &:nth-child(4) {
        font-size: 18px;
      }
      &:nth-child(3) {
       font-size: 36px;
        color: #fff;
      }
      flex: 1;
    }
  }
  .main {
    padding-top: 38px;
  }
}
</style>
