function changeCity(event) {
  event.preventDefault();
  //let chooseyourCity = document.querySelector("h2"); - remove because don't need, change goal
  let writeCity = document.querySelector("#exampleInputEmail1");
  //chooseyourCity.innerHTML = writeCity.value; - remove the same
  let fixCity = writeCity.value;

  cityPosition(fixCity);
}
function cityPosition(fixCity) {
  let apiKey = "c8a77112b2faf6684bb4b21a0aa778ae";
  let ipIrl = `https://api.openweathermap.org/data/2.5/weather?q=${fixCity}&appid=${apiKey}&units=metric`;

  axios.get(`${ipIrl}&appid=${apiKey}`).then(showTemperature);
}

let yourCity = document.querySelector("form");
yourCity.addEventListener("submit", changeCity);

//inner day/time/date/month
let rightNow = new Date();
let nday = rightNow.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[nday];
let timeHours = rightNow.getHours();
let timeMinutes = rightNow.getMinutes();
let h4 = document.querySelector("h4");
h4.innerHTML = `${day}, ${timeHours}:${timeMinutes}`;

let date = rightNow.getDate();
let month = rightNow.getMonth();
let monthAll = [
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
let months = monthAll[month];
let today = document.querySelector(".data-today");
today.innerHTML = `${date} ${months}`;
//change digree
function temperatureCelsius(event) {
  event.preventDefault();
  let tempCelsi = document.querySelector(".city_temp");
  tempCelsi.innerHTML = 21;
}
let celsi = document.querySelector(".celsius");
celsi.addEventListener("click", temperatureCelsius);
function temperatureFahrenheit(event) {
  event.preventDefault();
  let tempfahren = document.querySelector(".city_temp");
  tempfahren.innerHTML = 66;
}
let fahren = document.querySelector(".fahrenheit");
fahren.addEventListener("click", temperatureFahrenheit);
//position location_week5

function showTemperature(respose) {
  console.log(respose.data);
  let temperature = Math.round(respose.data.main.temp);
  let tempCelslocation = document.querySelector(".city_temp");
  tempCelslocation.innerHTML = temperature;
  let weather_description = document.querySelector(".weather_description");
  weather_description.innerHTML = respose.data.weather[0].main;
  let min_temperature = document.querySelector(".min_temperature");
  min_temperature.innerHTML = Math.round(respose.data.main.temp_min);
  let max_temperature = document.querySelector(".max_temperature");
  max_temperature.innerHTML = Math.round(respose.data.main.temp_max);
  let name_city = document.querySelector("h2");
  name_city.innerHTML = respose.data.name;
  let humidity = document.querySelector(".humidity");
  humidity.innerHTML = Math.round(respose.data.main.humidity);
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "c8a77112b2faf6684bb4b21a0aa778ae";
  let ipIrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
  axios.get(`${ipIrl}&appid=${apiKey}`).then(showTemperature);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let yourLocation = document.querySelector(".current");
yourLocation.addEventListener("click", getCurrentLocation);
