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
            <div
                class="bg-red-400 w-full h-full grid grid-cols-2 gap-2 justify-items-center py-1 items-center overflow-y-scroll">
                <div class="bg-green-300 w-11/12 h-60 rounded-xl"
                    v-for="(item, index) in items" :key="index">
                    <div class="bg-purple-400 h-2/5 w-full m-1 rounded-lg">
                        <img :src="item.image" alt="" class="w-full h-full object-cover">
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


                </div>
            </div>
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