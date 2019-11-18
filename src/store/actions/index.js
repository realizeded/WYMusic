import {
  CHANGE_MUSIC,
  SAVE_MUSIC,
  LOAD_MUSIC,
  DEL_MUSIC,
  CHANG_ALL_MUSIC
} from "../mutations-types";

export default {
  changeMusic({commit},payload){
    window.setTimeout(()=>{
      commit(CHANGE_MUSIC,payload);
      commit(SAVE_MUSIC);
    },10);
  },
  load({commit}){
    setTimeout(function(){
      commit(LOAD_MUSIC);
    },10);
  },
  delMusic({commit},index) {
    commit(DEL_MUSIC,index);
    commit(SAVE_MUSIC);
  },
  changAll({commit},arr) {
   window.setTimeout(()=>{
     commit(CHANG_ALL_MUSIC,arr);
     commit(SAVE_MUSIC);
   },10);
  }
}
