import Vue from 'vue';
import { Swipe, SwipeItem,Button,Toast} from 'vant';

Vue.use(Swipe).use(SwipeItem);
Vue.use(Button);
Vue.use(Toast);
Vue.prototype.$Toast = Toast;
