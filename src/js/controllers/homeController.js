import { loadingView } from "../views/loadingView"
import { homeService } from "../services/homeService";
import { homeView } from "../views/homeView";
import { notFoundView } from "../views/notFoundView";

export let homeController = {
    init: () => {
        loadingView.show();

       
        let currentHash = window.location.hash
        let results;
        let currentPage;

        if (window.location.hash.includes("&")) {
            const queryString = currentHash.split('?')[1]; 
            const matches = queryString.match(/=[^&]+/g); 
            const result = matches ? matches.map(match => match.substring(1)) : []; 
           
            results = homeService.fetchBySomething(result);
            currentPage = result[0];
        }
        else {
            let page = window.location.hash.split("page=")[1] * 1;
            results = homeService.fetch(page);
            currentPage = page;
        }
        
        results.then((result) => {
            homeView.show(result, currentPage);
        })
        .catch((err) => {
            err(notFoundView.show());
        })


    }
}