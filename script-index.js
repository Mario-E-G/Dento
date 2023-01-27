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
  console.log(sticky);
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