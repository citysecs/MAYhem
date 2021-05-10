//Copied from https://www.developerdrive.com/build-countdown-timer-pure-javascript/ :)

var endDate = new Date("May 15, 2021 14:00:00 UTC").getTime()
var timer = setInterval(function () {

    let now = new Date().getTime();
    let t = endDate - now;

    if (t >= 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);

        document.getElementById("timer-days").innerHTML = days;
        document.getElementById("timer-hours").innerHTML = ("0" + hours).slice(-2);
        document.getElementById("timer-mins").innerHTML = ("0" + mins).slice(-2)
        document.getElementById("timer-secs").innerHTML = ("0" + secs).slice(-2);
    }
    else {
        document.getElementById("timer").innerHTML = "";
    }

}, 1000);