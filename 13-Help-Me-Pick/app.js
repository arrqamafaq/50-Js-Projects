const choiceContainer = document.querySelector(".choice-container");
const inputTextArea = document.querySelector(".input-box");
const inputBoxContainer = document.querySelector(".input-box-container");

inputTextArea.focus();
//handle choice creation on entering input
inputTextArea.addEventListener("input", (e) => {
  //   if (e.target.value === "") return;
  choiceContainer.innerHTML = ``;
  const choiceArray = createChoice(e.target.value);
  console.log(choiceArray);
  if (!choiceArray) return;

  choiceArray.forEach((ch) => {
    choiceContainer.appendChild(ch);
  });
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});

//handle random selection on pressing enter or clicking on the button
inputBoxContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("primary-btn")) {
    const choices = document.querySelectorAll(".choice");
    choices.forEach((item) => {
      if (item.classList.contains("highlight")) {
        unHighlightRandom(item);
      }
    });
    if (choices.length === 0) return;
    inputTextArea.value = "";

    console.log("button clicked");
    randomSelect();
  }
});
inputBoxContainer.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const choices = document.querySelectorAll(".choice");
    choices.forEach((item) => {
      if (item.classList.contains("highlight")) {
        unHighlightRandom(item);
      }
    });
    if (choices.length === 0) return;
    inputTextArea.value = "";

    console.log("enter pressed");
    randomSelect();
  }
});

//function randomize
function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomChoice = pickRandomChoice();
    highlightRandom(randomChoice);

    setTimeout(() => {
      unHighlightRandom(randomChoice);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomChoiceFinal = pickRandomChoice();
      highlightRandom(randomChoiceFinal);
    }, 100);
  }, times * 100);
}

//function to pick a random choice
function pickRandomChoice() {
  const choices = document.querySelectorAll(".choice");
  const randomChoiceIndex = Math.floor(Math.random() * choices.length);
  console.log(randomChoiceIndex);
  return choices[randomChoiceIndex];
}
//function to highlight random choices
function highlightRandom(choice) {
  choice.classList.add("highlight");
}
function unHighlightRandom(choice) {
  choice.classList.remove("highlight");
}
//function to create choice
function createChoice(inputText) {
  if (inputText.length === 0) return;
  const inputArray = inputText
    .split(",")
    .filter((item) => item.trim() !== "")
    .map((e) => e.trim());

  const choicesArray = [];
  inputArray.forEach((item) => {
    const choice = document.createElement("div");
    choice.classList.add("choice");
    choice.innerText = item;
    choicesArray.push(choice);
  });
  return choicesArray;
}
