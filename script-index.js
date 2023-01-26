const nav = document.querySelector("nav");
const locationIcon = document.querySelector(".locationIcon");
const envelopeIcon = document.querySelector(".envelopeIcon");
// var body = document.body;
var sticky = nav.offsetTop;

console.log(envelopeIcon.innerHTML);

function appendClass() {
  //   console.log(sticky);
  if (window.scrollY >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

// function appendTipTool() {
//   document.querySelector(".tooltip-inner").innerHTML =
//         "28 Jackson Street, Chicago, 7788569 USA";
//     document.querySelector(".tooltip-inner").style.display = "block";
//   locationIcon.classList.add("tooltip-inner");
// }
