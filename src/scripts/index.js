import "../CSS/style.css";
import { weatherAPI } from "./apiCalls";

const weatherCall = new weatherAPI();

const weatherData = weatherCall.weatherCall(34231);
console.log(weatherData);