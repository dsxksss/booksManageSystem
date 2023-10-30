import { createRouter, createWebHashHistory } from "vue-router"
import Home from "./pages/Home.vue"
import My from "./pages/My.vue";
import ProductCar from './pages/ProductCar.vue';

const routesMap = [
    { path: '/', component: Home },
    { path: '/my', component: My },
    { path: '/productCar', component: ProductCar },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routesMap
})

export default router