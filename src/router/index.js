import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GaleriaView from "../views/GaleriaView.vue";
import CuidadosView from "../views/CuidadosView.vue";
import InfoView from "../views/InfoView.vue";
const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/gallery",
        name: "gallery",
        component: GaleriaView,
    },
    {
        path: "/ciudados",
        name: "ciudados",
        component: CuidadosView,
    },
    {
        path: "/info",
        name: "info",
        component: InfoView,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
