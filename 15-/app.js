window.addEventListener("DOMContentLoaded", () => {
  //Available Goals in liters
  const waterGoal = [1, 1.5, 2, 2.5, 3, 3.5];

  //user data to be saved in local storage\
  let userData = loadData() || {
    goalSet: "2",
    addedCups: [],
    activeButton: "button-2",
  };
  console.log(userData);

  //buttons container
  const setGoalButtonsContainer = document.querySelector(
    ".set-goal-buttons-container"
  );

  //small cups container
  const cupsContainer = document.querySelector(".fill-goal-cups-container");

  //create buttons to set goal based on liters
  createSetGoalButton();
  //set active button
  setActive(userData.activeButton);

  //default goal: 2 Liters. If changed will retrieve goal from local storage
  setGoal(userData.goalSet);
  fillWater();

  //event handler to set/change goal based on the button clicked.
  setGoalButtonsContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      //add active class to button clicked
      userData.activeButton = e.target.id;
      const selectedButton = setGoalButtonsContainer.querySelector(
        `#${userData.activeButton}`
      );
      removeActive();
      selectedButton.classList.add("active");
      console.log("active button", selectedButton);

      //update userData object
      //update the goalset
      userData.goalSet = e.target.getAttribute("data-value");
      //reset the addedCupsArray
      userData.addedCups = [];
      saveData();
      console.log("updated user data", userData);

      //set goal
      setGoal(userData.goalSet);
    }
  });

  //event handler to fill water based on small cup selected
  cupsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("cup")) {
      selectedCup = e.target;
      //changes
      //add selected cup into userdata
      userData.addedCups.push(selectedCup.id);
      saveData();
      //prev
      console.log("small cup selected with id", e.target.id);
      console.log(typeof e.target.id);
      fillWater();
    }
  });
  //function to add water of selected cup to Big cup
  function fillWater() {
    //add filled class to the added cups
    userData.addedCups.forEach((cupId) => {
      console.log("cup id", cupId);
      const smallCupFilled = cupsContainer.querySelector(`#${cupId}`);
      if (smallCupFilled) {
        smallCupFilled.classList.add("filled");
      }
    });
    console.log("User Data", userData);

    //update the big cup
    const goalRem = document.getElementById("goal-remained");
    const goalRemainingElement = document.querySelector(".goal-remained span");
    const goalRemainingSmallText = document.querySelector(
      ".goal-remained small"
    );
    const goalCompletedElement = document.querySelector(
      ".goal-completed-percentage"
    );

    //big cup
    // const cup = document.querySelector(".goal-container .cup");

    const goalRemaining =
      (+userData.goalSet * 1000 - userData.addedCups.length * 250) / 1000;
    console.log("Goal remaining", goalRemaining);

    goalRemainingElement.innerText = goalRemaining + "L";

    const goalPercentageFilled =
      ((userData.addedCups.length * 250) / (+userData.goalSet * 1000)) * 100;
      if(goalPercentageFilled === 0) return;
    goalCompletedElement.innerText =
      Number(goalPercentageFilled.toFixed(1)) + "%";
    goalCompletedElement.style.height =
      Number(goalPercentageFilled.toFixed(1)) + "%";
    goalRem.style.height = 100 - Number(goalPercentageFilled.toFixed(1)) + "%";
    console.log("Goal Percentage filled", goalPercentageFilled);

    console.log("total glasses", (+userData.goalSet * 1000) / 250);
    console.log("cups filled", userData.addedCups.length);

    if (userData.addedCups.length === (+userData.goalSet * 1000) / 250) {
      goalRemainingElement.style.display = "none";
      goalRemainingElement.style.fontSize = 0;

      goalRemainingSmallText.style.display = "none";
    }
  }

  //function to add active class to active button
  function setActive(selectedButtonId) {
    const button = setGoalButtonsContainer.querySelector(
      `#${selectedButtonId}`
    );
    button.classList.add("active");
  }

  //function to remove active classes
  function removeActive() {
    const buttons = document.querySelectorAll(
      ".set-goal-buttons-container button"
    );
    buttons.forEach((btn) => {
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
      }
    });
  }

  //function to create buttons for set goals
  function createSetGoalButton() {
    waterGoal.forEach((item) => {
      const button = document.createElement("button");
      //sanitizing id, replacing . with - inorder to avoid error
      const sanitizedId = `button-${item.toString().replace(".", "-")}`; // Replace dot with hyphen
      button.id = sanitizedId;
      button.setAttribute("data-value", item);
      button.innerText = item + " Liter";

      setGoalButtonsContainer.appendChild(button);
    });
  }

  //function to create bigCup
  function createBigCup(liters) {
    //create cup
    const goalContainer = document.querySelector(".goal-container");
    const cup = document.createElement("div");
    cup.classList.add("cup");
    cup.id = "big-cup";
    cup.innerHTML = `
               <div class="goal-remained" id="goal-remained">
                 <span>${liters + "L"}</span>
                 <small>remained</small>
               </div>
               <div class="goal-completed-percentage" id="goal-completed-percentage">
                 
               </div>
             `;
    goalContainer.appendChild(cup);
  }
  //function to set goal and add small cups
  function setGoal(liters) {
    //getting the big cup container
    const goalContainer = document.querySelector(".goal-container");
    goalContainer.innerHTML = ``;

    //setting the goal text
    const goalText = document.createElement("h3");
    goalText.innerText = "Goal " + liters + "L";
    goalContainer.appendChild(goalText);

    //creating the bigCup
    createBigCup(liters);

    //reset small-cups container before they will be changed based on goal set
    cupsContainer.innerHTML = ``;

    //calc total cups based on goal (liters) selected
    const totalCups = (+liters * 1000) / 250;

    //create and append total cups into DOM
    for (i = 1; i <= totalCups; i++) {
      const cup = document.createElement("div");
      cup.classList.add("cup", "small-cup");
      cup.id = "small-cup-" + i;
      cup.innerText = "250 ml";
      cupsContainer.appendChild(cup);
    }
  }

  //function to save userdata to local storage
  function saveData() {
    localStorage.setItem("userData", JSON.stringify(userData));
  }

  //function to loadData from local storage
  function loadData() {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      const userData = JSON.parse(savedData);
      return userData;
    }
  }
});

// else {
//   goalRemainingElement.style.visibilty = "visible";
//   goalRemainingElement.style.height = 100;
// }

//debug

// Get the computed style of the element
// const computedStyle = window.getComputedStyle(goalCompletedElement);
// const computedStyleText = window.getComputedStyle(goalRemainingElement);
// const computedStyleCup = window.getComputedStyle(cup);

// // Get the height property
// const height = computedStyle.getPropertyValue("height");
// const heightText = computedStyleText.getPropertyValue("height");
// const heightCup = computedStyleCup.getPropertyValue("height");

// console.log("Height of rem%", parseInt(heightCup) - parseInt(height)); // e.g., "100px"
// console.log("Height of remText", heightText); // e.g., "100px"
// console.log("Height of cup", parseInt(heightCup)); // e.g., "100px"
