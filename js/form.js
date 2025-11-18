document.querySelector(".ifclicked").addEventListener("click", ifClicked);

function ifClicked() {
  console.log("det virker");
  document.querySelector(".ekspertRåd").classList.add("hide");
}

document.querySelector(".goback").addEventListener("click", goBack);

function goBack() {
  console.log("det virker også");
  document.querySelector(".ekspertRåd").classList.remove("hide");
}

/*   Fejl Meddelelse      */
const form = document.querySelector("#webform");
form.addEventListener("invalid", cancelPopup, true);

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":invalid").focus();
}
/* Submit */

const firstOutput = document.querySelector("#first_name_output");
const lastOutput = document.querySelector("#last_name_output");
const emailOutput = document.querySelector("#email_output");
const phoneOutput = document.querySelector("#phone_output");
const hvilkenOutput = document.querySelector("#hvilken_output");
const datoOutput = document.querySelector("#dato_output");
const beskrivelseOutput = document.querySelector("#beskrivelse_output");
const fulgtrådOutput = document.querySelector("#fulgtRåd_output");
const ekspertRådOutput = document.querySelector("#ekspertRåd_output");
const bekymretOutput = document.querySelector("#bekymret_output");

function handleSubmit(event) {
  console.log("Submit klikket");
  event.preventDefault();

  const formData = new FormData(form);
  const firstName = formData.get("F-name");
  const lastName = formData.get("L-name");
  const email = formData.get("E-mail");
  const phoneNumber = formData.get("tlf_nummer");
  const hvor = formData.get("hvor");
  const dato = formData.get("dato");
  const beskrivelse = formData.get("beskrivelse");
  const råd = formData.get("råd");
  const ekspertRåd = formData.getAll("ekspertRåd");
  const Bekymret = formData.get("Bekymret");

  firstOutput.textContent = firstName;
  lastOutput.textContent = lastName;
  emailOutput.textContent = email;
  phoneOutput.textContent = phoneNumber;
  hvilkenOutput.textContent = hvor;
  datoOutput.textContent = dato;
  beskrivelseOutput.textContent = beskrivelse;
  fulgtrådOutput.textContent = råd;
  ekspertRådOutput.textContent = ekspertRåd.join(", ");
  bekymretOutput.textContent = Bekymret;

  form.reset();
}

form.addEventListener("submit", handleSubmit);
