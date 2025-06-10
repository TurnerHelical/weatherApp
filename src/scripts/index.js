import "../CSS/style.css";
import { weatherManager } from "./weatherManager"

const weather = new weatherManager();

let test = weather.getData(34231);

console.log(test);




