const buttonRipple = document.querySelector(".ripple");

buttonRipple.addEventListener("click", (e) => {
  //xand y cordinates with repect to window
  const x = e.clientX;
  const y = e.clientY;

  console.log("x & y", x, y);

  //position of button from top and left
  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;
  console.log("button x,y :", buttonTop, buttonLeft);

  //x and y coordinates of pointer inside button
  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;
  console.log("x & y inside", xInside, yInside);

  const circle = document.createElement("span");
  circle.style.top = yInside + "px";
  circle.style.left = xInside + "px";
  circle.classList.add("circle");
  buttonRipple.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 1000);
});
