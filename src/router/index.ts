import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import { Preferences } from "@capacitor/preferences";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
    name: "root",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue"),
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
      },
      {
        path: "billetera",
        name: "billetera-view",
        component: () => import("../views/cliente/billetera/index.vue"),
      },
      {
        path: "verificacion",
        name: "verificacion-view",
        component: () => import("../views/cliente/verificacion/index.vue"),
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  try {
    const { value: user } = await Preferences.get({ key: "user" });
    const { value: mode } = await Preferences.get({ key: "mode" });

    if (to.name === "login" && user) {
      mode === "1" ? next({ name: "cliente-home" }) : next();
    } else {
      next();
    }
  } catch (error) {
    console.error("Error al obtener el modo:", error);
    next("/login");
  }
});

export default router;
