const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;

const hours = document.querySelector(".hours"),
  minutes = document.querySelector(".minutes"),
  seconds = document.querySelector(".seconds"),
  start = document.querySelector(".start"),
  stop = document.querySelector(".stop"),
  reset = document.querySelector(".reset");

const disabled = (btn) => {
  btn.classList.add("disabled");
};

disabled(reset);
disabled(stop);

let ss = 0,
  ms = 0,
  hs = 0,
  intervalId;

const stopwatch = () => {
  //   const targetHour = prompt("Enter Target Hours").padStart(2, "0");
  //   const targetMinutes = prompt("Enter Target Minutes").padStart(2, "0");
  //   const targetSecond = prompt("Enter Target Second").padStart(2, "0");
  //   const targetedTime = `${targetHour}/${targetMinutes}/${targetSecond}`;

  intervalId = setInterval(() => {
    if (ss < 60) ss += 1;
    if (ss === 60) {
      ss = 0;
      ms += 1;
    }
    if (ms === 60) {
      ms = 0;
      hs += 1;
    }
    seconds.innerText = String(ss).padStart(2, "0");
    minutes.innerText = String(ms).padStart(2, "0");
    hours.innerText = String(hs).padStart(2, "0");
  }, 1000);
};

start.addEventListener("click", () => {
  stopwatch();
  stop.classList.remove("disabled");
  reset.classList.remove("disabled");
  start.classList.add("disabled");
});

stop.addEventListener("click", () => {
  stop.classList.add("disabled");
  start.classList.remove("disabled");
  reset.classList.remove("disabled");
  clearInterval(intervalId);
});

reset.addEventListener("click", () => {
  ss = 0;
  ms = 0;
  hs = 0;
  seconds.innerText = String(ss).padStart(2, "0");
  minutes.innerText = String(ms).padStart(2, "0");
  hours.innerText = String(hs).padStart(2, "0");
  clearInterval(intervalId);
  reset.classList.add("disabled");
  stop.classList.add("disabled");
  start.classList.remove("disabled");
});
