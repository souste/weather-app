(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["api"],{

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getThreeDayForecast: () => (/* binding */ getThreeDayForecast),
/* harmony export */   getWeatherLocation: () => (/* binding */ getWeatherLocation)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form__WEBPACK_IMPORTED_MODULE_0__);


const content = document.querySelector(".content");
const weatherContainer = document.createElement("div");
weatherContainer.className = "weather-container";
content.appendChild(weatherContainer);
const locationInput = document.getElementById("location");
const submitButton = document.querySelector(".submit-button");

const locationContainer = document.createElement("div");
locationContainer.className = "location-container";

const forecastDays = document.createElement("ul");
forecastDays.className = "forecast-days-container";

const toggleSwitch = document.querySelector(".toggle-switch");
let click = false;

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

let weatherData;
async function getWeatherLocation(locationValue) {
  const response = locationValue
    ? await fetch(`https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=${locationValue}`, {
        mode: "cors",
      })
    : await fetch("https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=Manchester", {
        mode: "cors",
      });

  weatherData = await response.json();

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
    forecastTempHigh.className = "forecast-temp-high";
    forecastTempHigh.innerText = `${data.day.maxtemp_c} °C (High)`;

    const forecastTempLow = document.createElement("li");
    forecastTempLow.className = "forecast-temp-low";
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

let forecastDay;

async function getThreeDayForecast(locationValue) {
  const response = locationValue
    ? await fetch(`https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=${locationValue}&days=3`, {
        mode: "cors",
      })
    : await fetch("https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=Manchester&days=3", {
        mode: "cors",
      });

  const forecastData = await response.json();
  forecastDay = forecastData.forecast.forecastday;
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

  toggleSwitch.parentElement.classList.remove("active");
  click = false;
});

// TOGGLE SWITCH

toggleSwitch.addEventListener("click", () => {
  const locationTemp = document.querySelector(".location-temp-c");
  const forecastTempHigh = document.querySelectorAll(".forecast-temp-high");
  const forecastTempLow = document.querySelectorAll(".forecast-temp-low");

  click = !click;
  if (click) {
    locationTemp.innerText = `${weatherData.current.temp_f} °F`;

    forecastTempHigh.forEach((day, index) => {
      day.innerText = `${forecastDay[index].day.maxtemp_f} °F (High)`;
    });

    forecastTempLow.forEach((day, index) => {
      day.innerText = `${forecastDay[index].day.mintemp_f} °F (Low)`;
    });
  } else {
    locationTemp.innerText = `${weatherData.current.temp_c} °C`;

    forecastTempHigh.forEach((day, index) => {
      day.innerText = `${forecastDay[index].day.maxtemp_c} °F (High)`;
    });

    forecastTempLow.forEach((day, index) => {
      day.innerText = `${forecastDay[index].day.mintemp_c} °F (Low)`;
    });
  }
});

function toggleHandler(event) {
  event.preventDefault();
  event.currentTarget.parentElement.classList.toggle("active");
}

toggleSwitch.addEventListener("click", toggleHandler);




/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ (() => {

const content = document.createElement("div");
content.className = "content";
document.body.appendChild(content);

const formContainer = document.createElement("div");
formContainer.className = "form-container";

const formHTML = `
<div class="outside-form-container">
<form class="form" action="">
<input type="text" id="location" name="location" placeholder="Enter Location" />
<button class="submit-button"><img src="../src/search.png" /></button>
</form>
<div class="toggle">
<div class="toggle-label">C</div>
<div class="toggle-switch"></div>
<div class="toggle-label active">F</div>
</div>
</div>
`;

formContainer.innerHTML = formHTML;
content.appendChild(formContainer);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/api.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLDRCQUE0Qjs7QUFFM0Q7QUFDQTtBQUNBLG1DQUFtQyxvQ0FBb0M7O0FBRXZFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1R0FBdUcsY0FBYztBQUNySDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0RBQStELGlCQUFpQjtBQUNoRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQyxvQkFBb0I7O0FBRXhEO0FBQ0E7QUFDQSxtQ0FBbUMsb0JBQW9COztBQUV2RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdUdBQXVHLGNBQWM7QUFDckg7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLDRCQUE0Qjs7QUFFNUQ7QUFDQSx5QkFBeUIsa0NBQWtDO0FBQzNELEtBQUs7O0FBRUw7QUFDQSx5QkFBeUIsa0NBQWtDO0FBQzNELEtBQUs7QUFDTCxJQUFJO0FBQ0osZ0NBQWdDLDRCQUE0Qjs7QUFFNUQ7QUFDQSx5QkFBeUIsa0NBQWtDO0FBQzNELEtBQUs7O0FBRUw7QUFDQSx5QkFBeUIsa0NBQWtDO0FBQzNELEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRW1EOzs7Ozs7Ozs7OztBQzNMbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vZm9ybVwiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG53ZWF0aGVyQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwid2VhdGhlci1jb250YWluZXJcIjtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRhaW5lcik7XG5jb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKTtcbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWJ1dHRvblwiKTtcblxuY29uc3QgbG9jYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubG9jYXRpb25Db250YWluZXIuY2xhc3NOYW1lID0gXCJsb2NhdGlvbi1jb250YWluZXJcIjtcblxuY29uc3QgZm9yZWNhc3REYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuZm9yZWNhc3REYXlzLmNsYXNzTmFtZSA9IFwiZm9yZWNhc3QtZGF5cy1jb250YWluZXJcIjtcblxuY29uc3QgdG9nZ2xlU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtc3dpdGNoXCIpO1xubGV0IGNsaWNrID0gZmFsc2U7XG5cbi8vIENSRUFURSBBTkQgR0VUIFNJTkdMRSBXRUFUSEVSIExPQ0FUSU9OXG5cbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJMb2NhdGlvbih3ZWF0aGVyRGF0YSkge1xuICBjb25zdCBsb2NhdGlvbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGxvY2F0aW9uTmFtZS5jbGFzc05hbWUgPSBcImxvY2F0aW9uLW5hbWVcIjtcbiAgbG9jYXRpb25OYW1lLmlubmVyVGV4dCA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWU7XG5cbiAgY29uc3QgbG9jYXRpb25Db3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxvY2F0aW9uQ291bnRyeS5jbGFzc05hbWUgPSBcImxvY2F0aW9uLWNvdW50cnlcIjtcbiAgbG9jYXRpb25Db3VudHJ5LmlubmVyVGV4dCA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnk7XG5cbiAgY29uc3QgbG9jYXRpb25UaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxvY2F0aW9uVGltZS5jbGFzc05hbWUgPSBcImxvY2F0aW9uLXRpbWVcIjtcbiAgbG9jYXRpb25UaW1lLmlubmVyVGV4dCA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZTtcblxuICBjb25zdCBsb2NhdGlvblRlbXBDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxvY2F0aW9uVGVtcEMuY2xhc3NOYW1lID0gXCJsb2NhdGlvbi10ZW1wLWNcIjtcbiAgbG9jYXRpb25UZW1wQy5pbm5lclRleHQgPSBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfY30gwrBDYDtcblxuICBjb25zdCBsb2NhdGlvbkNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsb2NhdGlvbkNvbmRpdGlvbi5jbGFzc05hbWUgPSBcImxvY2F0aW9uLWNvbmRpdGlvblwiO1xuICBsb2NhdGlvbkNvbmRpdGlvbi5pbm5lclRleHQgPSBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0fSDCsENgO1xuXG4gIGNvbnN0IGxvY2F0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxvY2F0aW9uSWNvbi5jbGFzc05hbWUgPSBcImxvY2F0aW9uLWljb25cIjtcbiAgbG9jYXRpb25JY29uLnNyYyA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG5cbiAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25OYW1lKTtcbiAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25Db3VudHJ5KTtcbiAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25UaW1lKTtcbiAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25UZW1wQyk7XG4gIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uQ29uZGl0aW9uKTtcbiAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25JY29uKTtcbn1cblxubGV0IHdlYXRoZXJEYXRhO1xuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckxvY2F0aW9uKGxvY2F0aW9uVmFsdWUpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBsb2NhdGlvblZhbHVlXG4gICAgPyBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MTY0MjE0NjA4YzBjNGNhNmIyYTExMjgwMzI0MDkwMSZxPSR7bG9jYXRpb25WYWx1ZX1gLCB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfSlcbiAgICA6IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MTY0MjE0NjA4YzBjNGNhNmIyYTExMjgwMzI0MDkwMSZxPU1hbmNoZXN0ZXJcIiwge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH0pO1xuXG4gIHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGNyZWF0ZVdlYXRoZXJMb2NhdGlvbih3ZWF0aGVyRGF0YSk7XG5cbiAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkNvbnRhaW5lcik7XG59XG5cbi8vIENSRUFURSBBTkQgR0VUIFRIUkVFIERBWSBXRUFUSEVSIEZPUkVDQVNUXG5cbmZ1bmN0aW9uIGNyZWF0ZVRocmVlRGF5V2VhdGhlckZvcmVjYXN0KGZvcmVjYXN0RGF5KSB7XG4gIGZvcmVjYXN0RGF5LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICBjb25zdCBzaW5nbGVGb3JlY2FzdERheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2luZ2xlRm9yZWNhc3REYXkuY2xhc3NOYW1lID0gXCJzaW5nbGUtZm9yZWNhc3QtZGF5LWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgZGF0ZU9iamVjdCA9IG5ldyBEYXRlKGRhdGEuZGF0ZSk7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZU9iamVjdC50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7IHdlZWtkYXk6IFwibG9uZ1wiIH0pO1xuICAgIGNvbnN0IGZvcmVjYXN0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBmb3JlY2FzdERhdGUuY2xhc3NOYW1lID0gXCJmb3JlY2FzdC1kYXRlXCI7XG4gICAgZm9yZWNhc3REYXRlLmlubmVyVGV4dCA9IGRheU9mV2VlaztcblxuICAgIGNvbnN0IGZvcmVjYXN0VGVtcEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZm9yZWNhc3RUZW1wSGlnaC5jbGFzc05hbWUgPSBcImZvcmVjYXN0LXRlbXAtaGlnaFwiO1xuICAgIGZvcmVjYXN0VGVtcEhpZ2guaW5uZXJUZXh0ID0gYCR7ZGF0YS5kYXkubWF4dGVtcF9jfSDCsEMgKEhpZ2gpYDtcblxuICAgIGNvbnN0IGZvcmVjYXN0VGVtcExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBmb3JlY2FzdFRlbXBMb3cuY2xhc3NOYW1lID0gXCJmb3JlY2FzdC10ZW1wLWxvd1wiO1xuICAgIGZvcmVjYXN0VGVtcExvdy5pbm5lclRleHQgPSBgJHtkYXRhLmRheS5taW50ZW1wX2N9IMKwQyAoTG93KWA7XG5cbiAgICBjb25zdCBmb3JlY2FzdENvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBmb3JlY2FzdENvbmRpdGlvbi5pbm5lclRleHQgPSBkYXRhLmRheS5jb25kaXRpb24udGV4dDtcblxuICAgIGNvbnN0IGZvcmVjYXN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZm9yZWNhc3RJY29uLnNyYyA9IGRhdGEuZGF5LmNvbmRpdGlvbi5pY29uO1xuXG4gICAgc2luZ2xlRm9yZWNhc3REYXkuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXRlKTtcbiAgICBzaW5nbGVGb3JlY2FzdERheS5hcHBlbmRDaGlsZChmb3JlY2FzdFRlbXBIaWdoKTtcbiAgICBzaW5nbGVGb3JlY2FzdERheS5hcHBlbmRDaGlsZChmb3JlY2FzdFRlbXBMb3cpO1xuICAgIHNpbmdsZUZvcmVjYXN0RGF5LmFwcGVuZENoaWxkKGZvcmVjYXN0Q29uZGl0aW9uKTtcbiAgICBzaW5nbGVGb3JlY2FzdERheS5hcHBlbmRDaGlsZChmb3JlY2FzdEljb24pO1xuXG4gICAgZm9yZWNhc3REYXlzLmFwcGVuZENoaWxkKHNpbmdsZUZvcmVjYXN0RGF5KTtcbiAgfSk7XG59XG5cbmxldCBmb3JlY2FzdERheTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0VGhyZWVEYXlGb3JlY2FzdChsb2NhdGlvblZhbHVlKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gbG9jYXRpb25WYWx1ZVxuICAgID8gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTE2NDIxNDYwOGMwYzRjYTZiMmExMTI4MDMyNDA5MDEmcT0ke2xvY2F0aW9uVmFsdWV9JmRheXM9M2AsIHtcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICB9KVxuICAgIDogYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0xNjQyMTQ2MDhjMGM0Y2E2YjJhMTEyODAzMjQwOTAxJnE9TWFuY2hlc3RlciZkYXlzPTNcIiwge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH0pO1xuXG4gIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgZm9yZWNhc3REYXkgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gIGNyZWF0ZVRocmVlRGF5V2VhdGhlckZvcmVjYXN0KGZvcmVjYXN0RGF5KTtcblxuICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcmVjYXN0RGF5cyk7XG59XG5cbi8vIFNVQk1JVCBCVVRUT05cblxubGV0IGxvY2F0aW9uVmFsdWUgPSBcIlwiO1xuXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChldmVudCkgPT4ge1xuICB3aGlsZSAobG9jYXRpb25Db250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGxvY2F0aW9uQ29udGFpbmVyLnJlbW92ZUNoaWxkKGxvY2F0aW9uQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG4gIHdoaWxlIChmb3JlY2FzdERheXMuZmlyc3RDaGlsZCkge1xuICAgIGZvcmVjYXN0RGF5cy5yZW1vdmVDaGlsZChmb3JlY2FzdERheXMuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBmb3JlY2FzdERheXMuaW5uZXJIVE1MID0gXCJcIjtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgbG9jYXRpb25WYWx1ZSA9IGxvY2F0aW9uSW5wdXQudmFsdWU7XG4gIGNvbnNvbGUubG9nKGxvY2F0aW9uSW5wdXQudmFsdWUpO1xuXG4gIGF3YWl0IGdldFdlYXRoZXJMb2NhdGlvbihsb2NhdGlvblZhbHVlKTtcbiAgYXdhaXQgZ2V0VGhyZWVEYXlGb3JlY2FzdChsb2NhdGlvblZhbHVlKTtcblxuICB0b2dnbGVTd2l0Y2gucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBjbGljayA9IGZhbHNlO1xufSk7XG5cbi8vIFRPR0dMRSBTV0lUQ0hcblxudG9nZ2xlU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb24tdGVtcC1jXCIpO1xuICBjb25zdCBmb3JlY2FzdFRlbXBIaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdC10ZW1wLWhpZ2hcIik7XG4gIGNvbnN0IGZvcmVjYXN0VGVtcExvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3QtdGVtcC1sb3dcIik7XG5cbiAgY2xpY2sgPSAhY2xpY2s7XG4gIGlmIChjbGljaykge1xuICAgIGxvY2F0aW9uVGVtcC5pbm5lclRleHQgPSBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZn0gwrBGYDtcblxuICAgIGZvcmVjYXN0VGVtcEhpZ2guZm9yRWFjaCgoZGF5LCBpbmRleCkgPT4ge1xuICAgICAgZGF5LmlubmVyVGV4dCA9IGAke2ZvcmVjYXN0RGF5W2luZGV4XS5kYXkubWF4dGVtcF9mfSDCsEYgKEhpZ2gpYDtcbiAgICB9KTtcblxuICAgIGZvcmVjYXN0VGVtcExvdy5mb3JFYWNoKChkYXksIGluZGV4KSA9PiB7XG4gICAgICBkYXkuaW5uZXJUZXh0ID0gYCR7Zm9yZWNhc3REYXlbaW5kZXhdLmRheS5taW50ZW1wX2Z9IMKwRiAoTG93KWA7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgbG9jYXRpb25UZW1wLmlubmVyVGV4dCA9IGAke3dlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jfSDCsENgO1xuXG4gICAgZm9yZWNhc3RUZW1wSGlnaC5mb3JFYWNoKChkYXksIGluZGV4KSA9PiB7XG4gICAgICBkYXkuaW5uZXJUZXh0ID0gYCR7Zm9yZWNhc3REYXlbaW5kZXhdLmRheS5tYXh0ZW1wX2N9IMKwRiAoSGlnaClgO1xuICAgIH0pO1xuXG4gICAgZm9yZWNhc3RUZW1wTG93LmZvckVhY2goKGRheSwgaW5kZXgpID0+IHtcbiAgICAgIGRheS5pbm5lclRleHQgPSBgJHtmb3JlY2FzdERheVtpbmRleF0uZGF5Lm1pbnRlbXBfY30gwrBGIChMb3cpYDtcbiAgICB9KTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRvZ2dsZUhhbmRsZXIoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG59XG5cbnRvZ2dsZVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlSGFuZGxlcik7XG5cbmV4cG9ydCB7IGdldFdlYXRoZXJMb2NhdGlvbiwgZ2V0VGhyZWVEYXlGb3JlY2FzdCB9O1xuIiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGVudFwiO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5mb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZm9ybS1jb250YWluZXJcIjtcblxuY29uc3QgZm9ybUhUTUwgPSBgXG48ZGl2IGNsYXNzPVwib3V0c2lkZS1mb3JtLWNvbnRhaW5lclwiPlxuPGZvcm0gY2xhc3M9XCJmb3JtXCIgYWN0aW9uPVwiXCI+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImxvY2F0aW9uXCIgbmFtZT1cImxvY2F0aW9uXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBMb2NhdGlvblwiIC8+XG48YnV0dG9uIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiPjxpbWcgc3JjPVwiLi4vc3JjL3NlYXJjaC5wbmdcIiAvPjwvYnV0dG9uPlxuPC9mb3JtPlxuPGRpdiBjbGFzcz1cInRvZ2dsZVwiPlxuPGRpdiBjbGFzcz1cInRvZ2dsZS1sYWJlbFwiPkM8L2Rpdj5cbjxkaXYgY2xhc3M9XCJ0b2dnbGUtc3dpdGNoXCI+PC9kaXY+XG48ZGl2IGNsYXNzPVwidG9nZ2xlLWxhYmVsIGFjdGl2ZVwiPkY8L2Rpdj5cbjwvZGl2PlxuPC9kaXY+XG5gO1xuXG5mb3JtQ29udGFpbmVyLmlubmVySFRNTCA9IGZvcm1IVE1MO1xuY29udGVudC5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==