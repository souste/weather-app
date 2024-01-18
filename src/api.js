import "./form";

const content = document.getElementById("content");
const weatherContainer = document.createElement("div");
weatherContainer.className = "weather-container";
content.appendChild(weatherContainer);
const locationInput = document.getElementById("location");
const submitButton = document.querySelector(".submit-button");

const locationContainer = document.createElement("div");
locationContainer.className = "location-container";

const forecastDays = document.createElement("ul");
forecastDays.className = "forecast-days-container";

// CREATE AND GET SINGLE WEATHER LOCATION

function createWeatherLocation(weatherData) {
  const locationName = document.createElement("h2");
  locationName.className = "location-name";
  locationName.innerText = weatherData.location.name;

  const locationCountry = document.createElement("p");
  locationCountry.className = "location-country";
  locationCountry.innerText = weatherData.location.country;

  const locationTime = document.createElement("p");
  locationTime.className = "location-time";
  locationTime.innerText = weatherData.location.localtime;

  const locationTempC = document.createElement("p");
  locationTempC.className = "location-temp-c";
  locationTempC.innerText = `${weatherData.current.temp_c} °C`;

  const locationCondition = document.createElement("p");
  locationCondition.className = "location-condition";
  locationCondition.innerText = `${weatherData.current.condition.text} °C`;

  const locationIcon = document.createElement("img");
  locationIcon.className = "location-icon";
  locationIcon.src = weatherData.current.condition.icon;

  locationContainer.appendChild(locationName);
  locationContainer.appendChild(locationCountry);
  locationContainer.appendChild(locationTime);
  locationContainer.appendChild(locationTempC);
  locationContainer.appendChild(locationCondition);
  locationContainer.appendChild(locationIcon);
}

async function getWeatherLocation(locationValue) {
  const response = locationValue
    ? await fetch(`https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=${locationValue}`, {
        mode: "cors",
      })
    : await fetch("https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=Manchester", {
        mode: "cors",
      });

  const weatherData = await response.json();

  createWeatherLocation(weatherData);

  weatherContainer.appendChild(locationContainer);
}

// CREATE AND GET THREE DAY WEATHER FORECAST

function createThreeDayWeatherForecast(forecastDay) {
  forecastDay.forEach((data) => {
    const singleForecastDay = document.createElement("div");
    singleForecastDay.className = "single-forecast-day-container";

    const dateObject = new Date(data.date);
    const dayOfWeek = dateObject.toLocaleDateString("en-US", { weekday: "long" });
    const forecastDate = document.createElement("li");
    forecastDate.className = "forecast-date";
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
}

async function getThreeDayForecast(locationValue) {
  const response = locationValue
    ? await fetch(`https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=${locationValue}&days=3`, {
        mode: "cors",
      })
    : await fetch("https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=Manchester&days=3", {
        mode: "cors",
      });

  const forecastData = await response.json();
  const forecastDay = forecastData.forecast.forecastday;
  createThreeDayWeatherForecast(forecastDay);

  weatherContainer.appendChild(forecastDays);
}

// SUBMIT BUTTON

let locationValue = "";

submitButton.addEventListener("click", async (event) => {
  while (locationContainer.firstChild) {
    locationContainer.removeChild(locationContainer.firstChild);
  }
  while (forecastDays.firstChild) {
    forecastDays.removeChild(forecastDays.firstChild);
  }

  forecastDays.innerHTML = "";
  event.preventDefault();
  locationValue = locationInput.value;
  console.log(locationInput.value);

  await getWeatherLocation(locationValue);
  await getThreeDayForecast(locationValue);
});

// TOGGLE BUTTON

const toggleButton = document.querySelector(".toggle-button");

let click = false;
toggleButton.addEventListener("click", () => {
  click = !click;
  if (click) {
    toggleButton.innerText = "C";
  } else {
    toggleButton.innerText = "F";
  }
});

export { getWeatherLocation, getThreeDayForecast };
