function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "8476te1bf3d09d0bo93fc14adf032bbf";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=New York&key=8476te1bf3d09d0bo93fc14adf032bbf`;

axios.get(apiUrl).then(showTemperature);
