let str = '120.240';
(function(){
  let proto = String.prototype;
  proto.format = function(){
    let str = this;
    let num = parseFloat(str);
    let minute = parseInt(num /60);
    let second = (num - minute*60).toFixed(2)*100;

  return `0${minute}:${second}`;
  }
})();
str.format();
