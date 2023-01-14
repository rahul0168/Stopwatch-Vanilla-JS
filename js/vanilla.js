//variable
let start;
var min = 0;
var sec = 0;
var timer = document.getElementById("timer");

// start time
function startTime() {
  start = setInterval(function () {
    sec++;
    if (sec >= 60) {
      sec = 0;
      min++;
    }
    timer.innerHTML =
      (min ? (min > 9 ? min : "0" + min) : "00") +
      ":" +
      (sec > 9 ? sec : "0" + sec);
  }, 1000);
}

//stop time
function stopTime() {
  clearInterval(start);
}

// reset time
function resetime() {
  clearInterval(start);
  min = 0;
  sec = 0;

  timer.innerHTML =
    (min ? (min > 9 ? min : "0" + min) : "00") +
    ":" +
    (sec > 9 ? sec : "0" + sec);
}