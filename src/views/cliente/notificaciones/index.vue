<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Notificaciones</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <div class="max-w-md mx-auto  ">
                <h2 class="text-xl font-bold text-start mb-4">Últimos 7 días</h2>
                <div v-for="notificacion in notificaciones.filter(n => new Date() - new Date(n.fecha) <= 7 * 24 * 60 * 60 * 1000)" :key="notificacion.id" class="my-2 bg-gray-300 rounded-lg  " >
                    <div class="p-4">
                        <div class="flex justify-between items-center">
                            <div class="w-full" >
                                <div class="flex items-center justify-between gap-4 " >
                                    <h2 class="text-lg font-bold truncate  ">
                                        {{ notificacion.texto }} 
                                    </h2>
                                    <small class=" flex-shrink-0 "  >12:00 AM</small>
                                </div>
                                <div class="my-2" >
                                    <p class="text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                                <div class="flex items-center justify-between" >
                                    <p class="text-sm">{{ new Date(notificacion.fecha).toLocaleDateString() }}</p>
                                    <button class="bg-gray-700 text-white px-4 text-sm rounded-lg font-bold " >Ver</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 class="text-xl font-bold text-start mt-4 mb-4">Últimos 30 días</h2>
                <div v-for="notificacion in notificaciones.filter(n => new Date() - new Date(n.fecha) <= 30 * 24 * 60 * 60 * 1000)" :key="notificacion.id" class="my-2 bg-gray-300 rounded-lg  " >
                    <div class="p-4">
                        <div class="flex justify-between items-center">
                            <div class="w-full" >
                                <div class="flex items-center justify-between gap-4 " >
                                    <h2 class="text-lg font-bold truncate  ">
                                        {{ notificacion.texto }} 
                                    </h2>
                                    <small class=" flex-shrink-0 "  >12:00 AM</small>
                                </div>
                                <div class="my-2" >
                                    <p class="text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                                <div class="flex items-center justify-between" >
                                    <p class="text-sm">{{ new Date(notificacion.fecha).toLocaleDateString() }}</p>
                                    <button class="bg-gray-700 text-white px-4 text-sm rounded-lg font-bold " >Ver</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { ref } from 'vue';

const notificaciones = ref([
    { id: 1, texto: 'Notificación 1', fecha: new Date().getTime() },
    { id: 2, texto: 'Notificación 2', fecha: new Date().getTime() - 2 * 24 * 60 * 60 * 1000 },
    { id: 3, texto: 'Notificación 3', fecha: new Date().getTime() - 4 * 24 * 60 * 60 * 1000 },
    { id: 4, texto: 'Notificación 4', fecha: new Date().getTime() - 6 * 24 * 60 * 60 * 1000 },
    { id: 5, texto: 'Notificación 5', fecha: new Date().getTime() - 8 * 24 * 60 * 60 * 1000 },
    { id: 6, texto: 'Notificación 6', fecha: new Date().getTime() - 10 * 24 * 60 * 60 * 1000 },
    { id: 7, texto: 'Notificación 7', fecha: new Date().getTime() - 12 * 24 * 60 * 60 * 1000 },
    { id: 8, texto: 'Notificación 8', fecha: new Date().getTime() - 14 * 24 * 60 * 60 * 1000 },
    { id: 9, texto: 'Notificación 9', fecha: new Date().getTime() - 16 * 24 * 60 * 60 * 1000 },
    { id: 10, texto: 'Notificación 10', fecha: new Date().getTime() - 18 * 24 * 60 * 60 * 1000 },
]);
</script>

<style scoped>
ion-content {
    --padding-bottom: 170px;
}
</style>
