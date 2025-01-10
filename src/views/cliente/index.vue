<template>
    <ion-app>
        <ion-menu menu-id="menu-izquierda" content-id="main-content-cliente">
            <ion-content class="ion-padding">
                <ion-list>
                    <ion-item>
                        <ion-label>Home</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>Profile</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>Logout</ion-label>
                    </ion-item>
                </ion-list>
            </ion-content>
        </ion-menu>
        <ion-page id="main-content-cliente">
            <ion-content>
                <div class=" w-full h-20 p-4 flex justify-between gap-4">
                    <button class="bg-gray-200 w-12 h-10 self-center rounded-lg text-center shadow-lg flex justify-center ">
                        <svg width="25px" height="25px" viewBox="0 0 20 20"  fill="none" class="self-center">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
                        </svg>
                    </button>
                    <div class="w-8/12  h-fit self-center rounded-lg shadow-lg border-solid border-[1px]">
                        <input type="text" placeholder="Buscar" class="w-full h-10 p-2 rounded-lg">
                    </div>
                    <div class="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center self-center shadow-lg border-solid border-[1px]">
                        <span class="text-xl text-gray-700 font-bold">JN</span>
                    </div>
                </div>
            </ion-content>
        </ion-page>
        <ion-menu menu-id="menu-derecha" content-id="main-content-cliente" side="end">
            <ion-header>
            </ion-header>
            <ion-content class="ion-padding">
                <ion-list>
                    <ion-item>
                        <ion-label>Home</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>Profile</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>Logout</ion-label>
                    </ion-item>
                </ion-list>
            </ion-content>
        </ion-menu>
    </ion-app>
</template>

<script setup>
import {
    IonApp,
    IonContent,
    IonPage,
    IonMenu,
    IonHeader,
    IonList,
    IonItem,
    IonLabel,
    menuController,
    IonButton,
    // IonTitle,
    // IonToolbar,
} from '@ionic/vue';

const openMenuIzquierda = async () => {
    await menuController.open('menu-izquierda');
};
const openMenuDerecha = async () => {
    await menuController.open('menu-derecha');
};
</script>