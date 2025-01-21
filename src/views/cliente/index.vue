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
                <div class="justify-end flex px-2 gap-2">
                    <p class="text-[12px] text-wrap">
                        Urb. la rotaria calle 89 av 110, #109-57, Maracaibo, Zulia
                    </p>
                    <svg width="15px" height="15px" viewBox="0 0 8.4666669 8.4666669" id="svg8" version="1.1"
                        class="self-center">

                        <defs id="defs2" />

                        <g id="layer1" transform="translate(0,-288.53332)">

                            <path
                                d="m 15.996094,0.99609375 c -6.0632836,0 -10.9980445,4.93673065 -10.9980471,11.00000025 -3.8e-6,10.668737 10.3789061,18.779297 10.3789061,18.779297 0.364612,0.290384 0.881482,0.290384 1.246094,0 0,0 10.380882,-8.11056 10.380859,-18.779297 C 27.003893,5.9328244 22.059377,0.99609375 15.996094,0.99609375 Z m 0,6.00195315 c 2.749573,0 5.00585,2.2484784 5.005859,4.9980471 C 21.001971,14.7457 18.745685,17 15.996094,17 c -2.749591,0 -4.998064,-2.2543 -4.998047,-5.003906 9e-6,-2.7495687 2.248474,-4.9980471 4.998047,-4.9980471 z"
                                id="path929"
                                style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.99999988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
                                transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)" />

                        </g>

                    </svg>
                </div>
                <!-- fin menu superior -->
                <!-- categorias -->
                <div class="flex flex-col gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide p-2">
                    <div class="sticky top-0 left-0 bg-white z-10 px-2 flex justify-between">
                        <p class="font-bold">Categorías</p>
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" class=" self-center ">
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
                <!-- fin categorias -->
                <!-- productos -->
                <div class="flex flex-col gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide p-2">
                    <div class="sticky top-0 left-0 bg-white z-10 px-2 flex justify-between">
                        <p class="font-bold">Productos</p>
                    </div>
                    <div class="flex space-x-4 mt-2">
                        <div class="bg-gray-200 w-full max-w-60 break-words text-wrap rounded-xl relative"
                            v-for="n in 10" :key="n">
                            <div class="w-60 h-60 bg-gray-400 flex items-center justify-center text-[10px] shrink-0 ">
                                <img src="https://picsum.photos/200/300" alt="" class="w-full h-full object-cover">
                            </div>
                            <div class="absolute top-2 right-2 flex flex-col gap-2">
                                <button class=" px-2  rounded-lg flex items-center">
                                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="#000">
                                        <circle cx="12" cy="12" r="10" />
                                    </svg>
                                </button>
                                <button class=" px-2 rounded-lg flex items-center" @click="setOpen(true)">
                                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" class="">
                                        <path
                                            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                            stroke="currentColor" stroke-width="2" />
                                        <path
                                            d="M6.94975 7.05025C9.68342 4.31658 14.1156 4.31658 16.8492 7.05025L18.9706 9.17157C20.3039 10.5049 20.9706 11.1716 20.9706 12C20.9706 12.8284 20.3039 13.4951 18.9706 14.8284L16.8492 16.9497C14.1156 19.6834 9.68342 19.6834 6.94975 16.9497L4.82843 14.8284C3.49509 13.4951 2.82843 12.8284 2.82843 12C2.82843 11.1716 3.49509 10.5049 4.82843 9.17157L6.94975 7.05025Z"
                                            stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div>
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
                            </div>
                            <div class="flex items-center self-center px-1">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#000">
                                    <path
                                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                                <span class="ml-1 text-sm font-semibold">4.9 (1.2K+ reviews)</span>
                            </div>
                            <div class="p-2">
                                <p class="font-bold text-wrap">Producto </p>
                                <p class="text-sm line-clamp-3">Lorem ipsum dolor sit amet consectetur, adipisicing
                                    elit...</p>
                            </div>
                            <div class="px-2 flex justify-between gap-2 ">
                                <p class="text-lg font-bold text-gray-800 line-clamp-1">$999.999,99</p>
                                <p class="text-sm line-through text-gray-500 self-center line-clamp-1">$199.999,99</p>
                            </div>
                            <div class="flex justify-center items-center p-2">
                                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                                    <svg width="20px" height="20px" viewBox="0 0 1024 1024">
                                        <path fill="#fff"
                                            d="M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z" />
                                    </svg>
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- fin productos -->
                <!-- servicios -->
                <div class="flex flex-col gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide p-2">
                    <div class="sticky top-0 left-0 bg-white z-10 px-2 flex justify-between">
                        <p class="font-bold">Servicios</p>
                    </div>

                    <div class="flex space-x-4 mt-2">
                        <div class="bg-gray-200 w-full max-w-full flex rounded-xl relative" v-for="service in services"
                            :key="service.id">
                            <div class="w-40 h-46 bg-gray-400 flex items-center justify-center text-[10px] shrink-0">
                                <img :src="service.image" alt="">
                            </div>
                            <div class="flex flex-col justify-between p-2  max-w-[60%]">
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
                                        <span class="ml-1  font-semibold">4.9 (1.2K+ reviews)</span>
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
                                <div class="flex  justify-between items-center my-1">
                                    <p class="text-sm font-bold text-gray-800 line-clamp-1">{{ service.price }}</p>
                                    <p class=" text-[12px] line-through text-gray-500 self-center line-clamp-1">
                                        $199.999,99</p>
                                </div>
                                <div class="flex justify-end">
                                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                                        <svg fill="#fff" width="20px" height="20px" viewBox="0 0 96 96">

                                            <title />

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

                <!-- modal productos -->
                <ion-modal :is-open="isOpen" class="   " :initial-breakpoint="0.95" :breakpoints="[0.95]">
                    <ion-header class=" shadow-none ">
                        <div>
                            <button class=" m-4 border-[1px] border-solid  rounded-full w-10 h-10 text-center "
                                @click="setOpen(false)">
                                x
                            </button>
                        </div>
                    </ion-header>
                    <ion-content class="ion-padding  ">
                        <div class="h-full w-full shadow-2xl rounded-2xl border-solid border-[1px]  ">
                            <div class=" h-2/5 rounded-2xl flex flex-col gap-4">
                                <Swiper class="h-full w-full rounded-t-2xl" :slides-per-view="1" :space-between="50"
                                    :pagination="{ clickable: true }"
                                    :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
                                    :modules="[Thumbs]" :thumbs="{ swiper: thumbsSwiper }">
                                    <SwiperSlide v-for="n in 10" :key="n">
                                        <div
                                            class="w-full h-full bg-gray-400 flex items-center justify-center text-[10px] shrink-0">
                                            <img src="https://picsum.photos/200/300" alt=""
                                                class="w-full h-full object-cover">
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div>
                                    <swiper :modules="[Thumbs]" watch-slides-progress @swiper="setThumbsSwiper"
                                        slides-per-view="4" space-between="10">
                                        <SwiperSlide v-for="n in 10" :key="n">
                                            <div
                                                class="w-20 h-20 bg-gray-400 flex items-center justify-center text-[10px] shrink-0">
                                                <img src="https://picsum.photos/200/300" alt=""
                                                    class="w-full h-full object-cover">
                                            </div>
                                        </SwiperSlide>
                                    </swiper>
                                </div>

                            </div>
                        </div>
                    </ion-content>
                </ion-modal>
                <!-- fin modal productos -->
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
    IonModal
    // IonTitle,
    // IonToolbar,
} from '@ionic/vue';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Thumbs } from 'swiper/modules';

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

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

