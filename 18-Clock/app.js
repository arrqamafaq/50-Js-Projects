const toggle = document.querySelector(".toggle");
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondsElement = document.querySelector(".second");
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

//toggle dark-light mode
toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    toggle.innerText = "Dark Mode";
  } else {
    html.classList.add("dark");
    toggle.innerText = "Light Mode";
  }
});

//function to set Time
function setTime() {
  const time = new Date();
  console.log(time);
  const hour = time.getHours();
  const hourTwelve = hour % 12;
  console.log("hour", hour);
  console.log("hourTwelveClock", hourTwelve);
  const minutes = time.getMinutes();
  console.log("minutes", minutes);
  const second = time.getSeconds();
  console.log("seconds", second);
  const amPm = hour<12? " AM":" PM";
  console.log(amPm);
  const day = time.getDay();
  console.log("Day", day);
  const month = time.getMonth();
  console.log("Month", month);

  
  //rotating the needles.
  hourElement.style.transform =`translate(-50%, -100%) rotate(${scale(hourTwelve,0,11,0,360)}deg)`;
  minuteElement.style.transform =`translate(-50%, -100%) rotate(${scale(minutes,0,60,0,360)}deg)`;
  secondsElement.style.transform =`translate(-50%, -100%) rotate(${scale(second,0,60,0,360)}deg)`;


  //setting the time
timeElement.innerHTML=`${hourTwelve<10? `0`+hourTwelve:hourTwelve}:${minutes<10?`0`+minutes:minutes}${amPm}`;

//setting the date
dateElement.innerHTML=`${days[day]} ${months[month]}, <span>${day}</span>`
}

//function scale for mapping range of elements
function scale(num,in_min,in_max,out_min,out_max){
    return (num -in_min)*(out_max-out_min) / (in_max - in_min) + out_min;
}
setTime();
setInterval(setTime,1000)
