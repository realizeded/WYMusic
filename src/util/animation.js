function animate(el,target) {

  if(el.timeId)
  {
    clearInterval(el.timeId);
    el.timeId = null;
  }
  let currentPosition = el.offsetLeft;
  let step = 10;
  if(target<currentPosition)
  {
    step=-step;
  }
  el.timeId = window.setInterval(function(){
    if(Math.abs(target-currentPosition)<Math.abs(step))
    {
      el.style.left = target + 'px';
      window.clearInterval(el.timeId);
      el.timeId = null;
      return;
    }
    currentPosition +=step;
    el.style.left = currentPosition + 'px';
    },30);
}
export default animate;
