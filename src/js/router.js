import { homeController } from "./controllers/homeController.js";
import { characterController } from "./controllers/characterController.js";
//module to be exported
let router;

router = {
    //possible has routings
    routes: {
        home: {
            hash: '#home',
            controller: homeController
        },
        character: {
            hash: '#character',
            controller: characterController
        }
    },

    start: () => {
        router.routes.home.controller.init();
        window.addEventListener('hashchange', () => {
            try {
                router.getRoute(router.routes);
            }
            catch (err) {
                window.location.hash = '#home'
                router.routes.home.controller.init();
            }
        })
    },

    getRoute: (routes) => {
        var obj = Object.values(routes).find((route) => window.location.hash.startsWith(route.hash));
      
        obj.controller.init();
    }
}

export default router;