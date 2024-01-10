import "./style.css";
// import printMe from "./print.js";

fetch(
  "https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=manchester",
  { mode: "cors" },
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.current.wind_mph);
  });
