const landing = document.querySelector(".landing");
const leftPanel = document.querySelector(".left-panel");
const rightPanel = document.querySelector(".right-panel");

leftPanel.addEventListener("mouseenter", () => {
  landing.classList.add("left-active");
  console.log("left active")
});
leftPanel.addEventListener("mouseleave", () => {
  landing.classList.remove("left-active");
});

rightPanel.addEventListener("mouseenter", () => {
  landing.classList.add("right-active");
  console.log("right active")
});
rightPanel.addEventListener("mouseleave", () => {
  landing.classList.remove("right-active");
});
