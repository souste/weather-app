const content = document.getElementById("content");
const header = document.createElement("h1");
header.innerText = "Weather App";

content.appendChild(header);

async function getWeatherLocation() {
  const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=Manchester", { mode: "cors" });
  const weatherData = await response.json();

  const locationContainer = document.createElement("div");
  locationContainer.className = "location-container";

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

  locationContainer.appendChild(locationName);
  locationContainer.appendChild(locationCountry);
  locationContainer.appendChild(locationTime);
  locationContainer.appendChild(locationTempC);
  locationContainer.appendChild(condition);
  content.appendChild(locationContainer);
}

async function getSevenDayForecast() {
  const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=manchester&days=7", {
    mode: "cors",
  });

  const forecastData = await response.json();

  const forecastDay = forecastData.forecast.forecastday;

  const dateInfo = document.createElement("ul");

  forecastDay.forEach((data) => {
    const forecastDate = document.createElement("li");
    forecastDate.innerText = data.date;
    console.log("forecastDate", forecastDate);
    dateInfo.appendChild(forecastDate);
  });

  content.appendChild(dateInfo);
}

getWeatherLocation();

getSevenDayForecast();

export { getWeatherLocation, getSevenDayForecast };
