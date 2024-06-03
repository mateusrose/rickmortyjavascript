import { loadingView } from "../views/loadingView"
import { characterService } from "../services/characterService";
import { characterView } from "../views/characterView";
import { notFoundView } from "../views/notFoundView";


export let characterController = {
    init: () => {
        loadingView.show();

        let id = window.location.hash.split("id=")[1] * 1;
        
        let results = characterService.fetch(id);
        

        results.then((result) => {
            characterView.show(result);
        }).catch((err) => {
            err(notFoundView.show())
        })
    }
}