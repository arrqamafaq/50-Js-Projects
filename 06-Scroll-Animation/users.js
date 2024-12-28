const users = [
  {
    username: "John Carter",
    profile: "Software Engineer",
    picture:
      "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimonial:
      "Working with this company has been a transformative experience. Their attention to detail and innovative solutions have greatly benefited our projects.",
  },
  {
    username: "Sarah Malik",
    profile: "Project Manager",
    picture:
      "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbiUyMHdvbWVufGVufDB8MXwwfHx8MA%3D%3D",
    testimonial:
      "Their professionalism and expertise set them apart. They consistently exceed expectations, delivering high-quality results every time.",
  },
  {
    username: "James Wright",
    profile: "Data Analyst",
    picture:
      "https://images.unsplash.com/photo-1507081323647-4d250478b919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    testimonial:
      "This company truly understands the value of collaboration. Their team goes above and beyond to ensure every detail is accounted for.",
  },
  {
    username: "Emily Carter",
    profile: "Marketing Specialist",
    picture:
      "https://images.unsplash.com/photo-1541657333963-d31b55f58de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    testimonial:
      "Partnering with this company has been a game-changer. Their creative strategies have significantly improved our outreach and engagement.",
  },
  {
    username: "Michael Lee",
    profile: "UI/UX Designer",
    picture:
      "https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    testimonial:
      "I was impressed by their ability to bring our vision to life. Their design solutions are both elegant and functional.",
  },
  {
    username: "Aisha Khan",
    profile: "Business Consultant",
    picture:
      "https://images.unsplash.com/photo-1545266241-3516e2a6e016?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    testimonial:
      "This company’s innovative approach and dedication to success have been crucial to the growth of our business.",
  },
  {
    username: "Liam Johnson",
    profile: "Web Developer",
    picture:
      "https://images.unsplash.com/photo-1561688961-7588856fe6ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    testimonial:
      "Their technical expertise and seamless communication make them an invaluable partner for any project.",
  },
  {
    username: "Sophia Brown",
    profile: "Content Creator",
    picture:
      "https://images.unsplash.com/photo-1515552868968-a119fcb51395?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
    testimonial:
      "I appreciate their creative insight and ability to deliver top-notch solutions that resonate with our audience.",
  },
  {
    username: "Ethan Davis",
    profile: "Financial Analyst",
    picture:
      "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
    testimonial:
      "This company’s professionalism and commitment to excellence have consistently impressed our team.",
  },
  {
    username: "Isabella Wilson",
    profile: "HR Manager",
    picture:
      "https://images.unsplash.com/photo-1484517586036-ed3db9e3749e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8",
    testimonial:
      "Their ability to understand and adapt to our needs has made working with them a seamless experience.",
  },
];
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
