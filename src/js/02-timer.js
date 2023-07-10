import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const refs = {
  inputDate: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  start: document.querySelector('[data-start]'),
};
refs.start.disabled = true;
let timerId = null

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      alert("Please choose a date in the future");
      console.log(selectedDates[0]);
      refs.start.disabled = true;
      return;
    }
    refs.start.disabled = false;
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }

flatpickr(refs.inputDate, options);
refs.start.addEventListener('click', () => {
  timerId = setInterval(() => {
   
    let clock = new Date(refs.inputDate.value) - new Date();

    let normalClock = convertMs(clock);
    console.dir(normalClock);

    refs.days.textContent = addLeadingZero(normalClock.days);
    refs.hours.textContent = addLeadingZero(normalClock.hours);
    refs.minutes.textContent = addLeadingZero(normalClock.minutes);
    refs.seconds.textContent = addLeadingZero(normalClock.seconds);
  }, 1000);
});
