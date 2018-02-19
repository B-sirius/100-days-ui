'use script';
//===============辅助================
let createEl = function (tagname, className = '') {
    let el = document.createElement(tagname);
    el.className = className;

    return el;
};

//==============变量==============
let hourContainer = document.querySelector('#js-hours');
let hourBtns = hourContainer.getElementsByClassName('js-hour-btn');

let minuteContainer = document.querySelector('#js-minute');
let minuteBtns = minuteContainer.getElementsByClassName('js-minute-btn');

//=================main=================
let initHours = function () {
    let fragment = new DocumentFragment();
    for (let hour = 1; hour <= 12; hour++) {
        let rotation = (hour % 12) * 30;

        let li = createEl('li', 'hour-btn js-hour-btn');
        let a = createEl('a');
        a.setAttribute('href', 'javascript:');
        a.textContent = hour;

        li.style.transform = `rotate(${rotation}deg) translateY(-300px)`;
        a.style.transform = `rotate(${-rotation}deg)`;
        fragment.appendChild(li);
        li.appendChild(a);
    }
    hourContainer.appendChild(fragment);
};

let initMinutes = function () {
    let fragment = new DocumentFragment();
    for (let minute = 0; minute < 60; minute += 5) {
        let rotation = (minute / 5 % 12) * 30;

        let li = createEl('li', 'minute-btn js-minute-btn');
        let a = createEl('a');
        a.setAttribute('href', 'javascript:');
        a.textContent = minute;

        li.style.transform = `rotate(${rotation}deg) translateY(-200px)`;
        a.style.transform = `rotate(${-rotation}deg)`;

        fragment.appendChild(li);
        li.appendChild(a);
    }
    minuteContainer.appendChild(fragment);
};

initHours();
initMinutes();