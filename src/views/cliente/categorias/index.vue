<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Categorias</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="flex flex-wrap gap-8 my-2 justify-center ">
                <div v-for="(item, i) in items" :key="i"
                    class="w-24 h-24 rounded-lg bg-gray-200 flex flex-col items-center justify-center text-[10px] shrink-0 p-1 relative">
                    <img :src="item.image" alt="" class="w-full h-full object-cover rounded-lg">
                    <span
                        class="absolute bg-white -bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-75 px-1 rounded text-center whitespace-normal w-full break-words">
                        {{ item.title }}
                    </span>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { storeToRefs } from 'pinia';
import { useCategoriasStore } from '@/stores/cliente/categoriasStore';
const categoriasStore = useCategoriasStore();
const {
    items,
} = storeToRefs(categoriasStore);
</script>
