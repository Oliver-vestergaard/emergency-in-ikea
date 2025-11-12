const noedlager = document.querySelector("#Noedlager");
const Airtag = document.querySelector("#Airtag");
const reb = document.querySelector("#Reb");

const efficiency = document.querySelector("#efficiency");
const requirement = document.querySelector("#requirement");
const placeholder = document.querySelector(".placeholder");
const overskrift = document.querySelector(".info-text > h2");
//* For Noedlager *//

noedlager.addEventListener("mouseover", mouseOverNoedlager);

noedlager.addEventListener("mouseout", mouseOutNoedlager);
noedlager.addEventListener("click", clickNoedlager);

function mouseOverNoedlager() {
  console.log("mouseOverNoedlager");

  noedlager.style.fill = "var(--primary-bg-color)";
}

function mouseOutNoedlager() {
  console.log("mouseOutNoedlager");

  noedlager.style.fill = "pink";
}

function clickNoedlager() {
  console.log("clickNoedlager");

  overskrift.textContent = "Nødlager";

  placeholder.textContent = "husk at du får brug for et nødlager....";

  efficiency.innerHTML = `<h3>Oliver</h3> 
<p>bla bla lba </p>`;
  requirement.innerHTML = `<h3>Oliver</h3> 
<p>Nu er det altså snart weekend </p>`;

  // animation for Noedlager //

  efficiency.classList.add("fadeIn");
  requirement.classList.add("fadeInSlow");
}

// For Airtag //

Airtag.addEventListener("mouseover", mouseOverAirtag);

Airtag.addEventListener("mouseout", mouseOutAirtag);

Airtag.addEventListener("click", clickAirtag);

function mouseOverAirtag() {
  console.log("mouseOverAirtag");

  Airtag.style.fill = "var(--primary-bg-color)";
}

function mouseOutAirtag() {
  console.log("mouseOutAirtag");

  Airtag.style.fill = "pink";
}

function clickAirtag() {
  console.log("clickAirtag");

  overskrift.textContent = "Airtag";

  placeholder.textContent = "husk at du får brug for et Airtag....";

  efficiency.innerHTML = `<h3>Oliver</h3> 
<p>bla bla lba </p>`;
  requirement.innerHTML = `<h3>Oliver</h3> 
<p>Nu er det altså snart weekend </p>`;

  // animation for Airtag //
  efficiency.classList.add("fadeIn");
  requirement.classList.add("fadeInSlow");
}

// For reb //

reb.addEventListener("mouseover", mouseOverReb);

reb.addEventListener("mouseout", mouseOutReb);

reb.addEventListener("click", clickReb);

function mouseOverReb() {
  console.log("mouseOverReb");

  reb.style.fill = "var(--primary-bg-color)";
}

function mouseOutReb() {
  console.log("mouseOutReb");

  reb.style.fill = "pink";
}

function clickReb() {
  console.log("clickReb");

  overskrift.textContent = "Reb";

  placeholder.textContent = "husk at du får brug for et Reb....";

  efficiency.innerHTML = `<h3>Oliver</h3> 
<p>bla bla lba </p>`;
  requirement.innerHTML = `<h3>Oliver</h3> 
<p>Nu er det altså snart weekend </p>`;

  // animation for Reb //

  efficiency.classList.add("fadeIn");
  requirement.classList.add("fadeInSlow");
}
