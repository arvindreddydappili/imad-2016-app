console.log('Loaded!');
var img = document.getElementById('madi');

var marginLeft=0;

function moveRight (){
  marginLeft = marginLeft+1;
  img.style.marginLeft= marginLeft+'px';
}

img.onclick=function()
{
    var interval=setInterval(moveRight,10);
   
    };

var setd = document.getElementById('date');

setd.onclick=function(){
  for(var i=0;i<=31;i++){
      var d=document.getElementById('dd');
      d.dd=i;
  }  
};