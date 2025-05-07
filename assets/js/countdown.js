var seconds_left = 6;
var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = --seconds_left;
    if (seconds_left <= 0)
    {
       document.getElementById('timer_div').innerHTML = "now!";
       clearInterval(interval);
    }
}, 1000);