const notification = [
  { message: "Congrats! success", color: "green" },
  { message: "Oops! you got an error", color: "red" },
  { message: "Something doesn't look good!", color: "orange" },
];

const btton = document.getElementById("add-notification");
const toastsContainer = document.querySelector(".toasts");

btton.addEventListener("click", () => {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  const message = Math.floor(Math.random() * notification.length);
  console.log(notification[message]);
  toast.innerText = notification[message].message;
  toast.style.color = notification[message].color;

  toastsContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
});
