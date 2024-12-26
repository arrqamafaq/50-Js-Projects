const widget = document.querySelector(".search-widget");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  widget.classList.toggle("active");
});
