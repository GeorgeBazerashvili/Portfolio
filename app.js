const hamburger = document.querySelector(".hamburger");
const nav = document.getElementById("nav");
const ul = document.getElementById("ul");
const company = document.querySelector(".company");
const li = document.querySelectorAll("nav ul li");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("visible");
  ul.classList.toggle("visibleornot");
  company.classList.toggle("appeardissapear");
  li.classList.toggle("background");
  hamburger.classList.toggle("appeardissapear");
});
