<template>
  <div class="app">
    <router-view></router-view>
    <l-tabbar v-if="!$route.meta.isShowTabbar"></l-tabbar>
  </div>
</template>
<script>
  import lTabbar from './components/tabbar-bottom/index.vue';
  export default {
      name:'App',
      components:{
          lTabbar
      }
  }
</script>
<style lang="less" scoped>
.app {

}
</style>
