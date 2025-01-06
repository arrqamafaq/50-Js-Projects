const data = [
  { instagram: { users: 598320 } },
  { facebook: { users: 5145750 } },
  { twitter: { users: 5248655 } },
  { youtube: { users: 5256800 } },
  { linkedin: { users: 534250 } },
];

window.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.querySelector(".cards");
  createCard();

  //function to create cards
  function createCard() {
    data.forEach((item) => {
      const platform = Object.keys(item);
      const users = item[platform].users;
      console.log(platform);

      const card = document.createElement("div");
      card.classList.add("card");
      console.log(item);

      card.innerHTML = `
        <div class="stats">0</div>
        <i class="fa-brands fa-${
          platform[0] === "twitter" ? "x-twitter" : platform
        }"></i>
        <div class="platform">${platform} Followers</div>
        `;
      cardContainer.appendChild(card);

      // Select the stats element for this card
      const statsElement = card.querySelector(".stats");
      let stats = 0;

      // Recursive function with delay
      function incrementStats() {
        if (stats >= users) {
          stats = users;
          statsElement.innerHTML = stats;
          console.log("final stats", stats);
          return;
        }
        stats += Math.ceil(users / 100);
        statsElement.innerHTML = stats;
        console.log("current stats", stats);
        setTimeout(incrementStats, 10); // Recursive call with delay
      }
      incrementStats(); // Start incrementing
    });
  }
});
