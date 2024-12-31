//sounds
const sounds = [
  "applause.mp3",
  "boo.mp3",
  "gasp.mp3",
  "tada.mp3",
  "victory.mp3",
  "wrong.mp3",
];

const board = document.querySelector(".board");

let currentAudio = null;
sounds.forEach((sound) => {
  const boardElement = document.createElement("button");
  boardElement.classList.add("board-element");
  const boardText = sound.replace(".mp3", "");
  boardElement.textContent = boardText;

  //audio
  boardElement.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    const audio = new Audio(`sounds/${sound}`);
    audio.play();
    currentAudio = audio;
  });
  board.appendChild(boardElement);
});

function stopSound(sound) {
  const audio = new Audio(sound);
}

console.log(sounds);
