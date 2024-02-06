import { loadPage } from "./loadPage";
import "./style.css";
import { donutPage } from "./donuts";

const div = document.querySelector("#content");
const navbar = document.querySelector("nav");
const btnHome = document.querySelector(".home");
const btnDonuts = document.querySelector(".donuts");
const btnAbout = document.querySelector(".about");

// HOME PAGE
function addElements() {
  navbar.classList.add("nav");

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
btnHome.addEventListener("click", addElements);
btnDonuts.addEventListener("click", function () {
  div.innerHTML = "";
  donutPage(div);
});
