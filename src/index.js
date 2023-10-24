function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = Math.round(response.data.main);
  cityElement.innerHTML = response.data.name;
}

let apiKey = "8476te1bf3d09d0bo93fc14adf032bbf";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=New York&key=8476te1bf3d09d0bo93fc14adf032bbf`;
axios.get(apiUrl).then(displayTemperature);
