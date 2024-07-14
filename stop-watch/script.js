const timerEl = document.getElementById('timer');
const startButtonEl = document.getElementById('start');
const stopButtonEl = document.getElementById('stop');
const resetButtonEl = document.getElementById('reset');


let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer()
{
    //We are using the internet timer here(measured in seconds i think). The timer gors from the
    // time we start(when the start button - time elapsed(time on counter))  1720683257302 - 0.
    // the timeelasped is updated every 10 milliseconds
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(()=>{
        elapsedTime = Date.now() - startTime;
        timerEl.textContent = formatTime(elapsedTime);
    }, 10)
    // console.log("Date time :"+ Date.now())
    startButtonEl.disabled = true;
    stopButtonEl.disabled = false;
}


function formatTime(elapsedTime)
{
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    // return seconds if seconds is greater than 9, return seconds else add a zero to it, else return 00
    return (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" +(milliseconds > 9 ? milliseconds : "0" + milliseconds);
}
function stopTimer()
{
    clearInterval(timerInterval);
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}
function resetTimer()
{
    clearInterval(timerInterval);

    elapsedTime = 0;
    timerEl.textContent = "00:00:00";
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}
startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);