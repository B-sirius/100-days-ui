'use script';

let monthEl = document.querySelector('#js-months');

let monthBtns = monthEl.getElementsByClassName('js-month-btn');

for (let item of monthBtns) {
    let value = item.querySelector('a').getAttribute('datavalue');
    let rotation = (value - 1) * 30;

    item.style.transform = `translateY(-300px) rotate(${rotation}deg)`;
}