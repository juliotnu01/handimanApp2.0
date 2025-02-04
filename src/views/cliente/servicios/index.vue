<template>
    <ion-page>
        <ion-header>
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
        </ion-header>
        <ion-content>
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
            <div v-if="searchQuery" class="fixed inset-0 bg-black opacity-50 z-10" @click="clearSearchQuery">
            </div>
            <div class="grid grid-cols-1 gap-2 p-4">
                <div class="0 h-fit rounded-xl shadow-lg border-solid border-[1px] flex flex-col items-start px-4"
                    v-for="n in 10" :key="n">
                    <div class="flex items-center w-full  my-2">
                        <ion-avatar class="mr-4 w-10 h-10">
                            <img src="https://picsum.photos/200/200" alt="Avatar">
                        </ion-avatar>
                        <div class="flex-1">
                            <h2 class="text-xl font-bold">Titulo</h2>
                            <p class="text-gray-600">Subtitulo</p>
                        </div>
                        <ion-button fill="clear" class="ml-4">
                            <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8 12C9.10457 12 10 12.8954 10 14C10 15.1046 9.10457 16 8 16C6.89543 16 6 15.1046 6 14C6 12.8954 6.89543 12 8 12Z"
                                    fill="#000000" />
                                <path
                                    d="M8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6Z"
                                    fill="#000000" />
                                <path
                                    d="M10 2C10 0.89543 9.10457 -4.82823e-08 8 0C6.89543 4.82823e-08 6 0.895431 6 2C6 3.10457 6.89543 4 8 4C9.10457 4 10 3.10457 10 2Z"
                                    fill="#000000" />
                            </svg>
                        </ion-button>
                    </div>
                    <div class="w-full h-40 overflow-hidden rounded-t-xl">
                        <img src="https://picsum.photos/600/200" alt="Service Image" class="w-full h-full object-cover">
                    </div>
                    <p class="text-sm line-clamp-3 text-ellipsis break-words my-1 "> Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Doloribus tenetur magni error sunt autem. Qui iusto error laborum
                        asperiores cum, quasi harum aut eveniet cupiditate repudiandae sint nobis laudantium molestias.
                    </p>
                    <div class=" w-full h-10 flex gap-2 items-center px-1 justify-between">
                        <div class="flex flex-col gap-1 h-fit text-center  ">
                            <p class="text-[12px] -mb-3 font-bold">16$ </p>
                            <p class="text-[12px]">Por hora</p>
                        </div>
                        <div class="bg-[#cecece] h-2/3  w-[1px]">
                        </div>
                        <div class="flex flex-col gap-1 h-fit text-center  ">
                            <p class="text-[12px] -mb-3 font-bold">10 AM - 6 PM </p>
                            <p class="text-[12px]">Horas de trabajo</p>
                        </div>
                        <div class="bg-[#cecece] h-2/3  w-[1px]">
                        </div>
                        <div class="flex flex-col gap-1 h-fit text-center  ">
                            <p class="text-[12px] -mb-3 font-bold">Lunes - Viernes </p>
                            <p class="text-[12px]">Fecha de trabajo</p>
                        </div>
                    </div>
                    <div class=" w-full h-10 flex gap-2 items-center px-1 justify-between">
                        <div class="flex flex-col gap-1 h-fit text-center  ">
                            <p class="text-[12px] -mb-3 font-bold">99 </p>
                            <p class="text-[12px]">Trabajos</p>
                        </div>
                        <div class="bg-[#cecece] h-2/3  w-[1px]">
                        </div>
                        <div class="flex flex-col gap-1 h-fit text-center  ">
                            <div class="flex items-center -mb-3">
                                <svg width="10px" height="10px" viewBox="0 0 24 24" fill="#000">
                                    <path
                                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                                <span class="ml-1 text-[10px] font-semibold">4.9 (1.2K+ reviews)</span>
                            </div>
                            <p class="text-[12px]">calificaciones</p>
                        </div>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonAvatar,
    IonSearchbar
} from '@ionic/vue';
import { useHomeStore } from '@/stores/cliente/homeStore';
import { storeToRefs } from 'pinia';

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

</script>

<style scoped>
ion-content {
    --padding-bottom: 70px;
}
</style>