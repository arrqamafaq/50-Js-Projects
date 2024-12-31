const joke = document.querySelector("#joke p");
const addJoke = document.querySelector("#prm-btn");

addJoke.addEventListener("click", newJoke);


async function newJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();

  joke.textContent = data.joke;
}
