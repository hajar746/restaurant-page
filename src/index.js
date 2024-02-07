// BY HAJAR

import { loadPage } from "./loadPage";
import "./style.css";
import { donutPage } from "./donuts";
import { addDonutTitle, removeDonutTile } from "./donuts";
import { aboutPage, removeAboutTitle } from "./about";

const div = document.querySelector("#content");
const navbar = document.querySelector("nav");
const btnHome = document.querySelector(".home");
const btnDonuts = document.querySelector(".donuts");
const btnAbout = document.querySelector(".about");
const btnShop = document.querySelector(".shop");
navbar.classList.add("nav");

// HOME PAGE
function addElements() {
  const headline = document.createElement("h1");
  headline.textContent = "Donut Dreamz";
  headline.classList.add("content");
  div.appendChild(headline);

  const text = document.createElement("p");
  text.textContent =
    "The most delicious donuts in every flavor you can imagine.";
  text.classList.add("content");
  div.appendChild(text);

  const btnShop = document.createElement("btn");
  btnShop.classList.add("shop");
  btnShop.textContent = "Shop now";
  div.appendChild(btnShop);

  const donutImg = document.createElement("img");
  donutImg.src = "/src/donut.jpg";
}

loadPage(addElements);

// HOME PAGE
btnHome.addEventListener("click", function () {
  removeDonutTile();
  removeAboutTitle();
  div.innerHTML = "";
  div.classList.remove("menu");
  div.classList.remove("about-div");
  div.setAttribute("id", "content");
  addElements();
});

// DONUT PAGE
function loadDonutPage() {
  removeAboutTitle();
  div.innerHTML = "";
  div.removeAttribute("id");
  div.classList.add("menu");
  addDonutTitle(navbar);
  donutPage(div);
}

btnDonuts.addEventListener("click", function () {
  // removeAboutTitle();
  // div.innerHTML = "";
  // div.removeAttribute("id");
  // div.classList.add("menu");
  // addDonutTitle(navbar);
  // donutPage(div);
  loadDonutPage();
});

// ABOUT PAGE
btnAbout.addEventListener("click", function () {
  removeDonutTile();
  div.innerHTML = "";
  div.removeAttribute("id");
  div.classList.remove("menu");
  div.classList.add("about-div");
  aboutPage(div, navbar);
});

// LOAD DONUT PAGE WHEN SHOP NOW BTN IS CLICKED
document.addEventListener("click", function (e) {
  const target = e.target.closest(".shop");
  if (target) {
    loadDonutPage();
  }
});
