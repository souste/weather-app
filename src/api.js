const content = document.getElementById("content");

async function getWeatherLocation() {
  const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=Manchester", { mode: "cors" });
  const weatherData = await response.json();

  console.log(weatherData.location);
  const locationName = document.createElement("h2");
  locationName.innerText = weatherData.location.name;

  const locationCountry = document.createElement("p");
  locationCountry.innerText = weatherData.location.country;

  const locationTime = document.createElement("p");
  locationTime.innerText = weatherData.location.localtime;

  const locationTempC = document.createElement("p");
  locationTempC.innerText = `${weatherData.current.temp_c} °C`;

  const condition = document.createElement("p");
  condition.innerText = `${weatherData.current.condition.text} °C`;

  content.appendChild(locationName);
  content.appendChild(locationCountry);
  content.appendChild(locationTime);
  content.appendChild(locationTempC);
  content.appendChild(condition);
}

async function getSevenDayForecast() {
  const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=manchester&days=7", {
    mode: "cors",
  });

  const forecastData = await response.json();

  console.log(forecastData.forecast.forecastday);
}

getWeatherLocation();

getSevenDayForecast();

export { getWeatherLocation, getSevenDayForecast };
