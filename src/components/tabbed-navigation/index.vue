<template>
<div class="tabed">
  <div class="tabed-navigation">
    <div class="item" v-for="item in tabedData" :key="item.path">
      <router-link :to="item.path" tag="span">{{item.label}}</router-link>
    </div>
  </div>
<keep-alive>
  <router-view class="rou"></router-view>
</keep-alive>
</div>
</template>
<script>
  export default {
    props:{
        tabedData:{
            type:Array,
            required:true,
            default:function() {
                return [];
            }
        }
    }
  }
</script>
<style lang="less" scoped>
.tabed {
  .rou {
    margin-top: 4px;
  }
  .tabed-navigation {

    display: flex;
    height: 30px;
    .item {
      span {
        display: block;
        font-size: 14px;
        height: 100%;
        font-weight: 800;
        color: #000;
        letter-spacing: 1px;
      }
      >.tabbar-current-item {
        border-bottom: 1px solid purple;
      }
      flex: 1;
      line-height: 30px;
      padding:0 15px;

      text-align: center;
    }

  }
}
</style>
