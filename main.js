import { getData } from "./api.js";
import { afficher } from "./ui.js";
import { initSearch } from "./search.js";
const channels = await getData();
afficher(channels);
initSearch(channels);
