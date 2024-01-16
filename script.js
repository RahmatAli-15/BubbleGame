var timer=30;
var score=0;
var hitrn=0;


function increaseScore(){
  score+=10;
  document.querySelector("#scoreVal").textContent=score;
}

function newHit(){
  hitrn=Math.floor(Math.random()*10);
  document.querySelector("#hitVal").textContent=hitrn;
}

function makeBubble(){
  var clutter=" ";

for(var i=1;i<=102;i++){
  var rn=Math.floor(Math.random()*10);
  clutter+=`<div class="bubble">${rn}</div>`

}
document.querySelector(".pbtm").innerHTML=clutter;

}
function runTimer (){
  var timerint=setInterval(function (){
  
  if(timer>0){
    timer--;
    document.querySelector("#timerValue").textContent=timer;
    }else{
      clearInterval(timerint);
      document.querySelector(".pbtm").innerHTML=`<h1>Game Over<h1/>`;    }
  },1000);
}
  
document.querySelector(".pbtm").addEventListener("click",function(dets){
  var clickNum=Number(dets.target.textContent);
  if(clickNum===hitrn){
    increaseScore();
    makeBubble();
    newHit();

  }
})
  
makeBubble();
runTimer ();
newHit();