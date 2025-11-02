// For Noedlager //
document
  .querySelector("#Noedlager")
  .addEventListener("mouseover", mouseOverNoedlager);

document
  .querySelector("#Noedlager")
  .addEventListener("mouseout", mouseOutNoedlager);

document.querySelector("#Noedlager").addEventListener("click", clickNoedlager);

function mouseOverNoedlager() {
  console.log("mouseOverNoedlager");

  document.querySelector("#Noedlager").style.fill = "var(--primary-bg-color)";
}

function mouseOutNoedlager() {
  console.log("mouseOutNoedlager");

  document.querySelector("#Noedlager").style.fill = "pink";
}

function clickNoedlager() {
  console.log("clickNoedlager");

  document.querySelector(".info-text > h2").textContent = "Nødlager";

  document.querySelector(".placeholder").textContent =
    "husk at du får brug for et nødlager....";

  document.querySelector("#efficiency").innerHTML = `<h3>Oliver</h3> 
<p>bla bla lba </p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Oliver</h3> 
<p>Nu er det altså snart weekend </p>`;
}

// For Airtag //

document
  .querySelector("#Airtag")
  .addEventListener("mouseover", mouseOverAirtag);

document.querySelector("#Airtag").addEventListener("mouseout", mouseOutAirtag);

document.querySelector("#Airtag").addEventListener("click", clickAirtag);

function mouseOverAirtag() {
  console.log("mouseOverAirtag");

  document.querySelector("#Airtag").style.fill = "var(--primary-bg-color)";
}

function mouseOutAirtag() {
  console.log("mouseOutAirtag");

  document.querySelector("#Airtag").style.fill = "pink";
}

function clickAirtag() {
  console.log("clickAirtag");

  document.querySelector(".info-text > h2").textContent = "Airtag";

  document.querySelector(".placeholder").textContent =
    "husk at du får brug for et Airtag....";

  document.querySelector("#efficiency").innerHTML = `<h3>Oliver</h3> 
<p>bla bla lba </p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Oliver</h3> 
<p>Nu er det altså snart weekend </p>`;
}

// For reb //

document.querySelector("#Reb").addEventListener("mouseover", mouseOverReb);

document.querySelector("#Reb").addEventListener("mouseout", mouseOutReb);

document.querySelector("#Reb").addEventListener("click", clickReb);

function mouseOverReb() {
  console.log("mouseOverReb");

  document.querySelector("#Reb").style.fill = "var(--primary-bg-color)";
}

function mouseOutReb() {
  console.log("mouseOutReb");

  document.querySelector("#Reb").style.fill = "pink";
}

function clickReb() {
  console.log("clickReb");

  document.querySelector(".info-text > h2").textContent = "Reb";

  document.querySelector(".placeholder").textContent =
    "husk at du får brug for et Reb....";

  document.querySelector("#efficiency").innerHTML = `<h3>Oliver</h3> 
<p>bla bla lba </p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Oliver</h3> 
<p>Nu er det altså snart weekend </p>`;
}
