// Get Api
const api = {
  key: "4032d1b4f09e0583821e798a3c391458",
  base: "http://api.openweathermap.org/data/2.5/",
};

// get input search
const input = document.querySelector(".input-search");
// Add event
input.addEventListener("keypress", setQuery);

function setQuery(event) {
  // Num 13 Becouse === Enter press
  if (event.keyCode == 13) {
    getResult(input.value);
  }
}

async function getResult(query) {
  // Get Data From Api By input Value
  const fetchApi = await fetch(
    `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
  );
  // Convert Data To json
  const weather = await fetchApi.json();
  //   call Function show Result
  displyResult(weather);
}

function displyResult(weather) {
  console.log(weather);
  // Get city & Set City For Input
  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  // Create date
  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBuilder(now);

  // Set Temprature
  let temp = document.querySelector(".temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  // Set Weather
  let weatherEL = document.querySelector(".weather");
  weatherEL.innerText = `${weather.weather[0].main}`;
}

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // get Day
  let day = days[d.getDay()];
  // Get All Date
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
