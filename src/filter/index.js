import Vue from 'vue';
Vue.filter('peopolcount',function(msg){
  let num = parseInt(msg)/10000;
  return num.toFixed(2) + '万';
});
//把秒转换成 分:秒毫秒  60=>1.00
Vue.filter('durationFormat',function(msg){
  let str = msg;
  let num = parseFloat(str);
  let minute = parseInt(num /60);
  let second = parseInt((num - minute*60));

  return `0${minute}:${(second+"").padStart(2,"0")}`;
});
