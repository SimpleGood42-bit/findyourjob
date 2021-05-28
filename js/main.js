const menuButon = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar");
const closeMenuButton = document.querySelector(".close-button");

menuButon.addEventListener("click", (event) => {
  menu.classList.toggle("is-open");
});

closeMenuButton.addEventListener("click", (event) => {
  menu.classList.toggle("is-open");
});