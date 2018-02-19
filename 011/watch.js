'use script';

let hourEl = document.querySelector('#js-hours');
let hourBtns = hourEl.getElementsByClassName('js-hour-btn');

for (let item of hourBtns) {
    let a = item.querySelector('a');

    let value = a.getAttribute('datavalue');
    let rotation = (value - 1) * 30;

    item.style.transform = `rotate(${rotation}deg) translateY(-300px)`;
    a.style.transform = `rotate(${-rotation}deg)`;
}

let minuteEl = document.querySelector('#js-minute');
let minuteBtns = minuteEl.getElementsByClassName('js-minute-btn');

for (let item of minuteBtns) {
    let a = item.querySelector('a');

    let value = a.getAttribute('datavalue');
    let rotation = (value / 5) * 30;

    item.style.transform = `rotate(${rotation}deg) translateY(-200px)`;
    a.style.transform = `rotate(${-rotation}deg)`;
}
