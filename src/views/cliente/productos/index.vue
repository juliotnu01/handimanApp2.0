<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <div class="w-[97%] h-fit self-center mx-auto my-4 flex justify-between relative">
                    <ion-searchbar class="w-10/12 h-10" @ionInput="handleSearchInput"></ion-searchbar>
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" class="self-center mx-2 "
                        @click="setOpenFilter(true)">
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
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <!-- Contenedor de cartas -->
            <div v-if="searchQuery"
                class="absolute w-11/12 max-h-[70em] top-12 z-[101] left-1/2 transform -translate-x-1/2 flex flex-col gap-4 p-2 rounded-lg shadow-lg overflow-y-auto">
                <div class="w-full h-fit" v-for="n in 20" :key="n">
                    <div class="flex bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="w-1/3">
                            <img :src="'https://picsum.photos/200/300?random=' + n" alt="Image"
                                class="object-cover w-full h-full">
                        </div>
                        <div class="w-2/3 p-4">
                            <h3 class="text-lg font-bold">Item {{ n }}</h3>
                            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div class="flex items-center mt-2">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#000">
                                    <path
                                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                                <span class="ml-1 text-sm font-semibold">4.9 (1.2K+ reviews)</span>
                            </div>
                            <div class="flex items-center justify-between mt-2">
                                <p class="text-lg font-bold text-gray-800">$999.999,99</p>
                                <p class="text-sm line-through text-red-500">$199.999,99</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- fin Contenedor de cartas -->
            <!-- Overlay -->
            <div v-if="searchQuery" class="fixed inset-0 bg-black opacity-50 z-10" @click="clearSearchQuery">
            </div>
            <!-- fin Overlay -->
            <!-- Contenedor de cartas productos -->
            <div class=" w-full h-full grid grid-cols-2 gap-2 justify-items-center py-1 items-center overflow-y-scroll">
                <div class="bg-[#fff] border-solid border-[1px] shadow-lg w-11/12 h-fit rounded-xl relative "
                    v-for="(item, index) in items" :key="index">
                    <div class=" h-[7em]   w-full rounded-lg overflow-hidden p-[3.5px]">
                        <img :src="item.image" alt="" class="w-full h-full object-cover rounded-lg">
                        <div
                            class="absolute top-2 right-2 bg-red-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                            -20%
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-2 p-2">
                        <span
                            class="bg-blue-200 text-blue-800 text-[7px] font-semibold  px-2.5 py-0.5 rounded-2xl">Nuevo</span>
                        <span
                            class="bg-green-200 text-green-800 text-[7px] font-semibold  px-2.5 py-0.5 rounded-2xl">Oferta</span>
                        <span
                            class="bg-red-200 text-red-800 text-[7px] font-semibold  px-2.5 py-0.5 rounded-2xl">Popular</span>
                        <span
                            class="bg-purple-200 text-purple-800 text-[7px] font-semibold  px-2.5 py-0.5 rounded-2xl">Categoría</span>
                    </div>
                    <div class="px-2">
                        <div class="flex items-center ">
                            <svg width="10px" height="10px" viewBox="0 0 24 24" fill="#000">
                                <path
                                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                            <div class="flex justify-between  ">
                                <span class="ml-1 text-[10px] font-semibold self-center ">4.9 </span>
                                <span class="ml-1 text-[10px] font-semibold self-center">|</span>
                                <span class="ml-1 text-[10px] font-semibold self-center">99 vendidos </span>
                            </div>
                        </div>
                        <h3 class="text-[12px] font-bold">{{ item.name }}</h3>
                        <div class="flex items-center ">
                            <svg fill="#000000" width="15px" height="15px" viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z" />
                            </svg>
                            <span class="ml-1 text-[10px] text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">123   Random St, City, Country</span>
                        </div>
                        <div class="flex items-center justify-between ">
                            <p class="text-[12px] font-bold text-gray-800">$ {{ formatPrice(item.price) }}</p>
                            <p class="text-[9px] line-through text-red-500">$ {{ formatPrice(item.oldPrice) }}</p>
                        </div>
                        <div class="flex justify-between my-2">
                            <button class="bg-green-500 text-white px-4 py-1 rounded-lg">
                                <svg width="15px" height="15px" viewBox="0 0 1024 1024" class=" self-center  text-black ">
                                    <path fill="currentColor"
                                        d="M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z" />
                                </svg>
                            </button>
                            <button class="bg-gray-200 text-gray-800 px-4 py-1 rounded-lg" @click="setOpen(true)" >
                                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" class="">
                                    <path
                                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                        stroke="currentColor" stroke-width="2" />
                                    <path
                                        d="M6.94975 7.05025C9.68342 4.31658 14.1156 4.31658 16.8492 7.05025L18.9706 9.17157C20.3039 10.5049 20.9706 11.1716 20.9706 12C20.9706 12.8284 20.3039 13.4951 18.9706 14.8284L16.8492 16.9497C14.1156 19.6834 9.68342 19.6834 6.94975 16.9497L4.82843 14.8284C3.49509 13.4951 2.82843 12.8284 2.82843 12C2.82843 11.1716 3.49509 10.5049 4.82843 9.17157L6.94975 7.05025Z"
                                        stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button class="bg-gray-800 text-gray-800 px-4 py-1 rounded-lg">
                                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.5 8.25H16.5V7.75C16.5 6.55653 16.0259 5.41193 15.182 4.56802C14.3381 3.72411 13.1935 3.25 12 3.25C10.8065 3.25 9.66193 3.72411 8.81802 4.56802C7.97411 5.41193 7.5 6.55653 7.5 7.75V8.25H4.5C4.16848 8.25 3.85054 8.3817 3.61612 8.61612C3.3817 8.85054 3.25 9.16848 3.25 9.5V18C3.25 18.7293 3.53973 19.4288 4.05546 19.9445C4.57118 20.4603 5.27065 20.75 6 20.75H18C18.7293 20.75 19.4288 20.4603 19.9445 19.9445C20.4603 19.4288 20.75 18.7293 20.75 18V9.5C20.75 9.16848 20.6183 8.85054 20.3839 8.61612C20.1495 8.3817 19.8315 8.25 19.5 8.25ZM9 7.75C9 6.95435 9.31607 6.19129 9.87868 5.62868C10.4413 5.06607 11.2044 4.75 12 4.75C12.7956 4.75 13.5587 5.06607 14.1213 5.62868C14.6839 6.19129 15 6.95435 15 7.75V8.25H9V7.75ZM19.25 18C19.25 18.3315 19.1183 18.6495 18.8839 18.8839C18.6495 19.1183 18.3315 19.25 18 19.25H6C5.66848 19.25 5.35054 19.1183 5.11612 18.8839C4.8817 18.6495 4.75 18.3315 4.75 18V9.75H7.5V12C7.5 12.1989 7.57902 12.3897 7.71967 12.5303C7.86032 12.671 8.05109 12.75 8.25 12.75C8.44891 12.75 8.63968 12.671 8.78033 12.5303C8.92098 12.3897 9 12.1989 9 12V9.75H15V12C15 12.1989 15.079 12.3897 15.2197 12.5303C15.3603 12.671 15.5511 12.75 15.75 12.75C15.9489 12.75 16.1397 12.671 16.2803 12.5303C16.421 12.3897 16.5 12.1989 16.5 12V9.75H19.25V18Z"
                                        fill="#fff" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- fin Contenedor de cartas productos -->
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/vue';

import { storeToRefs } from 'pinia';
import { useProductosStore } from '@/stores/cliente/productosStore';
import { useHomeStore } from '@/stores/cliente/homeStore';


const homeStore = useHomeStore();
const {
    handleSearchInput,
    setOpenFilter,
    clearSearchQuery,
    setOpen,
} = homeStore;

const {
    searchQuery,
} = storeToRefs(homeStore);

const productosStore = useProductosStore();
const {
    items,
} = storeToRefs(productosStore);

const formatPrice = (price) => {
    return price.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
    }).replace('$', '');
};
</script>
<style scoped>
ion-searchbar {
    --background: white;
    --border-radius: 8px;
    --border: 1px solid #e2e8f0;
    --padding-start: 8px;
    --padding-end: 8px;
    --icon-color: #4b5563;
    --placeholder-color: #9ca3af;
    --color: #1f2937;
}
</style>