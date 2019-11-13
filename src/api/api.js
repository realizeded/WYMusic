import axios from 'axios';
export default function(method,url) {
  return function(data) {
    let promise = null;
    if(method==='get')
    {
     promise = axios.get(url,{params:data});
    } else {
     promise = axios.post(url,data);
    }
    return promise.then(res=>{return res.data});
  };
};