const services = [
    {
        id: 1,
        title: 'Servicio 1',
        description: 'Description 1',
        price: '$999.999,99',
        image: '#',
    },
    {
        id: 2,
        title: 'Servicio 2',
        description: 'Description 2',
        price: '$999.999,99',
        image: '#',
    },
    {
        id: 3,
        title: 'Servicio 3',
        description: 'Description 3',
        price: '$999.999,99',
        image: '#',
    },
    {
        id: 4,
        title: 'Servicio 4',
        description: 'Description 4',
        price: '$999.999,99',
        image: '#',
    },
    {
        id: 5,
        title: 'Servicio 5',
        description: 'Description 5',
        price: '$999.999,99',
        image: '#',
    },
    {
        id: 6,
        title: 'Servicio 6',
        description: 'Description 6',
        price: '$999.999,99',
        image: '#',
    },
    {
        id: 7,
        title: 'Servicio 7',
        description: 'Description 7',
        price: '$999.999,99',
        image: '#',
    },
    {
        id: 8,
        title: 'Servicio 8',
        description: 'Description 8',
        price: '$999.999,99',
        image: '#',
    },
    {
        id: 9,
        title: 'Servicio 9',
        description: 'Description 9',
        price: '$999.999,99',
        image: '#',
    },
    {
        id: 10,
        title: 'Servicio 10',
        description: 'Description 10',
        price: '$999.999,99',
        image: '#',
    },
];
// Navigation configuration for Swiper
const navigation = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
};

// Additional styling for thumbnails (optional)
const thumbnailStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '10px',
};


const isOpen = ref(false);

const setOpen = (open) => (isOpen.value = open);

const openMenuIzquierda = async () => {
    await menuController.open('menu-izquierda');
};
const openMenuDerecha = async () => {
    await menuController.open('menu-derecha');
};
</script>