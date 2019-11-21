<template>
  <div class="AnchorStation">
    <x-header :list="list"></x-header>
  </div>
</template>
<script>

  export default {
      name:'AnchorStation',
      data() {
          return {
              list:{
                  imgsrc:'https://p1.music.126.net/YtpbI33i55eq9e7_W0DZEA==/109951164485325270.jpg',
                  title:'精品歌单',
                  l:'书背景音乐',
                  r:'小提琴篇'
              },
              hotList:[],
              queryInfo:{
                  limit:20,
                  offset:0
              }
          }
      },
      created(){
          this.getHotList();
      },
      methods:{
         async getHotList() {
             const {data:res} = await this.$axios.get('dj/hot',{params:this.queryInfo});
              console.log(res);
         }
      },
      components:{
          xHeader:()=>(import("../../components/tabheader/index.vue"))
      }
  }
</script>
<style lang="less" scoped>
  .AnchorStation
  {
    padding: 0 8px 60px;
  }
</style>
