"use strict";

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//FOOTER FUNTIONS
const footerYr = document.querySelector(".footer_year");
const now = new Date().getFullYear();
footerYr.textContent = `©️ ${now} Nagarjun Portfolio v 1.0`;
console.log();
