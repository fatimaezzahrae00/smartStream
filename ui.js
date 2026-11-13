
const element = document.getElementById("element");
const channelImage = document.getElementById("channelImage");

export function afficher(channels) {
    element.innerHTML = "";

    channels.forEach((channel) => {
        element.innerHTML += `
            <button data-categ="${channel.category}" class="md:hover:bg-blue-600 bg-blue-800 flex flex-row items-center gap-4 rounded-lg p-4">
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
            const video = document.getElementById('video')
            video.innerHTML = `
<video-player>
  <video-skin style="display: block; width: 100%; aspect-ratio: 16 / 9; --media-controls-before-start: visible;">
    <hlsjs-video src="https://stream.mux.com/BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM.m3u8" playsinline></hlsjs-video>
  </video-skin>
</video-player>`
            para.textContent = channels[index].name;
        });
    });
}
