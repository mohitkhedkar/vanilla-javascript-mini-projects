const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

// Function for countdown
function CountDown() {
    var name = document.getElementById('eventname').value;
    Displayname.innerHTML = name;

    var date = document.getElementById('date').value;
    var newYears = date;
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const Totalseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(Totalseconds / 3600 / 24) ;
    const hours = Math.floor(Totalseconds / 3600 ) % 24;
    const mins = Math.floor(Totalseconds / 60 ) % 60;
    const seconds = Math.floor(Totalseconds) % 60;

    //console.log(days,hours,minutes,seconds);
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
 
}
// Function call
CountDown();

setInterval(CountDown, 1000);
