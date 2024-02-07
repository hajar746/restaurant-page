const aboutTitle = document.createElement("h2");
export function aboutPage(div, nav) {
  aboutTitle.textContent = "About";
  aboutTitle.classList.add("about-title");

  const aboutText1 = document.createElement("p");
  const aboutText2 = document.createElement("p");
  const aboutText3 = document.createElement("p");

  aboutText1.textContent = `Welcome to Donut Dreamz - bringing a little sweetness into your day!`;
  aboutText2.textContent = ` We are a family-owned bakery specializing in gourmet donuts made fresh daily. What started 10 years ago as a Saturday morning pop-up shop at our local farmer's market has since flourished into a beloved community bakery and online donut shop
    We experiment with unique flavor combinations and use high quality, locally-sourced ingredients whenever possible. Our ever-changing donut menu features both classic and artisanal flavors from lemon-lavender old fashioned to maple bacon cake donuts. We even offer seasonal specials like pumpkin spice or eggnog donuts!`;
  aboutText3.textContent =
    "We take pride in making everything by hand with care and creativity. We believe sweets not only taste good, but connect people and brighten days. We can’t wait for you take your first bite into one of our donuts!";
  aboutText1.classList.add("about-text");
  aboutText2.classList.add("about-text");
  aboutText3.classList.add("about-text");

  div.append(aboutText1, aboutText2, aboutText3);
  aboutTitle.style.display = "block";
  nav.parentNode.insertBefore(aboutTitle, nav.nextSibling);
}

export function removeAboutTitle() {
  aboutTitle.style.display = "none";
}
