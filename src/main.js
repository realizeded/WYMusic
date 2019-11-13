import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/store.js';
Vue.productionTip = false;
import './common/less/index.less';
import axios from 'axios';
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://192.168.43.229:3000/';
import './vant.js';
import './filter/index.js';
new Vue({
  render:c=>c(App),
  router,
  store
}).$mount('#app');
