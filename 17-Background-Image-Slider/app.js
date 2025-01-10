const images = [
  {
    url: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1596779845727-d88eb78a1b08?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1475776408506-9a5371e7a068?q=80&w=1058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1275&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1539604880233-d282d9bac272?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1539634262233-7c0b48ab9503?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1503965830912-6d7b07921cd1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1735845078210-953081cee65d?q=80&w=2093&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const backgroundImageContainer = document.querySelector("main");
const imageSlide = document.querySelector(".slide");
const leftButton = document.querySelector("button.left-arrow");
const rightButton = document.querySelector("button.right-arrow");

let currentActive = 0;

//initial load
loadActive();

rightButton.addEventListener("click", () => {
  currentActive++;

  if (currentActive > images.length - 1) {
    currentActive = 0;
  }
  loadActive();
});

leftButton.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 0) {
    currentActive = images.length - 1;
  }
  loadActive();
});

//function to load active slide
function loadActive() {
  const image = new Image();
  //   image = images[currentActive];
  image.src = images[currentActive].url;
  console.log(image);
  imageSlide.innerHTML = ``;
  imageSlide.style.backgroundImage = `url(${image.src})`;
  backgroundImageContainer.style.backgroundImage = `url(${image.src})`;
  preLoad();
}

//function to preLoad Images
function preLoad() {
  const imageBefore = new Image();
  const imageAfter = new Image();

  imageBefore.src =
    images[(currentActive - 1 + images.length) % images.length].url;
  imageAfter.src = images[(currentActive + 1) % images.length].url;
}
