const seconds = document.getElementById("seconds"); //it has a value of "00"
const miliseconds = document.getElementById("msiliseconds"); // it has a value of "00"
const start = document.getElementById("start"); // start is a button
const stop = document.getElementById("stop"); // stop is a button
const reset = document.getElementById("reset"); //reset is a button

let sec = 0;
let milisec = 0;
let timeInterval;

// create a function TIMIER and set conditions

const timer = () => {
  milisec++;

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
  if (sec > 9) {
    seconds.innerHTML = sec;
  }
};

// give life to our buttons 
start.addEventListener("click", () => {
  timeInterval = setInterval(timer,0.5);
});

stop.addEventListener("click", () => {
  clearInterval(timeInterval);
});

reset.addEventListener("click", () => {
  clearInterval(timeInterval);
  sec = "00";
  milisec = "00";
  seconds.innerHTML = sec;
  miliseconds.innerHTML = milisec;
});
