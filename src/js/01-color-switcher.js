function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
startButton.addEventListener('click', onStartClick);
stopButton.addEventListener('click', onStopClick);
let timerID = null;
startButton.disabled = false;
stpoButton.disabled = false;

function onStartClick() {
  timerID = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    startButton.disabled = true;
    stopButton.disabled = false;
  }, 1000);
}
function onStopClick() {
  clearInterval(timerID);
  startButton.disabled = false;
  stopButton.disabled = true;
}
