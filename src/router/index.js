import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GaleriaView from "../views/GaleriaView.vue";
import CuidadosView from "../views/CuidadosView.vue";
import InfoView from "../views/InfoView.vue";
import PasivasView from "../views/info-categ/PasivasView.vue";
import ActivasView from "../views/info-categ/ActivasView.vue";
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
    ,
    {
        path: "/info",
        name: "info",
        component: InfoView,
        children: [
            {
                path: "pasivas",
                name: "pasivas",
                component: PasivasView,
            },
            {
                path: "activas",
                name: "activas",
                component: ActivasView,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
