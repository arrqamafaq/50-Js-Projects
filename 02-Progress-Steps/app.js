window.addEventListener("DOMContentLoaded", () => {
  //ui
  let totalSteps = 10;
  const stepsContainer = document.querySelector(".steps");

  //append step to container
  for (i = 0; i < totalSteps; i++) {
    const step = createStep(i);
    stepsContainer.appendChild(step);
  }

  //default
  const firstStep = document.querySelector(".step");
  firstStep.classList.add("active");

  //function to create step
  function createStep(index) {
    const step = document.createElement("div");
    step.classList.add("step");
    step.innerHTML = `
        <div class="circle"></div>
            <div class="stepText">
              <h4>Step ${index + 1}</h4>
              <h6>This is step ${index + 1}.</h6>
            </div>`;
    return step;
  }

  //step functionality
  const prevButton = document.querySelector("#prev");
  const nextButton = document.querySelector("#next");
  const steps = document.querySelectorAll(".step");
  const progress = document.querySelector(".progress");
  //active step
  let currentActive = 1;

  nextButton.addEventListener("click", () => {
    if (currentActive < steps.length) {
      currentActive++;
    }
    console.log(currentActive);
    // setActive(currentActive);
    update();
  });

  prevButton.addEventListener("click", () => {
    if (currentActive > 1) {
      currentActive--;
    }
    console.log(currentActive);
    update();
  });

  //set active step
  function update() {
    if (currentActive === steps.length) {
      nextButton.disabled = true;
    } else if (currentActive === 1) {
      prevButton.disabled = true;
    } else {
      nextButton.disabled = false;
      prevButton.disabled = false;
    }

    steps.forEach((step, index) => {
      if (index < currentActive) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });

    const progressHeight =
      ((currentActive - 1) / (steps.length - 1)) * 100 + "%";
    console.log(progressHeight);
    progress.style.height = progressHeight;
  }
});
