const canvas = document.getElementById("canvas");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const sizeElement = document.getElementById("size");
const colorElement = document.getElementById("color");
const clear = document.getElementById("clear");

//setting global attributes
const canvasKey = "canvas";
let color = "black";
let size = 10;
let isPressed = false;
let x;
let y;

//setting the resolution of canvas according to device resolution to avoid blurry drawings
function setCanvasResolution(canvas) {
  const dpr = window.devicePixelRatio || 1;

  // Get the CSS size
  const rect = canvas.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;

  // Set the canvas resolution
  canvas.width = width * dpr;
  canvas.height = height * dpr;

  // Scale the context to account for high DPI
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);

  return ctx;
}

//getting the canvas context onto which drawing will be done
let ctx = setCanvasResolution(canvas);
loadCanvas();

// Event listener for resizing the window
window.addEventListener("resize", () => {
  ctx = setCanvasResolution(canvas);
  loadCanvas();
});

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2, size);
    drawLine(x, y, x2, y2, size);
    x = x2;
    y = y2;
    saveCanvas();
  }
});

decrease.addEventListener("click", () => {
  if (size > 4) {
    size -= 1;
    console.log(size);
  }
  sizeElement.innerText = size;
});
increase.addEventListener("click", () => {
  if (size < 100) {
    size += 1;
    console.log(size);
  }
  sizeElement.innerText = size;
});
clear.addEventListener("click", () => {
  // Get the CSS size
  const rect = canvas.getBoundingClientRect();
  const canvasWidth = rect.width;
  const canvasHeight = rect.height;
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  saveCanvas();
});
colorElement.addEventListener("change", (e) => {
  color = e.target.value;
});

//function to draw circle
function drawCircle(x, y, size) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  //   ctx.stroke();
  //   saveCanvas();
}
//function to draw line
function drawLine(x1, y1, x2, y2, size) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = size * 2;
  ctx.strokeStyle = color;
  ctx.stroke();
}

function loadCanvas() {
  const savedData = localStorage.getItem(canvasKey);
  if (savedData) {
    const img = new Image();
    img.src = savedData;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
  }
}

function saveCanvas() {
  const dataURL = canvas.toDataURL(); // Convert canvas to base64 image
  localStorage.setItem(canvasKey, dataURL);
}
