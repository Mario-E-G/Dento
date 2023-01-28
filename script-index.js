const nav = document.querySelector("nav");
const headerMainSpan = document.querySelector(".headerMainSpan");
const headerToolTipSpan = document.querySelector(".headerMainSpan span");
const headerMainSpanEmail = document.querySelector(".headerMainSpanEmail");
const headerToolTipSpanEmail = document.querySelector(
  ".headerMainSpanEmail span"
);
var sticky = nav.offsetTop;
var navBtn = document.querySelector(".navBtn");
var sideMenu = document.querySelector(".sideMenu");

// const body = document.body;
// console.log(body);

// body.addEventListener("scroll", () => {
//   console.log(sticky);
//   if (window.scrollY >= sticky) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// });

function appendClass() {
  // console.log(sticky);
  if (window.scrollY >= sticky) {
    nav.classList.add("sticky");
    // sideMenu.style.display = "none"
  } else {
    nav.classList.remove("sticky");
  }
}

// navBtn.addEventListener("click", () => {
//   sideMenu.classList.toggle("showContainer");
//   sideMenu.style.transition = "2s";
// });

headerMainSpan.addEventListener("mouseenter", () => {
  headerToolTipSpan.style.display = "block";
});

headerMainSpan.addEventListener("mouseleave", () => {
  headerToolTipSpan.style.display = "none";
});

headerMainSpanEmail.addEventListener("mouseenter", () => {
  headerToolTipSpanEmail.style.display = "block";
});

headerMainSpanEmail.addEventListener("mouseleave", () => {
  headerToolTipSpanEmail.style.display = "none";
});

document.getElementById("card1").addEventListener("mouseover", function () {
  document.querySelector("#SM1").style.visibility = "visible";
  document.querySelector("#SM1").style.opacity = "1";
});

document.getElementById("card2").addEventListener("mouseover", function () {
  document.querySelector("#SM2").style.visibility = "visible";
  document.querySelector("#SM2").style.opacity = "1";
});

document.getElementById("card3").addEventListener("mouseover", function () {
document.querySelector("#SM3").style.visibility = "visible";
document.querySelector("#SM3").style.opacity = "1";
});
document.getElementById("card1").addEventListener("mouseleave", function () {
  document.querySelector("#SM1").style.visibility = "hidden";
  document.querySelector("#SM1").style.opacity = "0";
});

document.getElementById("card2").addEventListener("mouseleave", function () {
  document.querySelector("#SM2").style.visibility = "hidden";
  document.querySelector("#SM2").style.opacity = "0";
});

document.getElementById("card3").addEventListener("mouseleave", function () {
  document.querySelector("#SM3").style.visibility = "hidden";
  document.querySelector("#SM3").style.opacity = "0";
});

var cards = document.getElementsByClassName("section1");




$(document).ready(function () {
  $(".page").click(function () {
    $(".ulInPage").slideToggle(500);
  });

  $(".blog").click(function () {
    $(".ulInBlog").slideToggle(500);
  });
  $(".navBtn").click(function () {
    $(".sideMenu").slideToggle(1000);
  });

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
