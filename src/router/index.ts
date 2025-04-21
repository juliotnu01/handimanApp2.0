import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import { Preferences } from "@capacitor/preferences";
import { useAppStore } from "@/stores/appStore.js";
import { showToast } from "@/utils/toast"; // Importa la utilidad de toast

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
    meta: { requiresAuth: false },
  },
  {
    path: "/validate-email-code",
    name: "validate.email.code",
    component: () => import("../views/ValidateEmail/index.vue"),
    meta: { requiresAuth: true, requiresEmailVerification: false },
  },
  {
    path: "/cliente",
    name: "cliente",
    component: () => import("../views/cliente/index.vue"),
    meta: {
      requiresAuth: true,
      requiresEmailVerification: true,
      requiresBasicInfo: true,
    },
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
        meta: { requiresAuth: true },
      },
      {
        path: "direccion-envio",
        name: "direccion-envio-view",
        component: () => import("../views/cliente/DireccionesDeEnvio/index.vue"),
        meta: { requiresAuth: true },
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

  const isAuthenticated = async () => {
    const { value: user } = await Preferences.get({ key: "user" });
    return !!user;
  };

  const isEmailVerified = async () => {
    const { value: emailValidated } = await Preferences.get({
      key: "emailValidated",
    });
    return emailValidated === "true";
  };

  const isBasicInfoComplete = async () => {
    const { value: user } = await Preferences.get({ key: "user" });
    if (user) {
      const parsedUser = JSON.parse(user);
      return !!parsedUser?.basic_information;
    }
    return false;
  };

  if (to.meta.requiresAuth && !(await isAuthenticated())) {
    appStore.setIsLoading(false);
    return next({ name: "login" });
  }

  if (
    to.meta.requiresAuth &&
    to.meta.requiresEmailVerification &&
    !(await isEmailVerified()) &&
    to.name !== "validate.email.code"
  ) {
    appStore.setIsLoading(false);
    return next({ name: "validate.email.code" });
  }
  if (
    to.meta.requiresAuth &&
    to.meta.requiresBasicInfo &&
    !(await isBasicInfoComplete()) &&
    to.name !== "configuracion-view"
  ) {
    const { value: user } = await Preferences.get({ key: "user" });
    const parsedUser = user ? JSON.parse(user) : null;
    if (parsedUser) {
      appStore.getUserbyId(parsedUser.id);
    }
    showToast("Completa tu información básica para continuar.", 3000);
    appStore.setIsLoading(false);
    return next({ name: "configuracion-view" });
  }

  if (to.name === "login" && (await isAuthenticated())) {
    const { value: mode } = await Preferences.get({ key: "mode" });
    const isInfoComplete = await isBasicInfoComplete();
    if (isInfoComplete) {
      appStore.setIsLoading(false);
      return next({ name: "cliente-home" });
    } else {
      appStore.setIsLoading(false);
      return next({ name: "configuracion-view" });
    }
  } else if (to.name !== "login" && (await isAuthenticated())) {
    const user = (await Preferences.get({ key: "user" })).value;
    const parsedUser = user ? JSON.parse(user) : null;
    if (parsedUser) {
      appStore.getUserbyId(parsedUser.id);
    }
  }

  appStore.setIsLoading(false);
  next();
});

export default router;
