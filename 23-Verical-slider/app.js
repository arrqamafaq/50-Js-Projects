const data = [
  {
    color: "#DE89AA",
    url: "https://images.unsplash.com/photo-1649933248435-1debbfac39b2?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageTitle: "Nature Flower",
    imageInfo: "all in pink",
  },
  {
    color: "#FED17C",
    url: "https://images.unsplash.com/photo-1508768787810-6adc1f613514?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageTitle: "Flying Eagle",
    imageInfo: "in the sunset",
  },
  {
    color: "#017CBF",
    url: "https://images.unsplash.com/photo-1500390365106-166bb67248d6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageTitle: "Calm Clouds",
    imageInfo: "as a roof",
  },
  {
    color: "#57504E",
    url: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageTitle: "A lonely castle",
    imageInfo: "in the wilderness",
  },
  {
    color: "#8CC455",
    url: "https://plus.unsplash.com/premium_photo-1710962184823-907ade6b3783?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageTitle: "Green Landscape",
    imageInfo: "relieve the anxiety",
  },
];

//
const sliderContainer = document.querySelector(".slide-container");
const slideLeft = document.querySelector(".left-slide");
const slideRight = document.querySelector(".right-slide");
const buttonUp = document.querySelector(".slide-action-up-button");
const buttonDown = document.querySelector(".slide-action-down-button");

//append left slide elements
data.forEach((item) => slideLeft.appendChild(createLeftSlideElements(item)));

//append right slide elements
for (let i = data.length - 1; i >= 0; i--) {
  slideRight.appendChild(createRightSlideElements(data[i]));
}

//function to create left slide div
function createLeftSlideElements(item) {
  const leftSlideDiv = document.createElement("div");
  leftSlideDiv.innerHTML = `
    <h1>${item.imageTitle}</h1>
    <small>${item.imageInfo}</small>
    `;
  leftSlideDiv.style.backgroundColor = item.color;
  return leftSlideDiv;
}

//function to create right slide div
function createRightSlideElements(item) {
  const rightSlideDiv = document.createElement("div");
  rightSlideDiv.innerHTML = `
    <img  src=${item.url} alt="${item.imageTitle}" />
`;
  return rightSlideDiv;
}

//logic to make slides slide

let activeSlide = 0;

slideLeft.style.top = `-${(data.length - 1) * 100}% `;

//event handler to slide
buttonUp.addEventListener("click", () => changeSlide("up"));
buttonDown.addEventListener("click", () => changeSlide("down"));

//function to change slide
const changeSlide = (direction) => {
  let sliderHeight = sliderContainer.clientHeight;

  //
  if (direction === "up") {
    activeSlide++;
    if (activeSlide > data.length - 1) {
      activeSlide = 0;
    }
  } else if (direction === "down") {
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = data.length - 1;
    }
  }

  slideRight.style.transform = `translateY(-${activeSlide * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlide * sliderHeight}px)`;
};
