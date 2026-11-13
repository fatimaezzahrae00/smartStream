import { getData } from "./api.js";
import { afficher } from "./ui.js";

const inputFilter = document.getElementById("filterInput");

export function initSearch(channels) {
    inputFilter.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase().trim();

        const filtered = channels.filter((channel) =>
            channel.name.toLowerCase().includes(value) ||
            String(channel.channelNumber).includes(value)
        );

        afficher(filtered);
    });
}

