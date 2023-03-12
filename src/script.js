let dateTime = document.querySelector(".date-time");

let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let now = new Date();
let weekDay = weekDays[now.getDay()];
let month = months[now.getMonth()];
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();

dateTime.innerHTML = `${weekDay}, ${month} ${date}<br> ${hour}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let h5 = document.querySelector("h5");
  h5.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector("#search-form");

form.addEventListener("submit", search);
