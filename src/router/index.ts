import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/cliente/home",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/cliente",
    name: "cliente",
    component: () => import("../views/cliente/index.vue"),
    children: [
      {
        path: "home",
        name: "cliente-home",
        component: () => import("../views/cliente/home/index.vue"),
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
