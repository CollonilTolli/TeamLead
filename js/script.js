//const throttle = require("lodash/throttle");
function isWindowSmall() {
    if(window.innerWidth < 1410) return true;
    const blockScrolling = [...document.querySelectorAll(".block-scrolling")].map(item => item.id);
    let blockNumber = 0;
    function scrollTo(event) { // слежу за прокруткой колеса
        if (event.deltaY > 20 || event.keyCode === 40) {                   //если колесо крутится вниз или нажата кнопка вниз
            if (blockNumber !== blockScrolling.length - 1) blockNumber++;
        }
        else if (event.deltaY < -20 || event.keyCode === 38) { // если колесо крутится вверх или нажата кнопка вверх
            if (blockNumber !== 0) blockNumber--;
        }
        const blockCheckpoint = document.getElementById(blockScrolling[blockNumber]);
        blockCheckpoint.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    }
    if (navigator.appVersion.indexOf("Mac")!==-1) {
        document.onwheel = throttle(scrollTo, 300);
    } else {
        document.onwheel = scrollTo;
    }
    document.addEventListener("keyup", function (event) { // обработчик события клавиш
        scrollTo(event);
    });
}



const oneScroll = document.querySelectorAll(".scroll-one")
for (const Scroll of oneScroll){
    Scroll.addEventListener('click', () => {
        document.getElementById("a1").scrollIntoView({
            block: "start",
            behavior: "smooth"
        })
    })
}
const twoScroll = document.querySelectorAll(".scroll-two")
for (const Scroll of twoScroll){
    Scroll.addEventListener('click', () => {
        document.getElementById("a2").scrollIntoView({
            block: "start",
            behavior: "smooth"
        })
    })
}
const threeScroll = document.querySelectorAll(".scroll-three")
for (const Scroll of threeScroll){
    Scroll.addEventListener('click', () => {
        document.getElementById("a3").scrollIntoView({
            block: "start",
            behavior: "smooth"
        })
    })
}
const fourScroll = document.querySelectorAll(".scroll-four")
for (const Scroll of fourScroll){
    Scroll.addEventListener('click', () => {
        document.getElementById("a4").scrollIntoView({
            block: "start",
            behavior: "smooth"
        })
    })
}
const btnScroll = document.querySelectorAll(".scroll-end")
for (const Scroll of btnScroll){
    Scroll.addEventListener('click', () => {
        document.getElementById("a5").scrollIntoView({
            block: "start",
            behavior: "smooth"
        })
    })
}




const comments = document.querySelectorAll('.comment')

for (const comment of comments){
	comment.addEventListener('click', () => {
  	clearActiveClasses()
  	comment.classList.add('active')
  })
}
function	clearActiveClasses() {
	comments.forEach((comment) => {
    comment.classList.remove('active')
  })
}

const composition = document.querySelector('.center-block')

composition.addEventListener("click", () => {
    composition.classList.toggle("active-center")
})


isWindowSmall();



document.querySelector('#burger-button').addEventListener('click', function (e) {
    document.querySelector('#burger-button').classList.toggle("active-burger")
    var hamburger = document.querySelector('#burger-menu')
    hamburger.style.display = hamburger.style.display === 'flex' ? 'none' : 'flex'
  })
  


let time = 1800;
const countDownEl = document.getElementById("countdown");

setInterval(timerCount, 1000);

function timerCount() {
    const minutes = Math.floor(time/60);
    let seconds = time%60;
    seconds = seconds < 10 ? "0" + seconds:seconds;
    countDownEl.innerHTML=`${minutes}:${seconds}`;
    time--;
}


function validate(evt) {
    let theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    let regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }