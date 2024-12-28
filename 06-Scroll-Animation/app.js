document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".testimonialPanel");
  window.addEventListener("scroll", showBoxes);

  showBoxes();

  function showBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
});
