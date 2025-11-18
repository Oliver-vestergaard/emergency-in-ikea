const btn_open = document.querySelector("#cta_open1");
const btn_close = document.querySelector("#closebtn");

btn_open.addEventListener("click", openModal);
function openModal() {
  document.querySelector("#dialog1").classList.add("fadeIn");

  document.querySelector("#dialog1").showModal();
}

btn_close.addEventListener("click", closeModal);
function closeModal() {
  const dialog = document.querySelector("#dialog1");

  dialog.classList.remove("fadeIn");
  dialog.classList.add("dialogRotate");

  dialog.close();
}
