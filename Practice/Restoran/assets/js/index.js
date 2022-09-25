const header = document.querySelector(".header");

const button = document.querySelector(".btn__mobile__nav");

button.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
