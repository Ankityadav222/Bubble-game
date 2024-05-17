//Concept of Evennt Bubbling
function makeBubble(){
var clutter  = "";


for(var i = 1; i<=105;i++){
    var rn= Math.floor(Math.random()*10);
    clutter+= `<div class="bubble">${rn}</div>`
           
    
}

document.querySelector("#pbtm").innerHTML = clutter;

}

var hitrn = 0
function getNewhit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}


var  timer  = 10;
function runTimer(){
     var timerINT = setInterval(function (){
        if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerINT)
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over<h1>`
        }
    },1000)
}

var score = 0;
function increseScore(){
  score += 10;
  document.querySelector("#sco").textContent = score;
}




document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNUM = (Number((dets.target.textContent)));
    if(clickedNUM === hitrn){
        increseScore();
        makeBubble();
        getNewhit()
    }
})




getNewhit();
runTimer();

makeBubble();