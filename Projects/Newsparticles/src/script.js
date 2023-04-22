// STICKY HEADER //
window.onscroll = myFunction()

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//DROPDOWN//

function myDropfunction() {
    document.querySelector(".dropdown-menu").classList.add("visible");
}

function myDropupfunction() {
    document.querySelector(".dropdown-menu").classList.remove("visible");
}

//var dropdown = document.querySelector(".dropdown-menu");
//var button = document.querySelector(".dropdown-button");
//
//
//button.addEventListener("click", () => {
//  dropdown.classList.add("visible");
//});
