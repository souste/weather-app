import "./form";

const content = document.getElementById("content");
const locationInput = document.getElementById("location");
const submitButton = document.querySelector(".submit-button");

async function getWeatherLocation(locationValue) {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=${locationValue}`, {
    mode: "cors",
  });
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

  const icon = document.createElement("img");
  icon.src = weatherData.current.condition.icon;

  locationContainer.appendChild(locationName);
  locationContainer.appendChild(locationCountry);
  locationContainer.appendChild(locationTime);
  locationContainer.appendChild(locationTempC);
  locationContainer.appendChild(condition);
  locationContainer.appendChild(icon);
  content.appendChild(locationContainer);
}

async function getThreeDayForecast(locationValue) {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=${locationValue}&days=3`, {
    mode: "cors",
  });

  const forecastData = await response.json();
  const forecastDay = forecastData.forecast.forecastday;

  const forecastDays = document.createElement("ul");
  forecastDays.className = "forecast-days-container";

  forecastDay.forEach((data) => {
    const singleForecastDay = document.createElement("div");
    singleForecastDay.className = "single-forecast-day-container";

    const dateObject = new Date(data.date);
    const dayOfWeek = dateObject.toLocaleDateString("en-US", { weekday: "long" });
    const forecastDate = document.createElement("li");
    forecastDate.innerText = dayOfWeek;

    const forecastTempHigh = document.createElement("li");
    forecastTempHigh.innerText = `${data.day.maxtemp_c} °C (High)`;

    const forecastTempLow = document.createElement("li");
    forecastTempLow.innerText = `${data.day.mintemp_c} °C (Low)`;

    const forecastCondition = document.createElement("li");
    forecastCondition.innerText = data.day.condition.text;

    const forecastIcon = document.createElement("img");
    forecastIcon.src = data.day.condition.icon;

    singleForecastDay.appendChild(forecastDate);
    singleForecastDay.appendChild(forecastTempHigh);
    singleForecastDay.appendChild(forecastTempLow);
    singleForecastDay.appendChild(forecastCondition);
    singleForecastDay.appendChild(forecastIcon);

    forecastDays.appendChild(singleForecastDay);
  });

  content.appendChild(forecastDays);
}

let locationValue = "";

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  locationValue = locationInput.value;
  console.log(locationInput.value);

  await getWeatherLocation(locationValue);
  await getThreeDayForecast(locationValue);
});

export { getWeatherLocation, getThreeDayForecast };
