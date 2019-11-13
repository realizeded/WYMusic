<template>
  <div class="list">
    <div class="list-main">
      <div class="content">
      <div class="badge">
        <i class="l-icon icon-video-play"></i>
      </div>
       <p class="f-l">播放全部(共{{list.length}}首)</p>
       <span class="f-r"><i class="l-icon icon-list-menu"></i></span>
      </div>
      <div class="content-main content" v-for="(item,index) in list" :key="item.id" @click="saveMusic(item.id,item)">
        <div class="badge">
          {{index}}
        </div>
        <div class="f-l" >
          <h5>{{item.name}}</h5>
          <p>{{item.ar[0].name}}</p>
        </div>
        <span class="f-r"><i class="l-icon icon-list-more"></i></span>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex';
  export default {
    name:'list',
      props:{
        list:{
            type:Array,
            default:function() {
                return [];
            }
        }
      },
      methods:{
        ...mapActions(["changeMusic"]),
        saveMusic(id,item) {
            this.changeMusic(item);
            this.$router.push(`/radio/${id}`);

        }
      }
  }
</script>
<style lang="less" scoped>
.list {
  .list-main {
    height: 44px;

    .content {
      margin-left: 44px;
      height: 44px;
      border-bottom:1px/49 solid pink;
      position: relative;
      line-height: 44px;
      >p {

      }
      >span {
        padding: 0 10px;
      }
      .badge {
        position: absolute;
        left: -44px;
        height: 44px;
        width: 44px;

        text-align: center;

        i {
          font-size: 24px;
        }
      }
    }
    .content-main {
      .badge {
        color: #989898;
        font-size: 16px;
      }
      span.f-r {
        color: #787b8a;
      }
      >div.f-l {
        h5 {
          line-height: 24px;
          font-size: 16px;
          font-weight: 500;
        }
        p {
          line-height: 14px;
          font-size: 10px;
          color: #8c8c8c;
        }

      }
    }
  }
}
</style>
