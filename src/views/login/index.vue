<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div
                class="bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-100 min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
                <!-- Contenedor Principal -->
                <div
                    class="relative w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white shadow-xl rounded-2xl overflow-hidden">

                    <!-- Encabezado -->
                    <div class="px-6 pt-16 pb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center">
                        <div class="inline-block bg-white rounded-full shadow-md p-2 -mt-12 mb-4">
                            <img src="/logo.png" alt="Logo" class="h-16 w-16 animate-bounce" />
                        </div>
                        <h1 class="text-3xl font-semibold tracking-tight">Bienvenido a Citus</h1>
                        <p class="mt-2 text-lg font-light">Explora tus posibilidades</p>
                    </div>

                    <!-- Contenido del Formulario -->
                    <div class="px-8 py-12">
                        <segment :segments="['Iniciar Sesión', 'Registrarse']">
                            <template #segment-0>
                                <form class="space-y-6">
                                    <div>
                                        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Correo
                                            Electrónico</label>
                                        <ion-item lines="none"
                                            class="custom-input-container rounded-md shadow-sm focus-within:ring focus-within:ring-indigo-200">
                                            <ion-input id="email" v-model="model.email" type="email"
                                                placeholder="correo@dominio.com" class="custom-input">
                                                <ion-icon slot="start" :icon="mailOutline"></ion-icon>
                                            </ion-input>
                                        </ion-item>
                                    </div>

                                    <div>
                                        <label for="password"
                                            class="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                                        <ion-item lines="none"
                                            class="custom-input-container rounded-md shadow-sm focus-within:ring focus-within:ring-indigo-200">
                                            <ion-input id="password" v-model="model.password" type="password"
                                                placeholder="******" class="custom-input">
                                                <ion-icon slot="start" :icon="lockClosed"></ion-icon>
                                            </ion-input>
                                        </ion-item>
                                    </div>

                                    <div class="flex items-center justify-between">
                                        <label for="remember-me" class="flex items-center">
                                            <input id="remember-me" type="checkbox"
                                                class="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
                                            <span class="ml-2 text-sm text-gray-900">Recordarme</span>
                                        </label>
                                        <a href="#" class="text-sm text-indigo-600 hover:text-indigo-500">¿Olvidaste tu
                                            contraseña?</a>
                                    </div>

                                    <div>
                                        <ion-button expand="block" @click="login" class="font-bold">
                                            <svg class="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                v-if="loading">
                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                    stroke-width="4"></circle>
                                                <path class="opacity-75" fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                                </path>
                                            </svg>
                                            Ingresar
                                        </ion-button>
                                    </div>
                                </form>
                            </template>

                            <template #segment-1>
                                <form class="space-y-6">
                                    <div>
                                        <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Nombre
                                            de
                                            Usuario</label>
                                        <ion-item lines="none"
                                            class="custom-input-container rounded-md shadow-sm focus-within:ring focus-within:ring-indigo-200">
                                            <ion-input id="username" type="text" placeholder="Jon Doe"
                                                class="custom-input">
                                                <ion-icon slot="start" :icon="person"></ion-icon>
                                            </ion-input>
                                        </ion-item>
                                    </div>

                                    <div>
                                        <label for="register-email"
                                            class="block text-gray-700 text-sm font-bold mb-2">Correo
                                            Electrónico</label>
                                        <ion-item lines="none"
                                            class="custom-input-container rounded-md shadow-sm focus-within:ring focus-within:ring-indigo-200">
                                            <ion-input id="register-email" type="email" placeholder="correo@dominio.com"
                                                class="custom-input">
                                                <ion-icon slot="start" :icon="mailOutline"></ion-icon>
                                            </ion-input>
                                        </ion-item>
                                    </div>

                                    <div>
                                        <label for="register-password"
                                            class="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                                        <ion-item lines="none"
                                            class="custom-input-container rounded-md shadow-sm focus-within:ring focus-within:ring-indigo-200">
                                            <ion-input id="register-password" type="password" placeholder="******"
                                                class="custom-input">
                                                <ion-icon slot="start" :icon="lockClosed"></ion-icon>
                                            </ion-input>
                                        </ion-item>
                                    </div>

                                    <div>
                                        <label for="confirm-password"
                                            class="block text-gray-700 text-sm font-bold mb-2">Confirmar
                                            Contraseña</label>
                                        <ion-item lines="none"
                                            class="custom-input-container rounded-md shadow-sm focus-within:ring focus-within:ring-indigo-200">
                                            <ion-input id="confirm-password" type="password" placeholder="******"
                                                class="custom-input">
                                                <ion-icon slot="start" :icon="lockClosed"></ion-icon>
                                            </ion-input>
                                        </ion-item>
                                    </div>

                                    <div>
                                        <ion-button expand="block" class="font-bold">Registrarse</ion-button>
                                    </div>
                                </form>
                            </template>
                        </segment>

                        <div class="mt-6">
                            <div class="relative">
                                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div class="w-full border-t border-gray-300"></div>
                                </div>
                                <div class="relative flex justify-center text-sm">
                                    <span class="px-2 bg-white text-gray-500">
                                        O inicia sesión con
                                    </span>
                                </div>
                            </div>

                            <div class="mt-6 flex justify-center gap-4">
                                <button type="button"
                                    class="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                                    <svg width="48px" height="48px" viewBox="-0.5 0 48 48" fill="none">

                                        <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                                <g id="Google" transform="translate(401.000000, 860.000000)">
                                                    <path
                                                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                                        id="Fill-1" fill="#FBBC05">

                                                    </path>
                                                    <path
                                                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                                        id="Fill-2" fill="#EB4335">

                                                    </path>
                                                    <path
                                                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                                        id="Fill-3" fill="#34A853">

                                                    </path>
                                                    <path
                                                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                                        id="Fill-4" fill="#4285F4">

                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                                <button type="button"
                                    class="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                                    <svg width="48px" height="48px" viewBox="0 0 16 16" fill="none">
                                        <path fill="#1877F2"
                                            d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z" />
                                        <path fill="#ffffff"
                                            d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <p class="mt-8 text-center text-sm text-gray-500">
                            ¿No tienes una cuenta?
                            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                                Crear una cuenta
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import {
    IonPage,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonIcon
} from '@ionic/vue';
import { mailOutline, lockClosed, person } from 'ionicons/icons';
import { useLoginStore } from '@/stores/login/loginStore.js';
import segment from '@/components/segment.vue';

const loginStore = useLoginStore();
const { login } = loginStore;
const { model, loading } = storeToRefs(loginStore);
</script>

<style scoped>
.custom-input-container {
    background-color: #f9fafb;
    /* Un gris muy claro */
    border: 1px solid #d1d5db;
    /* Borde gris */
    color: #374151;
    /* Texto gris oscuro */
}

.custom-input {
    font-size: 0.875rem;
    /* text-sm */
    padding-top: 0.625rem;
    /* pt-2.5 */
    padding-bottom: 0.625rem;
    /* pb-2.5 */
    padding-left: 0.75rem;
    /* pl-3 */
    padding-right: 0.75rem;
    /* pr-3 */
    border-radius: 0.5rem;
    /* rounded-md */
    width: 100%;
    display: block;
    background-color: transparent;
    /* Importante para que se vea el fondo del contenedor */
    border: none;
    outline: none;
    color: inherit;
    /* Hereda el color del contenedor */
}

.custom-input::placeholder {
    color: #9ca3af;
    /* Texto del placeholder en gris */
}

/* Estilos al hacer focus (puedes personalizar esto) */
.custom-input:focus {
    outline: none;
    /* No necesitas un borde aquí porque ya tienes el ring en el contenedor */
}
</style>