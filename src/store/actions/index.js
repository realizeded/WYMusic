import {
  CHANGE_MUSIC,
  SAVE_MUSIC,
  LOAD_MUSIC
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
  }
}
