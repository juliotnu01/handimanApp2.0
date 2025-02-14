<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Ordenes</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-2 "
                v-for="n in 19" :key="n">
                <div class="p-4">
                    <div class="flex justify-between items-center">
                        <div>
                            <h2 class="text-lg font-bold">Order #925</h2>
                            <p class="text-sm">Dine-In</p>
                        </div>
                        <span
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Ready
                            to serve</span>
                    </div>
                    <div class="mt-4">
                        <p class="text-xl font-bold">$87.34 USD</p>
                        <p class="text-sm text-gray-500">Ariel Hikmat</p>
                    </div>
                    <div class="mt-4 text-sm text-gray-500">
                        <p>Wednesday, July 12, 2023, 06:12 PM</p>
                    </div>
                    <button
                        class="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
                        See Details
                    </button>
                    <button
                        class="mt-2 px-4 py-2 bg-gray-500 text-white text-sm font-medium rounded-lg hover:bg-gray-700">
                        Pay Bills
                    </button>
                    <!-- <div v-if="showDetails" class="mt-4 text-sm text-gray-500">
                        <ul>
                            <li>Scrambled eggs with toast: 1 - $16.99</li>
                            <li>Smoked Salmon Bagel: 1 - $18.49</li>
                            <li>Belgian Waffles: 2 - $38.98</li>
                            <li>Classic Lemonade: 1 - $12.49</li>
                        </ul>
                    </div> -->

                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { ref } from 'vue';

const ordenes = ref([]);

// Aquí se pueden agregar funciones o lógica de negocio
</script>

<style scoped>
ion-content {
    --padding-bottom: 170px;
}
</style>
