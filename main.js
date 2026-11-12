import { getData } from "./api.js";
import { afficher } from "./ui.js";
const channels = await getData();
afficher(channels);
console.log(channels);