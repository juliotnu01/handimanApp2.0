import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/cliente/home",
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
      },
      {
        path: "categorias",
        name: "categorias-view",
        component: () => import("../views/cliente/categorias/index.vue"),
      },
      {
        path: "productos",
        name: "productos-view",
        component: () => import("../views/cliente/productos/index.vue"),
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
