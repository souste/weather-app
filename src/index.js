import "./style.css";

// const content = document.getElementById("content");

async function getWeatherLocation() {
  const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=manchester", { mode: "cors" });
  const weatherData = await response.json();
  console.log(weatherData.location);
}

getWeatherLocation();
