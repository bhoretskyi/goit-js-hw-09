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
function onStartClick() {
  timerID = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.disabled = true;
}
function onStopClick() {
  clearInterval(timerID);
  startButton.disabled = false;
}
