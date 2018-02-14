'use strict';

let Slide = {
    data: [
        {
            quoteArr: ["dont't you", "think that", "if i were", "wrong,", "i'd know it?"],
            imgURL: 'http://p3zihuryc.bkt.clouddn.com/007/d007-slide1.jpg',
            likeNum: 233,
            name: 'SHELDON COOPER'
        },
        {
            quoteArr: ["find what", "you love", "and let it", "kill you."],
            imgURL: 'http://p3zihuryc.bkt.clouddn.com/007/d007-slide2.jpg',
            likeNum: 450,
            name: 'CHARLES BUKOWSKI'
        },
        {
            quoteArr: ["stay", "hungry.", "stay", "foolish."],
            imgURL: 'http://p3zihuryc.bkt.clouddn.com/007/d007-slide3.jpg',
            likeNum: 130,
            name: 'STEVE JOBS'
        }
    ],
    index: 0,
    el: {
        currQuoteEl: document.querySelector('#js-curr-quote'),
        nextQuoteEl: document.querySelector('#js-next-quote'),
        currImg: document.querySelector('#js-currImg'),
        nextImg: document.querySelector('#js-nextImg'),
        currLikeNum: document.querySelector('#js-currLikeNum'),
        nextLikeNum: document.querySelector('#js-nextLikeNum'),
        currName: document.querySelector('#js-currName'),
        nextName: document.querySelector('#js-nextName'),
        quotemask: document.querySelector('#js-quotemask'),
        prevBtn: document.querySelector('#js-prevBtn'),
        nextBtn: document.querySelector('#js-nextBtn'),
    },
    toggleTimeoutId: null,
    init() {
        Slide.__loadImg();
        Slide.__listenToggle();
    },
    __getQuoteFragment(quoteArr) {
        let fragment = new DocumentFragment();
        for (let item of quoteArr) {
            let span = document.createElement('span');
            span.className = 'text';
            span.textContent = item;
            fragment.appendChild(span);
        }
        return fragment;
    },
    nextSlide() {
        if (Slide.toggleTimeoutId !== null)
            return;

        Slide.index = (Slide.index + 1) % (Slide.data.length);
        Slide.__animate();
    },
    prevSlide() {
        if (Slide.toggleTimeoutId !== null)
            return;

        Slide.index = Slide.index - 1 < 0 ? Slide.data.length - 1 : Slide.index - 1;
        Slide.__animate();
    },
    __animate() {
        // 名言
        {
            let nextQuoteFragment = Slide.__getQuoteFragment(Slide.data[Slide.index].quoteArr);
            Slide.el.nextQuoteEl.appendChild(nextQuoteFragment);

            Slide.el.currQuoteEl.classList.add('fadeout');
            Slide.el.nextQuoteEl.classList.add('slidein');
        }
        // 人物图片
        {
            let nextImgURL = Slide.data[Slide.index].imgURL;
            Slide.el.nextImg.src = nextImgURL;

            Slide.el.currImg.classList.add('fadeout');
            Slide.el.nextImg.classList.add('fadein');
        }
        // ❤数目
        {
            let nextLikeNum = Slide.data[Slide.index].likeNum;
            Slide.el.nextLikeNum.textContent = nextLikeNum;

            Slide.el.currLikeNum.classList.add('fadeout');
            Slide.el.nextLikeNum.classList.add('fadein');
        }
        // 名字
        {
            let nextName = Slide.data[Slide.index].name;
            Slide.el.nextName.textContent = '-' + nextName;

            Slide.el.currName.classList.add('fadeout');
            Slide.el.nextName.classList.add('fadein');
        }
        // 遮罩明暗
        {
            Slide.el.quotemask.classList.add('toggleMask');
        }
        Slide.toggleTimeoutId = setTimeout(function () {
            // 名言
            {
                Slide.el.currQuoteEl.innerHTML = Slide.el.nextQuoteEl.innerHTML;
                Slide.el.nextQuoteEl.innerHTML = '';

                Slide.el.currQuoteEl.classList.remove('fadeout');
                Slide.el.nextQuoteEl.classList.remove('slidein');
            }
            // 人物图片
            {
                Slide.el.currImg.src = Slide.el.nextImg.src;

                Slide.el.currImg.classList.remove('fadeout');
                Slide.el.nextImg.classList.remove('fadein');
            }
            // ❤数目
            {
                Slide.el.currLikeNum.textContent = Slide.el.nextLikeNum.textContent;

                Slide.el.currLikeNum.classList.remove('fadeout');
                Slide.el.nextLikeNum.classList.remove('fadein');
            }
            // 名字
            {
                Slide.el.currName.textContent = Slide.el.nextName.textContent;

                Slide.el.currName.classList.remove('fadeout');
                Slide.el.nextName.classList.remove('fadein');
            }
            {
                Slide.el.quotemask.classList.remove('toggleMask');
            }
            Slide.toggleTimeoutId = null;
        }, 500);
    },
    __listenToggle() {
        Slide.el.nextBtn.addEventListener('click', Slide.nextSlide);
        Slide.el.prevBtn.addEventListener('click', Slide.prevSlide);
    },
    __loadImg() {
        for (let item of Slide.data) {
            let img = new Image();
            img.src = item.imgURL;
        }
    }
}

Slide.init();