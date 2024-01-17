import "./style.css";
import { getWeatherLocation, getThreeDayForecast } from "./api";

// const content = document.getElementById("content");

// const header = document.createElement("h1");
// header.innerText = "Weather App";

// content.appendChild(header);

getWeatherLocation();

getThreeDayForecast();
