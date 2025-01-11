const main = document.querySelector("main");

const totalEmptyElemnets = 6;
const draggableElement = 2;
const images = [{}];

createEmpty();
createDraggable();

function createEmpty() {
  for (let i = 0; i < totalEmptyElemnets; i++) {
    const emptyElement = document.createElement("div");
    emptyElement.classList.add("empty");
    main.appendChild(emptyElement);
  }
}

function createDraggable() {
  const emptyElemets = document.querySelectorAll(".empty");

  for (let i = 0; i < draggableElement; i++) {
    const elemt = document.createElement("div");
    elemt.classList.add("fill");
    elemt.draggable = true;
    emptyElemets[i].appendChild(elemt);
  }
}

const emptyElement = document.querySelectorAll(".empty");
const fillElements = document.querySelectorAll(".fill");

draggedElement = null;

fillElements.forEach((fill) => {
  fill.addEventListener("dragstart", dragStart);
  fill.addEventListener("dragend", dragEnd);
});

emptyElement.forEach((empty) => {
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("drop", dragDrop);
});

function dragStart() {
  console.log("drag start");
  draggedElement = this;
  this.className += " hold";
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}
function dragEnd() {
  console.log("drag end");
  this.className = "fill";
}

function dragEnter(e) {
  console.log("drag enter");
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave(e) {
  console.log("drag leave");
  this.className = "empty";
}
function dragOver(e) {
  console.log("drag over");
  e.preventDefault();
}
function dragDrop(e) {
  console.log("drag drop");
  this.className = "empty";
  if (this.children.length === 0) {
    this.appendChild(draggedElement);
  }
}
