<template>
  <div class="homePage">
    <x-header>
      <template v-slot:center>
        <div class="search">
          <input type="text" :class="[{cu:placeHolderFlag}]" @focus="placeHolderFlag=false" @blur="placeHolderFlag=true">
          <span class="placeholder"><span> <i class="l-icon icon-search"></i></span><span>搜索音乐、歌词、电台</span></span>
        </div>
      </template>
      <template v-slot:right>
        <div class="item-right">
          <i class="l-icon icon-menu"></i>
        </div>
      </template>
      <template v-slot:left>
        <div class="item-left">
          <i class="l-icon icon-luyin"></i>
        </div>
      </template>
    </x-header>
    <div class="main">
      <x-tabed :tabedData="tabedData"></x-tabed>
    </div>
  </div>
</template>
<script>
  import xHeader from '../../components/tabbar-header/index.vue';
  import xTabed from '../../components/tabbed-navigation/index.vue';
  export default {
      data() {
        return {placeHolderFlag:true,tabedData:[{label:"个性推荐",path:"/home/PersonalRecommendation"},{label:"歌单",path:"/home/songSheet"},{label:"主播电台",path:"/home/AnchorStation"},{label:"排行榜",path:"/home/RankingList"}]}
      },
  components:{
      xHeader,
      xTabed
  }
  }
</script>
<style lang="less" scoped>
.homePage {
  .main {
    padding-top: 38px;
  }
  .item-left,
  .item-right {
      height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
  }
  .search {
    background-color: #fff;
    width: 100%;
    margin-top: 2px;
    height: 34px;
    border-radius: 6px;
    overflow: hidden;
    position: relative;

   .placeholder {
     position: absolute;
     padding: 0 20px;
     height: 100%;
     line-height: 34px;
     width: 100%;
     box-sizing: border-box;
      top: 0;
     left: 0;
      color: #d2d2d2;
     font-size: 14px;
     text-align: center;
     background-color: #fff;
     letter-spacing: 3px;
     span {
       &:first-child {
         font-size: 14px;
         margin-right: 10px;
       }
     }
   }
    .cu {
      background: transparent;
    }
    >input[type=text]
    {

      width: 100%;
      height: 100%;
      line-height: 34px;
      padding:0 20px;
      box-sizing: border-box;
      vertical-align: middle;
      border: none;
      outline: none;
      position: relative;
      z-index: 999;
    }
  }
}
</style>
