const html = document.querySelector("html");
const btn = document.querySelector("#toggle");

if (localStorage.getItem("darkMode")) {
  html.classList.toggle("dark");
  btn.textContent = "Light";
}

function toggleTheme() {
  console.log("shit works");
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    btn.textContent = "Light";
    localStorage.setItem("darkMode", true);
  } else {
    btn.textContent = "Dark";
    localStorage.setItem("darkMode", false);
  }
}
btn.addEventListener("click", toggleTheme);
