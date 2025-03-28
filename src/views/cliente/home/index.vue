<template>
    <ion-page>
        <ion-header>
            <div class="w-[97%] h-fit self-center mx-auto  flex justify-between relative mb-3">
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
        </ion-header>
        <ion-content>
            <!-- buscador -->
            <div v-if="searchQuery" class="w-[97%] h-fit self-center mx-auto  flex justify-between relative">
                <!-- Contenedor de cartas -->
                <div
                    class="absolute w-11/12 max-h-[70em] top-12 z-[11] left-1/2 transform -translate-x-1/2 flex flex-col gap-4 p-2 rounded-lg shadow-lg overflow-y-auto">
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
                <!-- Overlay -->
                <div v-if="searchQuery" class="fixed inset-0 bg-black opacity-50 z-10" @click="clearSearchQuery">
                </div>
            </div>
            <!-- fin buscador -->
            
            <!-- categorias -->
            <div class="flex flex-col gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide p-2">
                <div class="sticky top-0 left-0 bg-white px-2 flex justify-between">
                    <p class="font-bold">Categorías</p>
                    <router-link :to="{ name: 'categorias-view' }"
                        class="font-bold text-sm self-center text-sky-600 hover:underline">
                        Más
                    </router-link>
                </div>
                <div class="flex space-x-5 my-2">
                    <div v-for="(item, i) in items" :key="i"
                        class="w-14 h-14 rounded-full bg-gray-200 flex flex-col items-center justify-end text-[10px] shrink-0 p-1 relative">
                        <img :src="item.image" alt="" class="w-full h-full object-cover rounded-full">
                        <span
                            class="absolute bg-white -bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-75 px-1 rounded text-center whitespace-normal w-full break-words">
                            {{ item.title }}
                        </span>
                    </div>
                </div>
            </div>
            <!-- fin categorias -->

            <!--banner-->
            <div class="flex flex-col gap-4  p-2">
                <div class="sticky top-0 left-0 bg-white px-2 flex justify-between">
                    <p class="font-bold">Inscríbete como especialista</p>
                </div>
                <div class="w-full h-1/5 bg-[#cecece] mx-auto rounded-xl p-1 shadow-lg">
                    <div class="w-full h-full flex">
                        <div class="w-4/12 p-2 self-center ">
                            <img src="/img_banner_incribete_como_handyman.png" alt="Afilia tu negocio"
                                class="w-full h-auto object-contain">
                        </div>
                        <div class="flex flex-col justify-center items-start text-white p-4 w-8/12">
                            <h2 class="text-[16px] font-bold">Obten mas ingresos, afiliandote como especialista</h2>
                            <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg self-end">Afíliate</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--fin banner-->

            <!-- productos -->
            <div class="flex flex-col gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide p-2">
                <div class="sticky top-0 left-0 bg-white px-2 flex justify-between">
                    <p class="font-bold">Productos</p>
                    <router-link :to="{ name: 'productos-view' }"
                        class="font-bold text-sm self-center text-sky-600 hover:underline">
                        Ver mas
                    </router-link>

                </div>
                <div class="flex space-x-4 mt-2">
                    <div class="bg-gray-200 w-full max-w-60 break-words text-wrap rounded-xl relative"
                        v-for="(item, index) in items" :key="index">
                        <div class="w-60 h-60 bg-gray-400 flex items-center justify-center text-[10px] shrink-0 ">
                            <img :src="item.image" alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="absolute top-2 right-2 flex flex-col gap-2">
                            <!-- <button class=" px-2  rounded-lg flex items-center">
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="#000">
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                            </button> -->
                            <button class="px-2 rounded-lg flex items-center">
                                <img :src="item.avatar" alt="Avatar" class="w-10 h-10 rounded-full">
                            </button>

                            <button class=" px-2 rounded-lg flex items-center" @click="setOpen(true)">
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" class="text-white">
                                    <path
                                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                        stroke="currentColor" stroke-width="2" />
                                    <path
                                        d="M6.94975 7.05025C9.68342 4.31658 14.1156 4.31658 16.8492 7.05025L18.9706 9.17157C20.3039 10.5049 20.9706 11.1716 20.9706 12C20.9706 12.8284 20.3039 13.4951 18.9706 14.8284L16.8492 16.9497C14.1156 19.6834 9.68342 19.6834 6.94975 16.9497L4.82843 14.8284C3.49509 13.4951 2.82843 12.8284 2.82843 12C2.82843 11.1716 3.49509 10.5049 4.82843 9.17157L6.94975 7.05025Z"
                                        stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex flex-wrap gap-2 p-2">
                            <span
                                class="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-2xl">Nuevo</span>
                            <span
                                class="bg-green-200 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-2xl">Oferta</span>
                            <span
                                class="bg-red-200 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-2xl">Popular</span>
                            <span
                                class="bg-purple-200 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-2xl">Categoría</span>
                        </div>
                        <div class="flex items-center self-center px-1">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#000">
                                <path
                                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                            <span class="ml-1 text-sm font-semibold">4.9 (1.2K+ reviews)</span>
                        </div>
                        <div class="p-2">
                            <p class="font-bold text-wrap -mt-1">Producto </p>
                            <p class="text-sm line-clamp-3 text-ellipsis break-words ">Lorem ipsum dolor sit amet
                                consectetur, adipisicing
                                elit asdasda asdas</p>
                        </div>
                        <div class="px-2 flex justify-between gap-2 -mt-2 ">
                            <p class="text-lg font-bold text-gray-800 line-clamp-1">$999.999,99</p>
                            <p class="text-sm line-through text-red-500 self-center line-clamp-1">$199.999,99</p>
                        </div>
                        <div class="flex justify-between items-center p-2">
                            <div class="flex flex-col items-center">
                                <button class="bg-green-300 py-2 px-[30px] rounded-xl">
                                    <svg width="30px" height="30px" viewBox="0 0 1024 1024"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#000000"
                                            d="M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z" />
                                    </svg>
                                </button>
                                <span class="text-[12px] mt-2 font-bold">Agregar al carrito</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <button class="bg-gray-700 py-2 px-[30px] rounded-xl">
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.5 8.25H16.5V7.75C16.5 6.55653 16.0259 5.41193 15.182 4.56802C14.3381 3.72411 13.1935 3.25 12 3.25C10.8065 3.25 9.66193 3.72411 8.81802 4.56802C7.97411 5.41193 7.5 6.55653 7.5 7.75V8.25H4.5C4.16848 8.25 3.85054 8.3817 3.61612 8.61612C3.3817 8.85054 3.25 9.16848 3.25 9.5V18C3.25 18.7293 3.53973 19.4288 4.05546 19.9445C4.57118 20.4603 5.27065 20.75 6 20.75H18C18.7293 20.75 19.4288 20.4603 19.9445 19.9445C20.4603 19.4288 20.75 18.7293 20.75 18V9.5C20.75 9.16848 20.6183 8.85054 20.3839 8.61612C20.1495 8.3817 19.8315 8.25 19.5 8.25ZM9 7.75C9 6.95435 9.31607 6.19129 9.87868 5.62868C10.4413 5.06607 11.2044 4.75 12 4.75C12.7956 4.75 13.5587 5.06607 14.1213 5.62868C14.6839 6.19129 15 6.95435 15 7.75V8.25H9V7.75ZM19.25 18C19.25 18.3315 19.1183 18.6495 18.8839 18.8839C18.6495 19.1183 18.3315 19.25 18 19.25H6C5.66848 19.25 5.35054 19.1183 5.11612 18.8839C4.8817 18.6495 4.75 18.3315 4.75 18V9.75H7.5V12C7.5 12.1989 7.57902 12.3897 7.71967 12.5303C7.86032 12.671 8.05109 12.75 8.25 12.75C8.44891 12.75 8.63968 12.671 8.78033 12.5303C8.92098 12.3897 9 12.1989 9 12V9.75H15V12C15 12.1989 15.079 12.3897 15.2197 12.5303C15.3603 12.671 15.5511 12.75 15.75 12.75C15.9489 12.75 16.1397 12.671 16.2803 12.5303C16.421 12.3897 16.5 12.1989 16.5 12V9.75H19.25V18Z"
                                            fill="#fff" />
                                    </svg>
                                </button>
                                <span class="text-[12px] mt-2 font-bold">Comprar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- fin productos -->

            <!--banner-->
            <div class="flex flex-col gap-4  p-2">
                <div class="sticky top-0 left-0 bg-white px-2 flex justify-between">
                    <p class="font-bold">Afilia tu negocio</p>
                </div>
                <div class="w-full h-1/5 bg-[#cecece] mx-auto rounded-xl p-1 shadow-lg">
                    <div class="w-full h-full flex">
                        <div class="w-4/12 p-2 self-center ">
                            <img src="/img_banner_afilia_tu_negocio.png" alt="Afilia tu negocio"
                                class="w-full h-auto object-contain">
                        </div>
                        <div class="flex flex-col justify-center items-start text-white p-4 w-8/12">
                            <h2 class="text-[16px] font-bold">Incrementa tus ventas, afiliando tu negocio</h2>
                            <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg self-end">Afíliate</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--fin banner-->

            <!-- servicios -->
            <div class="flex flex-col gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide p-2">
                <div class="sticky top-0 left-0 bg-white px-2 flex justify-between">
                    <p class="font-bold">Servicios</p>
                    <router-link :to="{ name: 'servicios-view' }"
                        class="font-bold text-sm self-center text-sky-600 hover:underline">
                        Ver mas
                    </router-link>
                </div>
                <div class="flex space-x-4 mt-2">
                    <div class="bg-gray-200 w-full max-w-full flex rounded-xl relative" v-for="service in services"
                        :key="service.id">
                        <div class="w-40 h-46 bg-gray-400 flex items-center justify-center text-[10px] shrink-0">
                            <img :src="service.image" alt="" class="object-cover w-full h-full">
                        </div>
                        <div class="flex flex-col justify-between p-2 max-w-[60%]">
                            <div>
                                <div class="flex justify-between items-center">
                                    <p class="text-wrap line-clamp-2 font-bold text-[18px]">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <div
                                        class="bg-purple-200 shadow-sm text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                        1.8 km
                                    </div>
                                </div>
                                <div class="flex items-start my-[5px] self-center text-[12px] ">
                                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="#000">
                                        <path
                                            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                    <span class="ml-1 font-semibold">4.9 (1.2K+ reviews)</span>
                                </div>
                                <p class="text-sm line-clamp-3 text-wrap"> Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas exercitationem fugit deserunt laudantium minima hic
                                    quisquam, quis incidunt optio quo nesciunt repellendus sed. Laboriosam, facere!
                                    Quibusdam recusandae minus delectus nemo.</p>
                                <div class="flex flex-wrap gap-2 my-1 ">
                                    <span
                                        class="bg-blue-200 text-blue-800 text-xs font-semibold mr-1 px-1.5 py-0.5 rounded-2xl">Nuevo</span>
                                    <span
                                        class="bg-green-200 text-green-800 text-xs font-semibold mr-1 px-1.5 py-0.5 rounded-2xl">Oferta</span>
                                    <span
                                        class="bg-red-200 text-red-800 text-xs font-semibold mr-1 px-1.5 py-0.5 rounded-2xl">Popular</span>
                                    <span
                                        class="bg-purple-200 text-purple-800 text-xs font-semibold mr-1 px-1.5 py-0.5 rounded-2xl">Categoría</span>
                                </div>
                            </div>
                            <div class="flex justify-end">
                                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                                    <svg fill="#fff" width="20px" height="20px" viewBox="0 0 96 96">
                                        <g>
                                            <path
                                                d="M43.7578,61.7578a5.9994,5.9994,0,1,0,8.4844,8.4844l18-18a5.9979,5.9979,0,0,0,0-8.4844l-18-18a5.9994,5.9994,0,0,0-8.4844,8.4844L51.5156,42H6A6,6,0,0,0,6,54H51.5156Z" />
                                            <path
                                                d="M90,0H30a5.9966,5.9966,0,0,0-6,6V18a6,6,0,0,0,12,0V12H84V84H36V78a6,6,0,0,0-12,0V90a5.9966,5.9966,0,0,0,6,6H90a5.9966,5.9966,0,0,0,6-6V6A5.9966,5.9966,0,0,0,90,0Z" />
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- fin servicios -->
        </ion-content>
    </ion-page>
</template>


<script setup>
import {
    IonApp,
    menuController,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonRange,
    IonButton,
    IonModal,
    IonIcon,
    IonSearchbar,
    IonPage,
} from '@ionic/vue';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useHomeStore } from '@/stores/cliente/homeStore';

const homeStore = useHomeStore();
const {
    handleSearchInput,
    setOpenFilter,
    clearSearchQuery,
    setOpen,
} = homeStore;
const {
    services,
    items,
    searchQuery,
} = storeToRefs(homeStore);


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

ion-content {
    --padding-bottom: 70px;
}
</style>