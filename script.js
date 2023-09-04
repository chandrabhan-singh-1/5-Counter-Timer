const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const input = document.querySelector("input");
const form = document.querySelector("form");
const invalid = document.querySelector(".invalid");

const second = 1000,
  minute = 60 * second,
  hour = 60 * minute,
  day = 24 * hour;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  dob = input.value;
  let currentDate = new Date(Date.now());
  const dateArr = input.value.split("-"); // Creates an array in [YYYY, MM, DD] format eg: [2023, 09, 04].

  invalid.style.display = "none";

  if (input.value == "" || new Date(input.value) > Date.now()) {
    invalid.innerHTML =
      "Invalid Date of Birth. Please! Enter a valid Date of Birth.";
    invalid.style.display = "inline";
    return;
  }

  if (
    dateArr[1] - 1 == currentDate.getMonth() &&
    dateArr[2] == currentDate.getDate()
  ) {
    const div = document.querySelector(".counterTimer");
    const HB = document.createElement("p");
    HB.innerText = "Hey! It's your Birthday Today. Happy Birthday!!!";
    div.children = HB;
    return;
  }

  if (
    dateArr[1] - 1 > currentDate.getMonth() ||
    (dateArr[1] - 1 == currentDate.getMonth() &&
      dateArr[2] > currentDate.getDate())
  ) {
    var year = currentDate.getFullYear();
  } else {
    var year = currentDate.getFullYear() + 1;
  }

  let nextBD = new Date(year, dateArr[1] - 1, dateArr[2]).getTime();

  setInterval(() => {
    const today = new Date().getTime();
    const diff = nextBD - today;

    const leftDays = Math.floor(diff / day);
    const leftHours = Math.floor((diff % day) / hour);
    const leftMinutes = Math.floor((diff % hour) / minute);
    const leftSeconds = Math.floor((diff % minute) / second);

    daysElement.innerText = leftDays;
    hoursElement.innerText = leftHours;
    minutesElement.innerText = leftMinutes;
    secondsElement.innerText = leftSeconds;
  }, 1000);
});
