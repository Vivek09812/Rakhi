// LOADER

window.onload = function(){

setTimeout(()=>{

document.getElementById("loader")
.style.display="none";

},3000);

}

// START WEBSITE

function startWebsite(){

document.getElementById("bgMusic")
.play();

changeScreen("countdownScreen");

}

// CHANGE SCREEN

function changeScreen(id){

document.querySelectorAll(".screen")
.forEach(screen=>{

screen.classList.remove("active");

});

document.getElementById(id)
.classList.add("active");

}

// OPEN SECTIONS

function showGallery(){

changeScreen("galleryScreen");

}

function showLetter(){

changeScreen("letterScreen");

}

function showGift(){

changeScreen("giftScreen");

}

function showBirthday(){

changeScreen("birthdayScreen");

}

// SLIDER

let slides =
document.querySelectorAll(".slide");

let dots =
document.querySelectorAll(".dot");

let current = 0;

setInterval(()=>{

slides[current]
.classList.remove("activeSlide");

dots[current]
.classList.remove("activeDot");

current++;

if(current>=slides.length){

current=0;

}

slides[current]
.classList.add("activeSlide");

dots[current]
.classList.add("activeDot");

},3000);

// LETTER

function openLetter(){

document.getElementById("letter")
.classList.remove("hidden");

typeMessage();

}

// TYPE MESSAGE

const message =
`You are the sweetest little sister and the cutest blessing of my life 💖`;

let i = 0;

function typeMessage(){

if(i < message.length){

document.getElementById("typedText")
.innerHTML += message.charAt(i);

i++;

setTimeout(typeMessage,50);

}

}

// GIFT

function openGift(){

document.getElementById("giftMessage")
.classList.remove("hidden");

}

// COUNTDOWN

const countdown =
document.getElementById("countdown");

const birthdayDate =
new Date("September 29, 2026 00:00:00")
.getTime();

setInterval(()=>{

const now = new Date().getTime();

const distance = birthdayDate-now;

const d =
Math.floor(distance/(1000*60*60*24));

const h =
Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const m =
Math.floor((distance%(1000*60*60))/(1000*60));

const s =
Math.floor((distance%(1000*60))/1000);

countdown.innerHTML =
`${d}d ${h}h ${m}m ${s}s`;

if(distance<0){

document.getElementById("lockedBirthday")
.classList.add("hidden");

document.getElementById("birthdayContent")
.classList.remove("hidden");

launchFireworks();

}

},1000);

// CAKE

function cutCake(){

document.getElementById("cake")
.classList.add("cut");

createConfetti();

alert("Cake Cut Successfully 🎂💖");

}

// CANDLE

function blowCandle(){

document.getElementById("candle")
.innerHTML = "💨";

alert("Wish Made Successfully ✨");

}

// FIREWORKS

function launchFireworks(){

document.getElementById("fireworks")
.innerHTML = "🎆 🎇 ✨ 🎆 🎇";

}

// CONFETTI

function createConfetti(){

for(let i=0;i<30;i++){

let confetti =
document.createElement("div");

confetti.innerHTML="🎉";

confetti.style.position="fixed";

confetti.style.left=
Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.fontSize="30px";

confetti.style.animation=
"petals 4s linear forwards";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},4000);

}

}

// TOUCH HEARTS

document.addEventListener("click",function(e){

let heart =
document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.fontSize="25px";

heart.style.pointerEvents="none";

heart.style.animation=
"fade 1s forwards";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1000);

});