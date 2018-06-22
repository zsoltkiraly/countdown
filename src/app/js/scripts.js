/*
Countdown - Code by Zsolt Király
v1.0.1 - 2018-04-19
*/

var countdown = function() {

    function update(percent, totaltime, pie) {
        var deg;

        if (percent < (totaltime / 2)) {
            deg = 90 + (360 * percent / totaltime);
            
            pie.style = 'background-image: linear-gradient(' + deg + 'deg, transparent 50%, white 50%), linear-gradient(90deg, white 50%, transparent 50%)';
        } else if (percent >= (totaltime / 2)) {

            deg = -90 + (360 * percent / totaltime);
            pie.style = 'background-image: linear-gradient(' + deg + 'deg, transparent 50%, #61dafb 50%), linear-gradient(90deg, white 50%, transparent 50%';
        }
    }


    function distance(c) {
        var countDownDate = new Date('' + c.date + '');
        var actiualDate = new Date().getTime();

        return distanceMillisecond = countDownDate - actiualDate;
    }

    function timer(cD, c, tES) {

        var days = Math.floor((distance(c) / (1000 * 60 * 60 * 24)));
        var hours = Math.floor((distance(c) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance(c) % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance(c) % (1000 * 60)) / 1000);

        var dayId = cD.querySelector('#day'),
            hourId = cD.querySelector('#hour'),
            minuteId = cD.querySelector('#minute'),
            secondsId = cD.querySelector('#seconds');

        update(days, days, dayId);
        update(hours, 24, hourId);
        update(minutes, 60, minuteId);
        update(seconds, 60, secondsId);

        cD.querySelector('#day .data').innerHTML = '<span class="time">' + days + '</span><span class="time-name"> Days</span>';
        cD.querySelector('#hour .data').innerHTML = '<span class="time">' + hours + '</span><span class="time-name"> Hours</span>';
        cD.querySelector('#minute .data').innerHTML = '<span class="time">' + minutes + '</span><span class="time-name"> Minutes</span>';
        cD.querySelector('#seconds .data').innerHTML = '<span class="time">' + seconds + '</span><span class="time-name"> Seconds</span>';
    
        if(days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
            clearInterval(tES);
            cD.innerHTML = '<div class="finish">' + c.finish + '</div>';
        }
    }

    function app() {

        //Demo content
        var yearPlus = new Date().getFullYear() + 1;

        var config = {
            date: '' + yearPlus + '.01.01 00:00',
            finish: 'Finish'
        };

        var countDown = document.querySelector('section.countdown .countdown-container');

        if(countDown) {
            if(distance(config) > 0) {
                timer(countDown, config);

                var timerEverySecond = setInterval(function() {
                    timer(countDown, config, timerEverySecond);

                }, 1000);
            } else {
                clearInterval(timerEverySecond);
                countDown.innerHTML = '<div class="finish">' + config.finish + '</div>';
            }
        }
    }

    return {
        app: app
    }

}();

window.addEventListener('load', function() {
    countdown.app();
}, false);