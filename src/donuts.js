export function donutPage(div) {
  const allFlavors = [];
  const menu = document.createElement("div");

  //   FLAVOR CONSTRUCTOR
  function Flavors(image, flavor) {
    this.image = image;
    this.flavor = flavor;
  }
  //   METHOD TO ADD FLAVOR CARD TO MENU
  Flavors.prototype.addToMenu = function () {
    allFlavors.push(this);
    menu.insertAdjacentHTML(
      "beforeend",
      `
    <div class="card">
      <img src="${this.image}">
      <h2>${this.flavor}</h2>
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
  const caramel = new Flavors("/src/caramel.jpg");
  caramel.addToMenu();
  const pastel = new Flavors("/src/pastel.jpg");
  pastel.addToMenu();

  //   ADD MENU TO DIV
  div.appendChild(menu);
}
