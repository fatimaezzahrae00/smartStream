import { getData } from "./api.js";
import { afficher } from "./ui.js";
import { initSearch } from "./search.js";
const channels = await getData();
afficher(channels);
initSearch(channels);

 

const Documentaires = document.getElementById('Documentaires');
const sports = document.getElementById('Sports');
const enfant = document.getElementById('Enfant');


// export function filterItems(filter) {
//     filterBtns.forEach(btn => {
//         btn.addEventListener("click", () => {
            
//         });
//     });
// }
const section = document.getElementById('btnscontainer')

section.addEventListener('click', function filterBtns(e) {
    const btn = e.target.closest('button')
    if (!btn) return

    const filtered = btn.id === 'all'
        ? channels
        : channels.filter(channel => channel.category.toLowerCase() === btn.id.toLowerCase())

    afficher(filtered)
})
