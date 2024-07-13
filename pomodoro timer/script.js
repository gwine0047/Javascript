const timerEl = document.getElementById("timer");
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");


let interval;
let timeLeft = 0;

function counterSubmit(event){
    const counterEl = document.getElementById("counter").value;
    event.preventDefault(); // Prevent the form from submitting the traditional way
    timeLeft = counterEl * 60;
    updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);

// set the time in timeleft and make a function that converts it to seconds and minutes and display the conversion. Reduce the timeLeft every one second and do the calculation all over again.

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    timerEl.innerHTML = formattedTime;
}

function startTimer() {
    interval = setInterval(() =>{
        timeLeft--;
        // console.log(timeLeft);
        updateTimer();
        if(timeLeft === 0)
        {
            alert("Time's up");
            clearInterval(interval);
            timeLeft = 10;
        }
    }, 1000);
}
function stopTimer() {
    clearInterval(interval)
}
function resetTimer() {
    clearInterval(interval);
    timeLeft = 10;
    updateTimer();
}