import { faqData } from "./questions.js";
document.addEventListener("DOMContentLoaded", () => {
  //faqs container
  const faqsContainer = document.querySelector(".faqs-container");

  //categories container
  const faqsCategory = document.createElement("aside");
  faqsCategory.classList.add("faqs-catagory");
  //create catagory
  createCatagories();
  faqsContainer.appendChild(faqsCategory);
  console.log(faqsCategory);

  //questions container
  const questionsContainer = document.createElement("div");
  questionsContainer.classList.add("faqs-questions");
  faqsContainer.appendChild(questionsContainer);

  //default question
  getQuestions("General");
  // Set the first category to active
  const firstCategory = faqsCategory.querySelector(".category"); // Get the first category element
  if (firstCategory) {
    firstCategory.classList.add("active");
  }

  //handle question selected
  faqsCategory.addEventListener("click", (e) => {
    if (e.target.classList.contains("category")) {
      console.log(e.target);
      resetCatagories();
      e.target.classList.add("active");
      console.log(e.target.textContent);
      questionsContainer.innerHTML = ``;
      getQuestions(e.target.textContent);
      questionsContainer.scrollTop = 0;
    }
  });

  //handle accordion
  questionsContainer.addEventListener('click',(e)=>{
    const clickElement = e.target;
    if(clickElement.classList.contains("question") || clickElement.classList.contains("faq-toggle")){
      const questionItem = clickElement.parentNode;
      questionItem.classList.toggle("active");
    }
  })

  //function to remove activeState of catagories
  function resetCatagories() {
    const catagories = document.querySelectorAll(".category.active");
    catagories.forEach((cata) => {
      cata.classList.remove("active");
    });
  }
  //function to create catagories and questions
  function createCatagories() {
    Object.keys(faqData).forEach((cat) => {
      const category = document.createElement("h4");
      category.classList.add("category");
      category.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
      faqsCategory.appendChild(category);
    });
  }

  //function to render questions based on clicked catagory
  function getQuestions(selectedCategory) {
    Object.keys(faqData).forEach((category) => {
      // console.log(catagory);

      if (category.toLowerCase() === selectedCategory.toLowerCase()) {
        console.log(category);
        const questionItemsTitle = document.createElement("h2");
        questionItemsTitle.classList.add("faqs-title");
        questionItemsTitle.textContent = selectedCategory + " Questions";
        questionsContainer.appendChild(questionItemsTitle);
        createQuestions(category);
      }
    });
  }

  //function to create questions
  function createQuestions(selectedCategory) {
    //question item container for individual question
    faqData[selectedCategory].forEach((item) => {
      const questionItem = document.createElement("div");
      questionItem.classList.add("questionItem");

      //toggle button
      const faqToggle = document.createElement("button");
      faqToggle.classList.add("faq-toggle");
      faqToggle.innerHTML = `
      <i class="fa-regular fa-plus"></i>
      <i class="fa-regular fa-x"></i>
      `;
      //question
      const question = document.createElement("h3");
      question.classList.add("question");
      question.textContent = item.question;

      //answer
      const answer = document.createElement("p");
      answer.classList.add("answer");
      answer.textContent = item.answer;

      questionItem.append(question, answer, faqToggle);
      questionsContainer.appendChild(questionItem);

      console.log(questionItem);
    });
  }
});
