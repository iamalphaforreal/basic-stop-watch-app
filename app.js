const seconds = document.getElementById("seconds"); 
const miliseconds = document.getElementById("msiliseconds");
const start = document.getElementById("start"); 
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let sec = 0;
let milisec = 0;
let timeInterval;

const timer = () => {milisec++;



  if (milisec < 9) {
    miliseconds.innerHTML = "0" + milisec;
  }

  if (milisec > 9) {
    miliseconds.innerHTML = milisec;
  }
  if (milisec > 99) {
    sec++;
    seconds.innerHTML = "0" + sec;
    milisec = 0;
    miliseconds.innerHTML = "0" + 0;
  }
  if (sec>9){
    seconds.innerHTML=sec; 
  };
}


start.addEventListener('click',()=>{
  timeInterval = setInterval(timer,10);
})

stop.addEventListener('click',()=>{
  clearInterval(timeInterval);
  


})

reset.addEventListener('click',()=>{
  clearInterval(timeInterval);
  sec=0;
  milisec=0;
  seconds.innerHTML=sec;
  miliseconds.innerHTML=milisec;

  
})