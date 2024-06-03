import errorImage from "../../img/error.png"

export let notFoundView = {
    show: () => {
        const content = document.querySelector("#content");
        content.replaceChildren();

        const div = document.createElement("div");
        div.classList.add("min-h-8/12", "overflow-x-auto", "justify-center", "items-center", "flex", "overflow-hidden")
        const img = document.createElement("img");
        img.src= errorImage;
        img.classList.add("h-screen", "object-cover")
        content.appendChild(img);

         const button = document.createElement("button");
        button.textContent = "Back";
        button.classList.add("bg-grey-lighter", "outline", "rounded-full", "outline-2", "px-4", "pt-3", "pb-4", "shadow-lg", "bg-white", "h-full");
        button.addEventListener('click', () => {
            window.location.hash = "#home?page=1"
        })
        content.appendChild(button);
       /*  const text = document.createElement("h4");
        text.textContent = "How you end up here? I advise you to go back moron.";
        text.classList.add("font-morty", "text-4xl", "text-white");
        content.appendChild(text); */
    }
}