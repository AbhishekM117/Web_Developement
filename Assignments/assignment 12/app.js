let timer = document.getElementById('timer');
let start = document.getElementById('start-btn');
let stop = document.getElementById('stop-btn');
let reset = document.getElementById('reset-btn');

let min = 0,
    sec = 0,
    ms = 0,
    count;

start.addEventListener('click', startTimer);

stop.addEventListener('click', stopTimer);

reset.addEventListener('click', resetTimer);

function startTimer() {
    count = setInterval(function() {
        if (ms == 100) {
            ms = 0;
            if (sec == 60) {
                sec = 0;
                min++;
            } else {
                sec++;
            }
        } else {
            ms++;
        }
        timer.innerHTML = `${min}:${sec}:${ms}`;

    }, 10);
}

function stopTimer() {
    clearInterval(count);
    // timer.innerHTML = `${minute}:${second}:${millisec}`;

}


function resetTimer() {
    clearInterval(count);
    min = 0;
    sec = 0;
    ms = 0;
    timer.innerHTML = `00:00:00`;
}