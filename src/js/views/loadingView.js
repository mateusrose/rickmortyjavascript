import loadingImage from "../../img/image.png"

export let loadingView = {
    show: () => {
        const content = document.querySelector("#content");
        content.replaceChildren();

        const img = document.createElement("img");
        img.src= loadingImage;
        img.classList.add("w-1/3", "animation-spin");
        content.appendChild(img);

        const text = document.createElement("h4");
        text.textContent = "Loading";
        text.classList.add("font-morty", "text-4xl", "text-white");
        content.appendChild(text);
    }
}