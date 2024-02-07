import { loadPage } from "./loadPage";
import "./style.css";
import { donutPage } from "./donuts";
import { addDonutTitle, removeDonutTile } from "./donuts";

const div = document.querySelector("#content");
const navbar = document.querySelector("nav");
navbar.classList.add("nav");
const btnHome = document.querySelector(".home");
const btnDonuts = document.querySelector(".donuts");
const btnAbout = document.querySelector(".about");

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

  const donutImg = document.createElement("img");
  donutImg.src = "/src/donut.jpg";
}

loadPage(addElements);

// HOME PAGE
btnHome.addEventListener("click", function () {
  removeDonutTile();
  div.innerHTML = "";
  div.classList.remove("menu");
  div.setAttribute("id", "content");
  addElements();
});

// DONUT PAGE
btnDonuts.addEventListener("click", function () {
  div.innerHTML = "";
  div.removeAttribute("id");
  div.classList.add("menu");
  addDonutTitle(navbar);
  donutPage(div);
});
