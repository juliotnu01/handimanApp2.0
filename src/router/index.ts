import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import { Preferences } from "@capacitor/preferences";
import { useAppStore } from "@/stores/appStore.js";

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
    path: "/validate-email-code",
    name: "validate.email.code",
    component: () => import("../views/ValidateEmail/index.vue"),
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
      },
      {
        path: "certificados",
        name: "certificados-view",
        component: () => import("../views/cliente/certificados/index.vue"),
      },
      {
        path: "payment-method",
        name: "paymentMethod-view",
        component: () => import("../views/cliente/paymentMethod/index.vue"),
      },
      {
        path: "configuracion",
        name: "configuracion-view",
        component: () => import("../views/cliente/configuracion/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to: any, from: any, next: any) => {
  const appStore = useAppStore();
  appStore.setIsLoading(true);

  try {
    const { value: user }: any = await Preferences.get({ key: "user" });
    const { value: mode }: any = await Preferences.get({ key: "mode" });
    const parsedUser = JSON.parse(user);

    const { value: emailValidated } = await Preferences.get({
      key: "emailValidated",
    });
    const isEmailValidated = emailValidated === "true";

    const protectedRoutes = [
      "cliente-home",
      "categorias-view",
      "productos-view",
      "servicios-view",
      "user-view",
      "chat-view",
      "ordenes-view",
      "notificaciones-view",
      "billetera-view",
      "verificacion-view",
      "certificados-view",
      "paymentMethod-view",
      "configuracion-view",
    ];

    if (user) {
      if (protectedRoutes.includes(to.name) && !isEmailValidated) {
        return next({ name: "validate.email.code" });
      }

      if (to.name === "login") {
        if (mode === "1") {
          if (!parsedUser.basic_information) {
            return next({ name: "configuracion-view" });
          }
          return next({ name: "cliente-home" });
        } else {
          if (!parsedUser.basic_information) {
            return next({ name: "configuracion-view" });
          }
          return next();
        }
      }

      if (
        to.name !== "login" &&
        !isEmailValidated &&
        to.name !== "validate.email.code"
      ) {
        return next({ name: "validate.email.code" });
      }
      appStore.getUserbyId(parsedUser.id);
      next();
    } else {
      if (to.name !== "login") {
        return next({ name: "login" });
      }
      next();
    }
  } catch (error) {
    console.error("Error en router.beforeEach:", error);
    next({ name: "login" });
  } finally {
    appStore.setIsLoading(false);
  }
});

router.afterEach(() => {
  const appStore = useAppStore();
  appStore.setIsLoading(false);
});

export default router;
