var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    lap = document.getElementById('lap'),
    milliseconds = 0, seconds = 0, minutes = 0, hours = 0,
    t;


function add() {
    milliseconds++;
    if (milliseconds > 100) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (milliseconds ? (milliseconds > 9 ? milliseconds : "0" + milliseconds) : "00");

}

/* Start button */
start.onclick = function timer() {
    t = setInterval(add, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("clear").disabled = true;
}
/* Stop button */
stop.onclick = function () {
    clearInterval(t);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("clear").disabled = false;
}

/* Clear button */
clear.onclick = function () {
    h1.textContent = "00:00:00:00";
    laps.innerHTML = '';
    seconds = 0; minutes = 0; hours = 0; milliseconds = 0;
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("clear").disabled = true;
}
lap.onclick = function(){
    document.getElementById('laps').innerHTML += "<li>" + (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (milliseconds ? (milliseconds > 9 ? milliseconds : "0" + milliseconds) : "00") + "</li>";
}