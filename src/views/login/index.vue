<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div
                class="animated-bg bg-gradient-to-r from-gray-300 via-sky-100 to-red-300 h-screen flex items-center flex-col justify-center ">


                <div class="text-white text-2xl font-bold text-center mt-10">
                    <p>Bienvenido a Citus</p>
                    <p>Explora tus posibilidades</p>
                </div>

                <div
                    class="w-4/5 mx-auto bg-white p-4 rounded-lg shadow-lg text-center flex items-start justify-start h-4/6  flex-col">
                    <div class="h-20 w-full  flex justify-center gap-2 items-center">
                        <span class="text-black text-3xl ml-2 font-bold text-shadow-lg shadow-purple-500">Citus</span>
                        <img src="/logo.png" alt="Logo" class="h-16 w-16 animate-bounce">
                    </div>
                    <segment :segments="['Iniciar Session', 'Registrarse']" class="mx-auto w-full">
                        <template #segment-0>
                            <form class="flex gap-2 flex-col">
                                <ion-item>
                                    <ion-input v-model="model.email" type="email" label-placement="stacked"
                                        label="Correo electronico" placeholder="correo@dominio.com">
                                        <ion-icon slot="start" aria-hidden="true" :icon="mailOutline"></ion-icon>
                                    </ion-input>
                                </ion-item>
                                <ion-item>
                                    <ion-input type="password" v-model="model.password" label-placement="stacked"
                                        label="Ingrese su contraseña" placeholder="******">
                                        <ion-icon slot="start" :icon="lockClosed" aria-hidden="true"></ion-icon>
                                    </ion-input>
                                </ion-item>

                                <ion-button @click="login">
                                    <svg class="mr-3 -ml-1 size-5 animate-spin text-white"
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
                            </form>
                        </template>
                        <template #segment-1>
                            <form class="flex gap-2 flex-col">
                                <ion-item>
                                    <ion-input label-placement="stacked" label="Nombre de usuario"
                                        placeholder="Jon doe">
                                        <ion-icon slot="start" aria-hidden="true" :icon="person"></ion-icon>
                                    </ion-input>
                                </ion-item>
                                <ion-item>
                                    <ion-input type="email" label-placement="stacked" label="Correo electronico"
                                        placeholder="correo@dominio.com">
                                        <ion-icon slot="start" aria-hidden="true" :icon="mailOutline"></ion-icon>
                                    </ion-input>
                                </ion-item>
                                <ion-item>
                                    <ion-input type="password" label-placement="stacked" label="Contraseña"
                                        placeholder="******">
                                        <ion-icon slot="start" :icon="lockClosed" aria-hidden="true"></ion-icon>
                                    </ion-input>
                                </ion-item>
                                <ion-item>
                                    <ion-input type="password" label-placement="stacked" label="Confirmar contraseña"
                                        placeholder="******">
                                        <ion-icon slot="start" :icon="lockClosed" aria-hidden="true"></ion-icon>
                                    </ion-input>
                                </ion-item>
                                <ion-button>Ingresar</ion-button>
                            </form>
                        </template>
                    </segment>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup >
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonIcon } from '@ionic/vue';
import { eye, lockClosed, mailOutline, person } from 'ionicons/icons';
import { useLoginStore } from '@/stores/login/loginStore.js';
import segment from '@/components/segment.vue';

const loginStore = useLoginStore();
const { login } = loginStore
const { model,loading } = storeToRefs(loginStore);



</script>

<style scoped></style>
