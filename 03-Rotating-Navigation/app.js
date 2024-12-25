const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const container = document.querySelector(".container");
const navBar = document.querySelector(".nav-bar");

openBtn.addEventListener("click", () => {
  container.classList.add("open-nav");
  navBar.classList.add("open");
});
closeBtn.addEventListener("click", () => {
  container.classList.remove("open-nav");
  navBar.classList.remove("open");
});
