
const element = document.getElementById("element");
const channelImage = document.getElementById("channelImage");

export function afficher(channels) {
    element.innerHTML = "";

    channels.forEach((channel) => {
        const button = document.createElement("button");

        button.className = "bg-blue-800 hover:bg-blue-600 flex items-center gap-4 rounded-lg p-4";

        button.innerHTML = `
            <span class="text-white">${channel.channelNumber}</span>
            <img src="${channel.logo}" class="h-10 rounded-md" alt="">
            <span class="text-white font-semibold">${channel.name}</span>
        `;

        button.addEventListener("click", () => {
            channelImage.src = channel.logo;
        });

        element.appendChild(button);
    });
}
