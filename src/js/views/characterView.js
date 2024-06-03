import bgImage from "../../img/char.png"
export let characterView = {
    show: (result) => {
        let content = document.querySelector("#content");
        content.replaceChildren();

        const banner = document.createElement("img");
        banner.src = bgImage;
        banner.classList.add("h-96", "object-cover", "w-screen", "outline", "outline-white", "-mb-24");
        content.appendChild(banner);

        //need to move div down in page
        const container = document.createElement("div");
        container.classList.add( "flex", "flex-col", "items-center","-mt-24", "animate__animated", "animate__fadeInDown", "bg-white","w-5/6", "sm:w-3/6", "h-5/6", "rounded-2xl", "p-16", "outline", "outline-white", "bg-pink-600", "bg-opacity-80", "mb-20");

        const h1 = document.createElement("h1");
        h1.textContent = result.name;
        h1.classList.add("font-morty", "text-8xl", "text-white", "pa-2", "pb-6");
        container.appendChild(h1);

        const div = document.createElement("div");
        div.classList.add("w-82", "h-82", "rounded-full", "bg-white", "mx-auto", "overflow-hidden", "outline", "outline-white", "animate__animated", "animate__zoomIn", "mb-6");
        container.appendChild(div);

        const img = document.createElement("img");
        img.src = result.image;
        img.classList.add("h-full", "w-full");
        div.appendChild(img);

        content.appendChild(container);

        createH4("Species: " + result.species, container);
        createH4("Status: " + result.status, container);
        createH4("From: " + result.origin.name, container);
        createH4("Last seen on: " + result.location.name, container);

        const button = document.createElement("button");
        button.textContent = "Back";
        button.classList.add("bg-grey-lighter", "outline", "rounded-full", "outline-2", "px-4", "pt-3", "pb-4", "shadow-lg", "bg-white");
        button.addEventListener('click', () => {
            window.location.hash = "#home?page=" + (Math.ceil(result.id / 20));
        });
        container.appendChild(button);

        function createH4(text, target) {
            const h4 = document.createElement("h4");
            h4.textContent = text;
            h4.classList.add("text-xl", "text-white", "shadow-black", "mb-6", "space-y-1");
            target.appendChild(h4);
        }
    }
}