import { users } from "./users.js";
document.addEventListener("DOMContentLoaded", () => {
  //the main container
  const mainContainer = document.querySelector(".container");

  //the testimonials container
  const testimonialsContainer = document.createElement("div");
  testimonialsContainer.classList.add("testimonialsContainer");

  mainContainer.appendChild(testimonialsContainer);

  //creating a testimonial card for each user
  users.forEach((user) => {
    const panel = createTestimonial(
      user.picture,
      user.username,
      user.profile,
      user.testimonial
    );
    testimonialsContainer.appendChild(panel);
  });
  const card = document.querySelector(".testimonialPanel");
  card.classList.add("active");

  //adding active class on clicking a card
  testimonialsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("testimonialPanel")) {
      setActiveState(e.target);
    }
  });

  //function to add active state
  function setActiveState(card) {
    removeAllActive();
    card.classList.add("active");
  }

  //function to remove all activeStates
  function removeAllActive() {
    const cards = document.querySelectorAll(".testimonialPanel");
    cards.forEach((card) => {
      if (card.classList.contains("active")) {
        card.classList.remove("active");
      }
    });
  }

  //function for creating a testimonial card for each user
  function createTestimonial(picture, username, profile, testimonial) {
    const panel = document.createElement("div");
    panel.classList.add("testimonialPanel");
    panel.innerHTML = `
        <div class="person-image">
            <img src="${picture}" alt="profile picture of ${username}">
        </div>
        <h3 class="person-name">${username}</h3>
        <h5 class="person-profile">${profile}</h5>
        <p class="person-testimonial">${testimonial}</p>
        `;
    return panel;
  }
});
