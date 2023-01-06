"use strict";

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const footerYr = document.querySelector(".footer_year");
const now = new Date().getFullYear();
footerYr.textContent = `©️ ${now} Nagarjun`;
console.log();
