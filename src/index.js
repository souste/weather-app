import "./style.css";
import { getWeatherLocation, getThreeDayForecast } from "./api";

const content = document.getElementById("content");
const header = document.createElement("h1");
header.innerText = "Weather App";
const formContainer = document.createElement("div");
formContainer.className = "form-container";

content.appendChild(header);

getWeatherLocation();

getThreeDayForecast();

const formHTML = `
<form class="form" action="">
<label for="location">Enter City:</label>
<input type="text" id="location" name="location" placeholder="Manchester" />
</form>
`;

formContainer.innerHTML = formHTML;
content.appendChild(formContainer);
