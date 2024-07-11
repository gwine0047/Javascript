const timerEl = document.querySelector("timer");
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);

let interval;
let timeLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60)
}

function startTimer() {
    interval = setInterval(() =>{
        
    }, 1000)s
}
function stopTimer() {
    console.log("I've been stopped");
}
function resetTimer() {
    console.log("I've been resetted");
}