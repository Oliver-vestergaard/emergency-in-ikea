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

  noedlager.style.fill = "#de8926";
}

function clickNoedlager() {
  console.log("clickNoedlager");

  overskrift.textContent = "Nødlager";

  placeholder.textContent = "Ifølge eksperterne, er det vigtigt at proviantere inden turen går til Ikea. Det er nemlig ikke sikkert at man når hele vejen til restauranten i tide. Skulle uheldet være ude, er det en god ide med lidt ekstra til maven. Her anbefales bønner på konserves, da de har lang holdbarhed";

  efficiency.innerHTML = `<img  class="airtagpic" src="img/SurvivalStuff_noedlager.webp" alt="billede af reb">`;
  requirement.innerHTML = `<h3>Kan købes hos</h3> 
 <a href="Her.skulle.man.saa.komme.til.Nettos.hjemmeside">Netto</a>`;

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

  Airtag.style.fill = "#de8926";
}

function clickAirtag() {
  console.log("clickAirtag");

  overskrift.textContent = "Airtag";

  placeholder.textContent = "Skal du en tur i Ikea? Så anbefaler eksperterne at huske at medbringe en airtag. Den koster kun 199, og kræver desuden at du downloader appen ´Find´ ";

  efficiency.innerHTML = `<img  class="airtagpic" src="img/SurvivalStuff_airtag.webp" alt="billede af reb">`;

  requirement.innerHTML = `<h3>Kan købes hos</h3> 
 <a href="Her.skulle.man.saa.komme.til.Elgigantens.hjemmeside">Elgiganten</a>`;

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

  reb.style.fill = "#de8926";
}

function clickReb() {
  console.log("clickReb");

  overskrift.textContent = "Sikkerhedsreb";

  placeholder.textContent = "Ifølge eksperterne, er Sikkerhedsrebet en god og fornuftig forholdsregel. Rebet kan, inklusiv karbinhage, købes for 299kr i alle spejdersport og div friluftsliv butikker";

  efficiency.innerHTML = `
<img src="img/SurvivalStuff_reb.webp" alt="billede af reb">`;
  requirement.innerHTML = `<h3>Kan købes hos </h3> 
 <a href="Her.skulle.man.saa.komme.til.spejdersports.hjemmeside">SpejderSport</a>`;

  // animation for Reb //

  efficiency.classList.add("fadeIn");
  requirement.classList.add("fadeInSlow");
}
