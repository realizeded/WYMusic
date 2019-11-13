import homePage from '../../pages/homePage/homePage.vue';
import myPage from '../../pages/myPage/index.vue';
import friendPage from '../../pages/friendPage/index.vue';
import userPage from '../../pages/userPages/index.vue';

import  PersonalRecommendation from '../../pages/PersonalRecommendation/index.vue';
import  RankingList from '../../pages/RankingList/index.vue';
import  songSheet from '../../pages/songSheet/index.vue';
import  AnchorStation from '../../pages/AnchorStation/index.vue';
import singList from '../../pages/singListPage/index.vue';
import radioPlayPage from '../../pages/radioPlayPage/radioPlayPage.vue';
export default [
  {path:'/',redirect:'/home'},
  {
    path:'/home',component:homePage,
    children:[
      {path:'/',redirect:'PersonalRecommendation'},
      {path:'PersonalRecommendation',component:PersonalRecommendation},
      {path:'RankingList',component:RankingList},
      {path:'AnchorStation',component:AnchorStation},
      {path:'songSheet',component:songSheet}
      ]
  },
  {path:'/my',component:myPage},
  {path:'/friend',component:friendPage},
  {path:'/user',component:userPage},
  {path:'/singer/:id',component:singList,meta:{
      isShowTabbar:true//底部标签栏是否显示 v-if="!$route.meta.isShowTabbar"
    }},
  {path:'/radio/:id',component:radioPlayPage,meta:{
      isShowTabbar:true
    }
  }
];
