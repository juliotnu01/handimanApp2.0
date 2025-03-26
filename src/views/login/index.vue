<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div
                class="bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-100 min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
                <!-- Contenedor Principal -->
                <div
                    class="relative w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white shadow-xl rounded-2xl overflow-hidden max-h-screen overflow-y-auto">

                    <!-- Encabezado -->
                    <div class="px-6 pt-16 pb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center">
                        <div class="inline-block bg-white rounded-full shadow-md p-2 -mt-12 mb-4">
                            <img src="/logo.png" alt="Logo" class="h-16 w-16 " />
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
                                                class="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 dark:bg-white ">
                                            <span class="ml-2 text-sm text-gray-900">Recordarme</span>
                                        </label>
                                        <a href="#" class="text-sm text-indigo-600 hover:text-indigo-500">¿Olvidaste tu
                                            contraseña?</a>
                                    </div>

                                    <div>
                                        <ion-button expand="block" @click="login" class="font-bold">
                                            <svg class="mr-3 -ml-1 h-5 w-5 animate-spin text-white" fill="none"
                                                viewBox="0 0 24 24" v-if="loading">
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
                                <form class="space-y-2">
                                    <div>
                                        <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Nombre
                                            de Usuario</label>
                                        <ion-item lines="none"
                                            class="custom-input-container rounded-md shadow-sm focus-within:ring focus-within:ring-indigo-200">
                                            <ion-input id="username" type="text" placeholder="Jon Doe"
                                                class="custom-input" v-model="model_register.name">
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
                                                class="custom-input" v-model="model_register.email">
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
                                                class="custom-input" v-model="model_register.password">
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
                                                class="custom-input" v-model="model_register.password_confirmation">
                                                <ion-icon slot="start" :icon="lockClosed"></ion-icon>
                                            </ion-input>
                                        </ion-item>
                                    </div>
                                    <div>
                                        <label for="mode"
                                            class="block text-gray-700 text-sm font-bold mb-2">Modo</label>
                                        <div class="flex  custom-input-container rounded-md shadow-sm items-center  ">
                                            <div v-if="model_register.mode === 'cliente'"
                                                class="flex justify-center items-center flex-shrink-0 ml-3 bg-white">
                                                <svg fill="#000000" width="25px" height="25px" viewBox="0 0 100 100"
                                                    class="bg-white">
                                                    <path d="M44.8,58.3c3.7-2.1,7.2-3.1,11.1-3.1c1.1,0,2.2,0.1,3.2,0.2c0.5,0.1,0.6-0.1,0.1-0.4c-1.9-1.1-4-2.1-6.2-3
        c-4.3-1.8-4.9-3.4-4.9-5.2c0-1.8,1.2-3.4,2.6-4.7c2.5-2.3,3.9-5.4,3.9-9.1c0-6.9-4.3-12.8-11.9-12.8c-7.6,0-11.9,5.9-11.9,12.8
        c0,3.7,1.4,6.9,3.9,9.1c1.4,1.3,2.6,3,2.6,4.7c0,1.7-0.7,3.4-4.9,5.2c-6.2,2.6-12.1,5.6-12.2,11.2c0,3.7,2.8,7,6.3,7h14.2
        c1.1,0,2-0.9,2-2l0-6.5C42.8,60.3,43.5,59,44.8,58.3z" />
                                                    <path d="M77.3,64.2c-9.4,2.9-16.8-6-27.1-1.8c-0.8,0.3-1.2,1-1.2,1.9V75c0,1.4,1.2,2.3,2.5,1.9
        c10.2-3.1,17.6,5.8,27.2,1.8c0.7-0.3,1.3-1,1.3-1.9V66.1C80,64.8,78.6,63.8,77.3,64.2z M64.8,74.2c-2.2,0-4-1.8-4-4
        c0-2.2,1.8-4,4-4s4,1.8,4,4C68.8,72.4,67,74.2,64.8,74.2z" />
                                                </svg>
                                            </div>
                                            <div v-else-if="model_register.mode === 'especialista'"
                                                class="flex justify-center items-center flex-shrink-0 ml-2 bg-white">
                                                <svg fill="#000000" width="25px" height="25px" viewBox="0 0 256 190">
                                                    <path d="M48.12,27.903C48.12,13.564,59.592,2,74.023,2c14.339,0,25.903,11.564,25.903,25.903
	C99.834,42.335,88.27,53.806,74.023,53.806C59.684,53.806,48.12,42.242,48.12,27.903z M191,139h-47V97c0-20.461-17.881-37-38-37H43
	C20.912,60,1.99,79.14,2,98v77c-0.026,8.533,6.001,12.989,12,13c6.014,0.011,12-4.445,12-13v-75h8v88h78v-88h8l0.081,50.37
	c-0.053,8.729,5.342,12.446,10.919,12.63h60C207.363,163,207.363,139,191,139z M238.527,104.157
	c-2.64-2.396-5.726-3.493-9.341-3.371c-1.218,0-2.396,0.284-3.614,0.69l-18.113-16.569l11.655-13.767l18.519,16.326L254,68.825
	l-46.338-40.774l-16.366,18.641l18.031,15.879l-12.062,13.036l-16.488-15.107c0.284-1.218,0.406-2.396,0.284-3.614
	c-0.122-3.614-1.543-6.701-4.183-9.056c-2.64-2.396-5.726-3.493-9.341-3.371c-1.218,0-2.518,0.284-3.614,0.69l10.478,9.503
	l-9.259,10.153l-10.478-9.503c-0.284,1.218-0.406,2.518-0.284,3.614c0.122,3.614,1.543,6.538,4.183,8.935
	c2.64,2.396,5.726,3.493,9.341,3.371c1.218,0,2.64-0.284,3.899-0.853l16.001,14.661l-26.479,27.453
	c-1.828,1.543-2.762,3.736-2.762,6.132c0,4.467,3.614,8.082,8.082,8.082c2.762,0,5.158-1.421,6.701-3.493L198.85,95.1l15.067,13.767
	l2.518,2.396c-0.284,1.218-0.406,2.64-0.406,3.899c0.122,3.614,1.543,6.538,4.183,9.056c2.64,2.396,5.726,3.493,9.341,3.371
	c1.218,0,2.396-0.284,3.614-0.69l-10.478-9.503l9.341-10.193l10.356,9.544c0.284-1.218,0.406-2.518,0.284-3.614
	C242.588,109.436,241.167,106.512,238.527,104.157z" />
                                                </svg>
                                            </div>
                                            <ion-item lines="none" class="w-full rounded-md ">
                                                <select id="mode" v-model="model_register.mode" class="custom-input">
                                                    <option value="cliente">Cliente</option>
                                                    <option value="especialista">Especialista</option>
                                                </select>
                                            </ion-item>
                                        </div>
                                    </div>

                                    <ion-button expand="block" @click="registerUser" class="font-bold">
                                        <svg class="mr-3 -ml-1 h-5 w-5 animate-spin text-white" fill="none"
                                            viewBox="0 0 24 24" v-if="loading">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                            </path>
                                        </svg>
                                        Registrarse
                                    </ion-button>
                                </form>
                            </template>
                        </segment>

                        <div class="mt-6">
                            <div class="relative">
                                <div class="absolute inset-0 flex items-center">
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
const { login, registerUser } = loginStore;
const { model_register, model, loading } = storeToRefs(loginStore);
</script>

<style scoped>
.custom-input-container {
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
    /* padding-left: 0.05rem; */
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

/* Agregar padding superior dinámico basado en el área segura */
.pt-safe {
    padding-top: env(safe-area-inset-top);
}
</style>