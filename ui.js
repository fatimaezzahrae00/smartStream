
const element = document.getElementById("element");
const channelImage = document.getElementById("channelImage");

export function afficher(channels) {
    element.innerHTML = "";

    channels.forEach((channel) => {
        element.innerHTML += `
            <button class="md:hover:bg-blue-600 bg-blue-800 flex flex-row items-center gap-4 rounded-lg p-4">
                <span class="text-white font-sans">${channel.channelNumber}</span>

                <img src="${channel.logo}" class="h-10 rounded-md" alt="">

                <div class="flex flex-col gap-1">
                    <span class="text-white font-semibold">${channel.name}</span>
                    
                </div>
            </button>
        `;
    });

    const buttons = element.querySelectorAll("button");
    const para = document.getElementById("para");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            channelImage.src = channels[index].previewImage;
            para.textContent = channels[index].name;
        });
    });
}
