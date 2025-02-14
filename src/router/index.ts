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
      },
      {
        path: "servicios",
        name: "servicios-view",
        component: () => import("../views/cliente/servicios/index.vue"),
      },
      {
        path: "user",
        name: "user-view",
        component: () => import("../views/cliente/user-view/index.vue"),
      },
      {
        path: "chat",
        name: "chat-view",
        component: () => import("../views/cliente/chats-view/index.vue"),
      },
      {
        path: "ordenes",
        name: "ordenes-view",
        component: () => import("../views/cliente/ordenes/index.vue"),
      },
      {
        path: "notificaciones",
        name: "notificaciones-view",
        component: () => import("../views/cliente/notificaciones/index.vue"),
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
