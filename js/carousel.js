var cont = document.getElementsByClassName('popularProducts-cont')[0];
var ul = document.getElementsByClassName('popularProducts-cont-ul')[0];
var ulul = document.getElementsByClassName('popularProducts-cont-ulul')[0];

var productsUrl = [
    './images/carousel/1.jpg',
    './images/carousel/2.jpg',
    './images/carousel/3.jpg',
    './images/carousel/4.jpg',
    './images/carousel/5.jpg',
    './images/carousel/6.jpg',
]

var frag = document.createDocumentFragment();
var fragfrag = document.createDocumentFragment();

for (let i = 0; i < productsUrl.length; i++) {
    let li = document.createElement('li');
    li.className = "popularProducts-cont-li";
    let img = document.createElement('img');
    img.className = "popularProducts-cont-img";
    img.alt = "圖片加載失敗";
    img.src = productsUrl[i];
    li.appendChild(img);
    frag.appendChild(li);
}

for (let i = 0; i < productsUrl.length; i++) {
    let li = document.createElement('li');
    li.className = "popularProducts-cont-li";
    let img = document.createElement('img');
    img.className = "popularProducts-cont-img";
    img.alt = "圖片加載失敗";
    img.src = productsUrl[i];
    li.appendChild(img);
    fragfrag.appendChild(li);
}
ul.appendChild(frag);
ulul.appendChild(fragfrag);

var ss = ulul.offsetLeft;

function move() {
    ul.style.left = (ul.offsetLeft - 1) + "px";
    ulul.style.left = (ulul.offsetLeft - 1) - ss + "px";
    if (ul.offsetLeft <= -ss) {
        ul.style.left = ss + "px";
    }
    if (ulul.offsetLeft <= -ss) {
        ulul.style.left = 0 + "px";
    }
}
var time;

function set() {
    time = setInterval(e => {
        move();
    }, 20)
}
set(); //开启循环
// //鼠标移入暂停
// cont.onmouseenter = function() {
//     clearInterval(time);
// }

// //鼠标移出开启
// cont.onmouseleave = function() {
//     set();
// }

// var cont2 = document.getElementsByClassName('popularProducts-cont2')[0];
// var ul2 = document.getElementsByClassName('popularProducts-cont-ul2')[0];
// var ulul2 = document.getElementsByClassName('popularProducts-cont-ulul2')[0];

// // var productsUrl = [
// //     './images/carousel/1.jpg',
// //     './images/carousel/2.jpg',
// //     './images/carousel/3.jpg',
// //     './images/carousel/4.jpg',
// //     './images/carousel/5.jpg',
// //     './images/carousel/6.jpg',
// // ]

// var frag2 = document.createDocumentFragment();
// var fragfrag2 = document.createDocumentFragment();

// for (let i = 0; i < productsUrl.length; i++) {
//     let li = document.createElement('li');
//     li.className = "popularProducts-cont-li2";
//     let img = document.createElement('img');
//     img.className = "popularProducts-cont-img2";
//     img.alt = "圖片加載失敗";
//     img.src = productsUrl[i];
//     li.appendChild(img);
//     frag2.appendChild(li);
// }

// for (let i = 0; i < productsUrl.length; i++) {
//     let li = document.createElement('li');
//     li.className = "popularProducts-cont-li2";
//     let img = document.createElement('img');
//     img.className = "popularProducts-cont-img2";
//     img.alt = "圖片加載失敗";
//     img.src = productsUrl[i];
//     li.appendChild(img);
//     fragfrag2.appendChild(li);
// }
// ul2.appendChild(frag2);
// ulul2.appendChild(fragfrag2);

// var ss2 = ulul2.offsetLeft;

// function move2() {
//     ul2.style.left = (ul2.offsetLeft - 1) + "px";
//     ulul2.style.left = (ulul2.offsetLeft - 1) - ss2 + "px";
//     if (ul2.offsetLeft <= -ss2) {
//         ul2.style.left = ss2 + "px";
//     }
//     if (ulul2.offsetLeft <= -ss) {
//         ulul2.style.left = 0 + "px";
//     }
// }

// var time2;

// function set2() {
//     time2 = setInterval(e => {
//         move2();
//     }, 10)
// }
// // set2();

// function start() {
//     console.log(document.documentElement.clientWidth)
//     if (document.documentElement.clientWidth <= 500) {
//         set2();
//         clearInterval(time)
//         console.log(2)
//     } else {
//         set();
//         clearInterval(time2)
//         console.log(2)
//     }
// }
// window.onresize = start;
// start();