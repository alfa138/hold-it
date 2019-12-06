'use strict';

let red = document.getElementById('red');
let blue = document.getElementById('blue');
let green = document.getElementById('green');
let yellow = document.getElementById('yellow');
let color = document.getElementById('color');
let pink = document.getElementById('pink');
let black = document.getElementById('black');
let sub = document.getElementById('sub');

// old ******************************

let start, end, interval, intervalCounter = 0;

red.addEventListener('mousedown', e => {
    start = new Date();
    console.log('mousedown', start);

    interval = setInterval(() => {
        intervalCounter++;
        if (intervalCounter >= 1) {
            console.log('>= 2');
            sub.classList.remove('none');
            clearInterval(interval);
        }

    }, 1000);
});

red.addEventListener('mouseup', e => {
    end = new Date();
    console.log('mouseUp', end);
    clearInterval(interval);

    const dif = start.getTime() - end.getTime();

    const Seconds_from_T1_to_T2 = dif / 1000;
    const Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
    console.log(Seconds_Between_Dates);

    if (Seconds_Between_Dates < 1) {
        color.style.backgroundColor = 'red';
    }

});


// new *****************************

let inVal, counter = 0;

// red.addEventListener('mousedown', () => {
//     inVal = setInterval(() => {
//         counter++;
//         if (counter >= 2) {
//             console.log('counter > 2');
//         }
//     }, 1000);
//
// });


blue.addEventListener('click', e => {
    color.style.backgroundColor = 'blue';
    sub.classList.add('none');
});

green.addEventListener('click', e => {
    color.style.backgroundColor = 'green';
    sub.classList.add('none');
});

yellow.addEventListener('click', e => {
    color.style.backgroundColor = 'yellow';
    sub.classList.add('none');
});

pink.addEventListener('click', e => {
    color.style.backgroundColor = 'pink';
    sub.classList.add('none');
});

black.addEventListener('click', e => {
    color.style.backgroundColor = 'black';
    sub.classList.add('none');
});
