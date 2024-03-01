let time = document.getElementById('time');
let x;

function Clock() {

const timer = new Date();
let hours = timer.getHours();
let amOrPm = hours;
hours = hours % 12;
const minutes = timer.getMinutes();
const seconds = timer.getSeconds();
amOrPm > 12 ? time.innerHTML = `${hours}:${minutes}:${seconds} PM` : time.innerHTML = `${hours}:${minutes}:${seconds} AM`;

}

Clock();
setInterval(Clock, 1000);


