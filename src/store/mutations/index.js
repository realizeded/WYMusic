import {
  CHANGE_MUSIC,
  LOAD_MUSIC,
  SAVE_MUSIC
} from '../mutations-types.js';
export default {
[CHANGE_MUSIC](state,payLoad){
  let result = state.musicList.findIndex(item=>{
    if(item.name===payLoad.name)
    {
      return true;
    }
  });
  console.log(result)
  if(result!==-1)
  {
    state.musicList.splice(result,1);
  }
  state.musicList.unshift(payLoad);
},
[LOAD_MUSIC](state) {
  let arr = JSON.parse(sessionStorage.getItem('music')||'[]');
  state.musicList = arr;
},
[SAVE_MUSIC](state) {
  sessionStorage.setItem('music',JSON.stringify(state.musicList));
}
}
