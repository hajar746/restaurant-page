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
    </div>
    `
    );
  };

  const chocolate = new Flavors("/src/chocolate.jpg", "Chocolate");
  chocolate.addToMenu();
  const lemon = new Flavors("/src/lemon.jpg", "Lemon");
  lemon.addToMenu();
  const confetti = new Flavors("/src/confetti.jpg", "Confetti");
  confetti.addToMenu();
  const glazed = new Flavors("/src/glazed.jpg", "Glazed");
  glazed.addToMenu();
  const jelly = new Flavors("/src/jelly.jpg", "Jelly-filled");
  jelly.addToMenu();
  const caramel = new Flavors("/src/caramel.jpg", "Caramel");
  caramel.addToMenu();
  const pastel = new Flavors("/src/pastel.jpg", "Pastel");
  pastel.addToMenu();
}

export const pageTitle = document.createElement("h1");

export function addDonutTitle(nav) {
  pageTitle.textContent = "Flavors";
  pageTitle.classList.add("donut-title");
  pageTitle.style.display = "block";
  nav.parentNode.insertBefore(pageTitle, nav.nextSibling);
}

export function removeDonutTile() {
  pageTitle.style.display = "none";
}