import banner from "../../img/banner.png"
import { homeController } from "../controllers/homeController";

export let homeView = {
    show: (result, currentPage) => {
        let results = result.results;

        let content = document.querySelector("#content");
        content.replaceChildren();


        //components
        //mudar logica das paginas : pedido fetch tenho de alterar mas as informacoes mais completas dizem o maximo de paginas, assim consigo fazer auto e funciona com as pesquisas




        let img = document.createElement("img");
        img.src = banner;
        img.classList.add("h-96", "object-cover", "w-screen", "outline-white", "outline");
        content.appendChild(img);



        let input = document.createElement("input")
        input.placeholder = "Looking for someone?"
        input.classList.add("rounded-full", "p-2", "outline-2", "outline", "mt-6");
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                window.location.hash = "#home?page=1&name=" + input.value
            }

        })
        content.appendChild(input);
        pageSliding()





        function pageSliding() {
            let pageSlider = document.createElement("div");
            pageSlider.classList.add("flex", "mt-7")

            if (result.info.prev) {
                let back = document.createElement("button");
                back.textContent = "<";

                back.classList.add("bg-grey-lighter", "outline", "rounded-full", "outline-2", "px-4", "pt-3", "pb-4", "shadow-lg", "bg-white", "h-full");
                back.addEventListener('click', () => {
                    let condition = window.location.hash.includes("?page=")
                    if (condition) {
                        let location = result.info.prev.split("page=")[1]

                        window.location.hash = `#home?page=${location}`
                        //need to add here logic for accepting arguments
                    }
                    else {
                        window.location.hash = "#home?page=1"
                    }
                })
                pageSlider.appendChild(back);
            }




            let pages = document.createElement("h5");
            //fix what is showing
            currentPage = currentPage || 1
            pages.textContent = "Page " + currentPage + "" + " of " + result.info.pages;

            pages.classList.add("font-morty", "text-3xl", "text-white", "ml-6", "mr-6", "mt-2");

            pageSlider.appendChild(pages);

            content.appendChild(pageSlider);



            if (result.info.next) {
                let next = document.createElement("button");
                next.addEventListener('click', () => {
                    let condition = window.location.hash.includes("?page=")

                    if (condition) {

                        let location = result.info.next.split("page=")[1]
                        console.log(location[1])
                        window.location.hash = `#home?page=${location}`
                    }
                    else {
                        window.location.hash = "#home?page=2"
                    }
                })
                next.textContent = ">"
                next.classList.add("bg-grey-lighter", "outline-2", "rounded-full", "outline", "px-4", "pt-3", "pb-4", "shadow-lg", "bg-white", "h-full");

                pageSlider.appendChild(next);
            }
        }


        let cardContainer = document.createElement("div");
        cardContainer.classList.add("w-full", "lg:w-10/12", "h-full", "grid", "grid-cols-2", "sm:grid-cols-3","lg:grid-cols-4", "items-center", "justify-center", "ml-0", "lg:ml-7")
        content.appendChild(cardContainer);


        results.forEach((result, index) => {
            setTimeout(() => {
                let card = document.createElement("a");
                card.classList.add("items-center", "cursor-pointer", "flex", "justify-center", "text-center", "flex-col", "rounded-2xl", "bg-white", "m-6", "overflow-hidden", "max-w-xs", "hover:shadow-2xl", "outline", "transition", "duration-300", "hover:scale-110", "animate-fade-in");
                card.addEventListener('click', () => {
                    console.log(result.url);
                    window.location.hash = `#character?id=${result.id}`;
                })
                let h4 = document.createElement("h4");
                h4.textContent = result.name;
                h4.classList.add("font-bold", "text-xl", "mb-2", "font-morty", "pt-2");
                card.appendChild(h4);

                let img = document.createElement("img");
                img.src = result.image;
                //img.classList.add("w-full")
                card.appendChild(img);

                let p = document.createElement("p");
                p.textContent = result.species;
                p.classList.add("font-morty")
                card.appendChild(p);

                cardContainer.appendChild(card);
            }, index * 100)

        })

pageSliding();

    }
}