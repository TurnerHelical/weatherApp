import "../CSS/style.css";
import { weatherManager } from "./weatherManager"
import { PageAction } from "./page";
const weather = new weatherManager();
const page = new PageAction();

page.addListener();







