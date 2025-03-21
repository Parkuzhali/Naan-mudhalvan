// window.onload = function () {
//     var obj = document.getElementById("container");
//     var arrow2 = document.getElementById("a2");
// var arrow1=document.getElementById("a1")
//     arrow2.addEventListener("click", function () {
//           obj.style.backgroundImage="url(pictures/bg.jpeg)"
//     })
//      arrow1.addEventListener("click", function () {
//        obj.style.backgroundImage = "url(pictures/bg.jpeg)";
//      });
    
// }

var con = document.getElementById("container");
var images = document.getElementsByClassName("image")
let img = [
  "pictures/2.jpg",
  "pictures/bg.jpeg",
  "pictures/bg1.jpeg",
  "pictures/bg5.jpeg",
  "pictures/bg6.jpeg",
  "pictures/bg4.jpeg",
];
let i = 0;
con.style.backgroundImage=`url("${img[i]}");`
function nextimage() {
  // images[i].classList.remove("active");
  i++;
  if (i == img.length) {
    i = 0;
  }
  // images[i].classList.add("active");
  con.style.backgroundImage = `url("${img[i]}")`
}
function preimage() {
  // images[i].classList.remove("active");
  i--;
  if (i < 0) {
    i = img.length - 1;
  }
  // images[i].classList.add("active");
  con.style.backgroundImage = `url("${img[i]}")`;
}
