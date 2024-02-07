import Chocolate from "./chocolate.jpg";
import Lemon from "./lemon.jpg";
import Confetti from "./confetti.jpg";
import Glazed from "./glazed.jpg";
import Jelly from "./jelly.jpg";
import Caramel from "./caramel.jpg";
import Pastel from "./pastel.jpg";
import Assorted from "./assorted.jpg";
import Fruit from "./fruit.jpg";
import Sugar from "./Sugar.jpg";
import Coconut from "./coconut.jpg";
import Cinnamon from "./cinnamon.jpg";

export function donutPage(div) {
  const allFlavors = [];
  //   FLAVOR CONSTRUCTOR
  function Flavors(image, flavor) {
    this.image = image;
    this.flavor = flavor;
  }
  //   METHOD TO ADD FLAVOR CARD TO MENU
  Flavors.prototype.addToMenu = function () {
    allFlavors.push(this);
    div.insertAdjacentHTML(
      "beforeend",
      `
    <div class="card">
      <img src="${this.image}" class='donut-imgs'>
      <p>${this.flavor}</p>
      <button class='buy'>Buy now</button>
    </div>
    `
    );
  };

  const chocolate = new Flavors(Chocolate, "Chocolate");
  chocolate.addToMenu();
  const lemon = new Flavors(Lemon, "Lemon");
  lemon.addToMenu();
  const confetti = new Flavors(Confetti, "Confetti");
  confetti.addToMenu();
  const glazed = new Flavors(Glazed, "Glazed");
  glazed.addToMenu();
  const jelly = new Flavors(Jelly, "Jelly-filled");
  jelly.addToMenu();
  const caramel = new Flavors(Caramel, "Caramel");
  caramel.addToMenu();
  const pastel = new Flavors(Pastel, "Pastel");
  pastel.addToMenu();
  const assorted = new Flavors(Assorted, "Assorted");
  assorted.addToMenu();
  const fruit = new Flavors(Fruit, "Fruit");
  fruit.addToMenu();
  const sugar = new Flavors(Sugar, "Sugar");
  sugar.addToMenu();
  const coconut = new Flavors(Coconut, "Coconut");
  coconut.addToMenu();
  const cinnamon = new Flavors(Cinnamon, "Cinnamon");
  cinnamon.addToMenu();
}

const pageTitle = document.createElement("h1");

export function addDonutTitle(nav) {
  pageTitle.textContent = "Flavors";
  pageTitle.classList.add("donut-title");
  pageTitle.style.display = "block";
  nav.parentNode.insertBefore(pageTitle, nav.nextSibling);
}

export function removeDonutTile() {
  pageTitle.style.display = "none";
}
