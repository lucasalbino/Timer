var mili = 0;
var seg = 0;
var min = 0;
var timer;

var cronometroEl = document.querySelector(".cronometro")
var lapsContainer = document.querySelector(".laps")

function start(){
    if(!timer){
        timer = setInterval(run, 10);
    }
}

function run() {
    cronometroEl.innerHTML = (min < 10 ? "0" + min : min)  + ":" + (seg < 10 ? "0" + seg : seg) + ":" + (mili < 10 ? "0" + mili : mili);
    mili++;

    if(mili == 100){
        mili = 0;
        seg++;
    }

    if(seg == 60){
        seg = 0;
        min++;
    }
}

function pause() {
    stopTimer();
}

function stop() {
    stopTimer();
    mili = 0;
    seg = 0;
    min = 0;

    cronometroEl.innerHTML = getTime()

}

function stopTimer() {
    clearInterval(timer);
    timer = false
}

function restart() {
    stop();
    start();
}

function lap(){
    if(timer){
        var li = document.createElement('li')

        li.innerText = getTime();
        lapsContainer.appendChild(li);
    }
}

function getTime() {
    return (min < 10 ? "0" + min : min)  + ":" + (seg < 10 ? "0" + seg : seg) + ":" + (mili < 10 ? "0" + mili : mili);
    mili++;
}

function reset() {
    lapsContainer.innerHTML = ""
}