//Variables

const card = document.querySelectorAll(".box");
const playButton = document.querySelector(".play-button");
const stopButton = document.querySelector(".stop-button");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const cardRain = document.querySelector(".rain");
const cardFire = document.querySelector(".fire");
const cardForest = document.querySelector(".tree");
const cardBuild = document.querySelector(".builder");
const timeUp = document.querySelector(".time-up");
const timeDown = document.querySelector(".time-down");

let minutes;
let interval;
let audio = new Audio("./sounds/principal.mp3");
let cardAudio = new Audio("./sounds/Chuva.wav");
let cardAudio2 = new Audio("./sounds/Lareira.wav");
let cardAudio3 = new Audio("./sounds/Floresta.wav");
let cardAudio4 = new Audio("./sounds/Cafeteria.wav");

//function increase timer +5 minutes
const increaseTimer = () => {
  minutes = parseInt(minutesDisplay.textContent);
  minutes += 5;
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
};

//function decrease timer -5 minutes

const decreaseTimer = () => {
  minutes = parseInt(minutesDisplay.textContent);
  if (minutes > 0) {
    minutes -= 5;
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
  }
};

//function start
const player = () => {
  audio.loop = true;
  audio.play();
  cardAudio2.pause();
  cardAudio3.pause();
  cardAudio4.pause();
  cardAudio.pause();
  playButton.classList.add("ativo");
  stopButton.classList.remove("ativo");
  const countdown = () => {
    let seconds = parseInt(secondsDisplay.textContent);
    let minutes = parseInt(minutesDisplay.textContent);

    if (seconds === 0 && minutes === 0) {
      cardRain.classList.remove("active");
      cardFire.classList.remove("active");
      cardForest.classList.remove("active");
      cardBuild.classList.remove("active");
      playButton.classList.remove("ativo");
      stopButton.classList.add("ativo");
      alert("Acabou o tempo!");
      clearInterval(interval);
      audio.loop = false;
      audio.pause();
      return;
    }
    if (seconds > 0) {
      seconds--;
      secondsDisplay.textContent = String(seconds).padStart(2, "0");
    } else if (minutes > 0) {
      minutes--;
      minutesDisplay.textContent = String(minutes).padStart(2, "0");
      secondsDisplay.textContent = String(59).padStart(2, "0");
    } else {
      clearInterval(interval);
    }
  };
  interval = setInterval(countdown, 1000);
};

//function stop
const stopper = () => {
  audio.loop = false;
  audio.pause();
  audio.currentTime = 0;
  clearInterval(interval);
  secondsDisplay.textContent = String(0).padStart(2, "0");
  minutesDisplay.textContent = String(0).padStart(2, "0");
  cardAudio.pause();
  cardAudio2.pause();
  cardAudio3.pause();
  cardAudio4.pause();
  cardRain.classList.remove("active");
  cardFire.classList.remove("active");
  cardForest.classList.remove("active");
  cardBuild.classList.remove("active");
  playButton.classList.remove("ativo");
  stopButton.classList.add("ativo");
};

//Callbacks
const rain = () => {
  cardAudio.play();
  cardRain.classList.add("active");
  cardFire.classList.remove("active");
  cardForest.classList.remove("active");
  cardBuild.classList.remove("active");
  cardAudio2.pause();
  cardAudio3.pause();
  cardAudio4.pause();
  audio.pause();
  playButton.classList.remove("ativo");
  audio.currentTime = 0;
  clearInterval(interval);
};

const fire = () => {
  cardAudio2.play();
  cardFire.classList.add("active");
  cardRain.classList.remove("active");
  cardForest.classList.remove("active");
  cardBuild.classList.remove("active");
  cardAudio.pause();
  cardAudio3.pause();
  cardAudio4.pause();
  audio.pause();
  playButton.classList.remove("ativo");
  audio.currentTime = 0;
  clearInterval(interval);
};

const forest = () => {
  cardAudio3.play();
  cardForest.classList.add("active");
  cardRain.classList.remove("active");
  cardFire.classList.remove("active");
  cardBuild.classList.remove("active");
  cardAudio.pause();
  cardAudio2.pause();
  cardAudio4.pause();
  audio.pause();
  playButton.classList.remove("ativo");
  audio.currentTime = 0;
  clearInterval(interval);
};

const build = () => {
  cardAudio4.play();
  cardBuild.classList.add("active");
  cardRain.classList.remove("active");
  cardFire.classList.remove("active");
  cardForest.classList.remove("active");
  cardAudio.pause();
  cardAudio2.pause();
  cardAudio3.pause();
  audio.pause();
  playButton.classList.remove("ativo");
  audio.currentTime = 0;
  clearInterval(interval);
};

//Events
cardBuild.addEventListener("click", build);

cardRain.addEventListener("click", rain);

cardFire.addEventListener("click", fire);

cardForest.addEventListener("click", forest);

timeDown.addEventListener("click", decreaseTimer);

timeUp.addEventListener("click", increaseTimer);

playButton.addEventListener("click", player);

stopButton.addEventListener("click", stopper);
