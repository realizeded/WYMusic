<template>
  <div class="audioList">
    <div class="list-hd"></div>

      <div class="box" >
        <ul  ref="ul">
          <transition-group name="list" tag="div">
            <li v-for="(item,index) in musics" :key="item.id" @click="selectMusic(index)">
              <span class="musiceName f-l">{{item.name}}</span><span class="f-l">-</span>
              <span class="singerName f-l">{{item.ar[0].name}}</span>
              <span class="l-icon icon-remove f-r" @click.stop="delItem(index)"></span>
            </li>
          </transition-group>
        </ul>
      </div>

  </div>


</template>
<script>
  export default {
      name:'audioList',
      props:{
          musics:{
              type:Array,
              default:function() {
                  return [];
              }
          }
      },
      data(){
        return {};
      },
      methods:{
         /* touchstarts(el) {
             this.Y1 = el.changedTouches[0].pageY;
             this.isTouched = true;
          },
          touchmoves(el) {
              this.Y2 = el.changedTouches[0].pageY;
              let top = (this.Y2 - this.Y1) + this.tops;
              let ulHeight = this.$refs.ul.offsetHeight;
              console.log(ulHeight);
              if(this.isTouched&&(top<=0&&top>=-ulHeight+360))
              this.tops = top;

          },
          touchends(){

          },*/
          selectMusic(index) {
              this.$emit('selectmusic',index);
          },
          delItem(index) {

            this.$emit('delitem',index);
          }
      }
  }
</script>
<style lang="less" scoped>

.audioList {
  .box {


    height: 360px;
    position: relative;
    overflow: auto;
    ul {
      position: absolute;
      width:100%;
      left: 0;
      transition: all 100ms linear;
    }
  }
  li {
    color: #b3b5b2;
    line-height: 50px;
    height: 50px;
    letter-spacing: 1px;
    padding:0 5px;
    .musiceName {
      color: #000;

    }
    .singerName {
      font-size: 12px;
    }
  }
  .list-hd {
    height: 50px;
    line-height: 50px;
    padding:0 5px;
    border-bottom: 1px/44 solid #b3b5b2;
  }
}
  .list-enter {

  }
  .list-leave-to {
    transform: translateY(100%);
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 300ms linear;
  }
  .list-move {
    position: absolute;
    width: 100%;
  }
</style>
