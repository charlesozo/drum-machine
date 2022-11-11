const togglebutton = document.querySelector(".toggle")
const indicator = document.querySelector(".indicator")
const display = document.getElementById("display")
const drumpad = document.getElementsByClassName("drum-pad")
const  audio1 = document.getElementById("Q");
const  audio2 = document.getElementById("W");
const  audio3 = document.getElementById("E");
const  audio4 = document.getElementById("A");
const  audio5 = document.getElementById("S");
const  audio6 = document.getElementById("D");
const  audio7 = document.getElementById("Z");
const  audio8 = document.getElementById("X");
const audio9 = document.getElementById("C");
togglebutton.addEventListener("click", ToggleMe)
function changeBackground() {
  drumpad[0].style.backgroundColor = "#B33434B5"
  drumpad[1].style.backgroundColor = "#839100"
  drumpad[2].style.backgroundColor = "#913b00"
  drumpad[3].style.backgroundColor = "#91004c"
  drumpad[4].style.backgroundColor = "#350980"
  drumpad[5].style.backgroundColor = "#700b48"
  drumpad[6].style.backgroundColor = "#0f6ce7"
  drumpad[7].style.backgroundColor = "#69e810"
  drumpad[8].style.backgroundColor = "#707300"
}
function ToggleMe() {
  indicator.classList.toggle("active")
  if (!indicator.classList.contains("active")) {
      display.innerHTML = "OFF"
  }
  else {
    display.innerHTML = "ON"
  }
}

function play1() {
  if (indicator.classList.contains("active")) {
    audio1.play()
    display.innerHTML = drumpad[0].id
  }
}
function play2() {
  if (indicator.classList.contains("active")) {
    audio2.play()
    display.innerHTML = drumpad[1].id
  }
}
function play3() {
  if (indicator.classList.contains("active")) {
    audio3.play()
    display.innerHTML = drumpad[2].id
  }
}
function play4() {
  if (indicator.classList.contains("active")) {
    audio4.play()
    display.innerHTML = drumpad[3].id
  }
}
function play5() {
  if (indicator.classList.contains("active")) {
    audio5.play()
    display.innerHTML = drumpad[4].id
  }
}
function play6() {
  if (indicator.classList.contains("active")) {
    audio6.play()
    display.innerHTML = drumpad[5].id
  }
}
function play7() {
  if (indicator.classList.contains("active")) {
    audio7.play()
    display.innerHTML = drumpad[6].id
  }
}
function play8() {
  if (indicator.classList.contains("active")) {
    audio8.play()
    display.innerHTML = drumpad[7].id
  }
  
}
function play9() {
  if (indicator.classList.contains("active")) {
    audio9.play()
    display.innerHTML = drumpad[8].id
  }
}
changeBackground()