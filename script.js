// ===========================
// GAMING COMMAND CENTER JS
// ===========================

// Animated Counters

let commands = 0;
let guides = 0;
let games = 0;

function animateCounters(){

let counter = setInterval(()=>{

if(document.getElementById("cmdCount")){

if(commands < 150){
commands++;
document.getElementById("cmdCount").innerHTML = commands;
}

if(guides < 80){
guides++;
document.getElementById("guideCount").innerHTML = guides;
}

if(games < 25){
games++;
document.getElementById("gameCount").innerHTML = games;
}

}

if(commands >= 150 &&
guides >= 80 &&
games >= 25){

clearInterval(counter);

}

},20);

}

animateCounters();


// ===========================
// Search System
// ===========================

function searchGames(){

let input =
document.getElementById("search");

if(!input) return;

let filter =
input.value.toLowerCase();

let cards =
document.querySelectorAll(".game-card");

cards.forEach(card=>{

let text =
card.innerText.toLowerCase();

if(text.includes(filter)){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

}


// ===========================
// Minecraft Helper Chatbot
// ===========================

function askMinecraft(){

let question =
document.getElementById("question");

let answer =
document.getElementById("answer");

if(!question || !answer) return;

let q =
question.value.toLowerCase();

if(q.includes("diamond sword")){

answer.innerHTML =
"/give @p diamond_sword 1";

}

else if(q.includes("creative")){

answer.innerHTML =
"/gamemode creative";

}

else if(q.includes("survival")){

answer.innerHTML =
"/gamemode survival";

}

else if(q.includes("day")){

answer.innerHTML =
"/time set day";

}

else if(q.includes("night")){

answer.innerHTML =
"/time set night";

}

else if(q.includes("speed")){

answer.innerHTML =
"/effect give @p speed 99999 5";

}

else{

answer.innerHTML =
"Try: diamond sword, creative, survival, day, night, speed";

}

}


// ===========================
// Welcome Popup
// ===========================

window.onload = function(){

console.log(
"Gaming Command Center Loaded"
);

};


// ===========================
// Neon Button Animation
// ===========================

let buttons =
document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform =
"scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform =
"scale(1)";

});

});


// ===========================
// Scroll Animation
// ===========================

window.addEventListener("scroll",()=>{

let cards =
document.querySelectorAll(".game-card");

cards.forEach(card=>{

let position =
card.getBoundingClientRect().top;

let screen =
window.innerHeight;

if(position < screen - 100){

card.style.opacity = "1";
card.style.transform =
"translateY(0)";

}

});

});


// ===========================
// Initial Card State
// ===========================

document.querySelectorAll(".game-card")
.forEach(card=>{

card.style.opacity = "0";
card.style.transform =
"translateY(40px)";
card.style.transition =
"0.8s";

});
function showMoreCommands(){

let commands =
document.getElementById("moreCommands");

let btn =
document.getElementById("moreBtn");

if(commands.style.display === "none"){

commands.style.display = "grid";
btn.innerHTML = "🔼 Hide Commands";

}else{

commands.style.display = "none";
btn.innerHTML = "📜 Show More Commands";

}

}

function showMoreGTA(){

let gta =
document.getElementById("moreGTA");

let btn =
document.getElementById("gtaBtn");

if(gta.style.display === "block"){

gta.style.display = "none";
btn.innerHTML = "🚗 Show More GTA Guides";

}else{

gta.style.display = "block";
btn.innerHTML = "🔼 Hide GTA Guides";

}

}

function showMoreFortnite(){

let section =
document.getElementById("moreFortnite");

let btn =
document.getElementById("fortniteBtn");

if(section.style.display === "block"){

section.style.display = "none";
btn.innerHTML = "🏹 Show More Fortnite Guides";

}else{

section.style.display = "block";
btn.innerHTML = "🔼 Hide Fortnite Guides";

}

}

// Fortnite Show More Button

function showMoreFortnite() {

const section = document.getElementById("moreFortnite");
const btn = document.getElementById("fortniteBtn");

if (section.style.display === "block") {
    section.style.display = "none";
    btn.innerHTML = "🏹 Show More Fortnite Guides";
} else {
    section.style.display = "block";
    btn.innerHTML = "🔼 Hide Fortnite Guides";
}

}

// COD show more button

function showMoreCOD(){

let section =
document.getElementById("moreCOD");

let btn =
document.getElementById("codBtn");

if(section.style.display === "none" ||
section.style.display === ""){

section.style.display = "block";
btn.innerHTML = "🔼 Hide COD Guides";

}else{

section.style.display = "none";
btn.innerHTML = "🔫 Show More COD Guides";

}

}

//PUBG SHOW MORE BUTTON

function showMorePUBG(){

let section =
document.getElementById("morePUBG");

let btn =
document.getElementById("pubgBtn");

if(section.style.display === "none" ||
section.style.display === ""){

section.style.display = "block";
btn.innerHTML = "🔼 Hide PUBG Guides";

}else{

section.style.display = "none";
btn.innerHTML = "🎯 Show More PUBG Guides";

}

}
