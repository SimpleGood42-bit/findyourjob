const menuButon = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar");
const closeMenuButton = document.querySelector(".close-button");
const toggleMenu = (event) => {
  menu.classList.toggle("is-open");
};

menuButon.addEventListener("click", toggleMenu);

closeMenuButton.addEventListener("click", toggleMenu);



