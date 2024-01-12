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

  const forecastDays = document.createElement("ul");
  forecastDays.className = "forecast-days-container";

  forecastDay.forEach((data) => {
    const singleForecastDay = document.createElement("div");
    singleForecastDay.className = "single-forecast-day-container";

    const forecastDate = document.createElement("li");
    forecastDate.innerText = data.date;
    const forecastTempHigh = document.createElement("li");
    forecastTempHigh.innerText = `${data.day.maxtemp_c} °C (High)`;
    const forecastTempLow = document.createElement("li");
    forecastTempLow.innerText = `${data.day.mintemp_c} °C (Low)`;

    singleForecastDay.appendChild(forecastDate);
    singleForecastDay.appendChild(forecastTempHigh);
    singleForecastDay.appendChild(forecastTempLow);
    forecastDays.appendChild(singleForecastDay);
  });

  content.appendChild(forecastDays);
}

getWeatherLocation();

getSevenDayForecast();

export { getWeatherLocation, getSevenDayForecast };
