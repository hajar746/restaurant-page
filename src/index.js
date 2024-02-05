import { loadPage } from "./loadPage";
import "./style.css";

const div = document.querySelector("#content");

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
