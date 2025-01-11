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
                <!-- menu superior -->
                <div class=" w-full h-20 p-4 flex justify-between gap-4">
                    <button @click="openMenuIzquierda"
                        class="bg-gray-200 w-12 h-10 self-center rounded-lg text-center shadow-lg flex justify-center ">
                        <svg width="25px" height="25px" viewBox="0 0 20 20" fill="none" class="self-center">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
                        </svg>
                    </button>
                    <div class="w-8/12  h-fit self-center rounded-lg shadow-lg border-solid border-[1px]">
                        <input type="text" placeholder="Buscar" class="w-full h-10 p-2 rounded-lg dark:text-white" />
                    </div>
                    <div
                        class="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center self-center shadow-lg border-solid border-[1px]">
                        <span class="text-xl text-gray-700 font-bold" @click="openMenuDerecha">JN</span>
                    </div>
                </div>
                <!-- fin menu superior -->
                <div class="flex flex-col gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide p-2">
                    <div class="sticky top-0 left-0 bg-white z-10 px-2 flex justify-between">
                        <p class="font-bold">Categorías</p>
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" class=" self-center " >
                            <g id="style=fill">
                                <g id="filter-circle">
                                    <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.75 17.5C7.75 17.0858 7.41421 16.75 7 16.75H2C1.58579 16.75 1.25 17.0858 1.25 17.5C1.25 17.9142 1.58579 18.25 2 18.25H7C7.41421 18.25 7.75 17.9142 7.75 17.5Z"
                                        fill="#000000" />
                                    <path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M16.25 6.5C16.25 6.08579 16.5858 5.75 17 5.75H22C22.4142 5.75 22.75 6.08579 22.75 6.5C22.75 6.91421 22.4142 7.25 22 7.25H17C16.5858 7.25 16.25 6.91421 16.25 6.5Z"
                                        fill="#000000" />
                                    <path id="vector (Stroke)_3" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M22.75 17.5C22.75 17.0858 22.4142 16.75 22 16.75H13C12.5858 16.75 12.25 17.0858 12.25 17.5C12.25 17.9142 12.5858 18.25 13 18.25H22C22.4142 18.25 22.75 17.9142 22.75 17.5Z"
                                        fill="#000000" />
                                    <path id="vector (Stroke)_4" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M1.25 6.5C1.25 6.08579 1.58579 5.75 2 5.75H11C11.4142 5.75 11.75 6.08579 11.75 6.5C11.75 6.91421 11.4142 7.25 11 7.25H2C1.58579 7.25 1.25 6.91421 1.25 6.5Z"
                                        fill="#000000" />
                                    <path id="vector (Stroke)_5" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13.75 17.3999C13.75 15.3288 12.0711 13.6499 10 13.6499C7.92893 13.6499 6.25 15.3288 6.25 17.3999C6.25 19.471 7.92893 21.1499 10 21.1499C12.0711 21.1499 13.75 19.471 13.75 17.3999Z"
                                        fill="#000000" />
                                    <path id="vector (Stroke)_6" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10.25 6.3999C10.25 4.32883 11.9289 2.6499 14 2.6499C16.0711 2.6499 17.75 4.32883 17.75 6.3999C17.75 8.47097 16.0711 10.1499 14 10.1499C11.9289 10.1499 10.25 8.47097 10.25 6.3999Z"
                                        fill="#000000" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div class="flex space-x-4 mt-2">
                        <div v-for="item in items" :key="item.id"
                            class="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-[10px] shrink-0">
                            <img :src="item.image" alt="">
                        </div>
                    </div>
                </div>       
                <div class="flex flex-col gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide p-2">
                    <div class="sticky top-0 left-0 bg-white z-10 px-2 flex justify-between">
                        <p class="font-bold">Productos</p>
                    </div>
                    <div class="flex space-x-4 mt-2">
                        <div class="bg-red-200 w-full break-words text-wrap  "   v-for="n in 10" :key="n" >
                            <div class="w-64 h-64 bg-gray-200 flex items-center justify-center text-[10px] shrink-0">
                                <img src="https://via.placeholder.com/150" alt="">
                            </div>
                            <div class="p-2">
                                <p class="font-bold">Producto</p>
                                <p class="text-sm">Descripción del producto</p>
                            </div>
                        </div>
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

import { Swiper, SwiperSlide } from 'swiper/vue';

const items = [
    {
        title: 'Item 1',
        description: 'Description 1',
        image: '#',
    },
    {
        title: 'Item 2',
        description: 'Description 2',
        image: '#',
    },
    {
        title: 'Item 3',
        description: 'Description 3',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
    {
        title: 'Item 4',
        description: 'Description 4',
        image: '#',
    },
];


const openMenuIzquierda = async () => {
    await menuController.open('menu-izquierda');
};
const openMenuDerecha = async () => {
    await menuController.open('menu-derecha');
};
</script>