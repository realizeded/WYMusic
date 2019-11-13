<template>
  <div class="tabbar">
    <router-link to="/home" tag="div" class="tabbar-item">
      <span class="item-icon"><i class="l-icon icon-home"></i></span>
      发现音乐
    </router-link>
    <router-link to="/my" tag="div" class="tabbar-item">
      <span class="item-icon"><i class="l-icon icon-my"></i></span>
      我的音乐
    </router-link>
    <router-link to="/friend" tag="div" class="tabbar-item">
      <span class="item-icon"><i class="l-icon icon-friend"></i></span>
      朋友
    </router-link>
    <router-link to="/user" tag="div" class="tabbar-item">
      <span class="item-icon"><i class="l-icon icon-user"></i></span>
      账号
    </router-link>
  </div>
</template>
<script>
export default {
    name:'tabbar'
}
</script>
<style lang="less" scoped>
  .tabbar {
    position: fixed;
    bottom:0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #2f3034;
    display: flex;
    .tabbar-current-item {
      color: rgb(255,255,255,0.7) !important;
    }
    .tabbar-item {

      .item-icon {
        font-size: 24px;
      }
      letter-spacing: 1px;
      color:rgba(255,255,255,0.5);
      font-size: 14px;
      font-weight: 300;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
