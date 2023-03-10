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
var cards = document.getElementsByClassName("section1");


function appendClass() {
  if (window.scrollY >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}


function move() {
  var a = document.createElement("a");
  a.href = "##";
  a.innerText = sessionStorage.getItem("section");
  goTo(a);
}


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

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseenter", (e) => {
    document.querySelector(`#${cards[i].id} .socialMedia`).style.visibility =
      "visible";
    document.querySelector(`#${cards[i].id} .socialMedia`).style.opacity = "1";
  });
}

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseleave", (e) => {
    document.querySelector(`#${cards[i].id} .socialMedia`).style.visibility =
      "hidden";
    document.querySelector(`#${cards[i].id} .socialMedia`).style.opacity = "0";
  });
}

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
