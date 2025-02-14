<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Billetera</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div class="w-full h-fit relative  ">
                <div class="bg-gray-400 w-full h-40"></div>
                <div
                    class="bg-white w-11/12 -bottom-3/4 h-fit absolute left-1/2 transform -translate-x-1/2 -translate-y-1/5 px-4 py-6 rounded-3xl border-solid border-[1px] ">
                    <div class="w-full">
                        <p class="text-[#a4a3a3]">Balance neto</p>
                    </div>
                    <div class="flex justify-between items-center my-2">
                        <p class="text-[30px] font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                            $ 11,999,459.70
                        </p>
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
                                fill="#1C274C" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12 3.25C7.48587 3.25 4.44529 5.9542 2.68057 8.24686L2.64874 8.2882C2.24964 8.80653 1.88206 9.28392 1.63269 9.8484C1.36564 10.4529 1.25 11.1117 1.25 12C1.25 12.8883 1.36564 13.5471 1.63269 14.1516C1.88206 14.7161 2.24964 15.1935 2.64875 15.7118L2.68057 15.7531C4.44529 18.0458 7.48587 20.75 12 20.75C16.5141 20.75 19.5547 18.0458 21.3194 15.7531L21.3512 15.7118C21.7504 15.1935 22.1179 14.7161 22.3673 14.1516C22.6344 13.5471 22.75 12.8883 22.75 12C22.75 11.1117 22.6344 10.4529 22.3673 9.8484C22.1179 9.28391 21.7504 8.80652 21.3512 8.28818L21.3194 8.24686C19.5547 5.9542 16.5141 3.25 12 3.25ZM3.86922 9.1618C5.49864 7.04492 8.15036 4.75 12 4.75C15.8496 4.75 18.5014 7.04492 20.1308 9.1618C20.5694 9.73159 20.8263 10.0721 20.9952 10.4545C21.1532 10.812 21.25 11.2489 21.25 12C21.25 12.7511 21.1532 13.188 20.9952 13.5455C20.8263 13.9279 20.5694 14.2684 20.1308 14.8382C18.5014 16.9551 15.8496 19.25 12 19.25C8.15036 19.25 5.49864 16.9551 3.86922 14.8382C3.43064 14.2684 3.17374 13.9279 3.00476 13.5455C2.84684 13.188 2.75 12.7511 2.75 12C2.75 11.2489 2.84684 10.812 3.00476 10.4545C3.17374 10.0721 3.43063 9.73159 3.86922 9.1618Z"
                                fill="#1C274C" />
                        </svg>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="flex flex-col -gap-1">
                            <p class="text-[#a4a3a3]">ID</p>
                            <p class="font-bold">20948218</p>
                        </div>
                        <div class="flex flex-col -gap-1">
                            <p class="text-[#a4a3a3]">Puntos</p>
                            <div class="flex gap-1 items-center ">
                                <svg width="15px" height="15px" viewBox="0 0 1024 1024">
                                    <path fill="#000000"
                                        d="m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z" />
                                    <path fill="#000000"
                                        d="m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z" />
                                    <path fill="#000000"
                                        d="M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z" />
                                </svg>
                                <p class="font-bold">
                                    320
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr class="mx-auto my-4" />
                    <div class="flex justify-between items-center">
                        <button class="flex gap-2 bg-gray-400 rounded-3xl px-4 py-2 ">
                            <svg fill="currentColor" width="25px" height="25px" viewBox="0 0 24 24" class="text-white">

                                <g data-name="Layer 2">

                                    <g data-name="diagonal-arrow-right-up">

                                        <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />

                                        <path
                                            d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />

                                    </g>

                                </g>

                            </svg>
                            <p class="text-white font-bold">Transferir</p>
                        </button>
                        <button class="flex gap-2 bg-gray-400 rounded-3xl px-4 py-2 ">
                            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" class="text-white">
                                <path d="M17 7L7 17M7 17H17M7 17V7" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="text-white font-bold">Retirar</p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-full h-32"></div>
            <div class="p-4">
                <div class="flex justify-between">
                    <p class=" capitalize font-bold mb-4 ">Transacciones Recientes</p>
                    <p>ver mas</p>
                </div>
                <div class="flex flex-col gap-4">
                    <div v-for="(transaccion, index) in transacciones" :key="index"
                        class="flex  items-center justify-between p-4 bg-gray-200 rounded-lg shadow gap-2">
                        <div class=" flex-shrink-0  items-center gap-4">
                            <img :src="transaccion.avatar" alt="Avatar" class="w-10 h-10 rounded-full">
                        </div>
                        <div class="w-full" >
                            <div class="w-full h-fit flex justify-between items-center ">
                                <span class="font-bold">{{ transaccion.nombre }}</span>
                                <span class="font-bold">+{{ transaccion.monto }}</span>
                            </div>
                            <div class=" w-full h-fit flex justify-between ">
                                <span class="text-sm text-gray-500">
                                    {{ transaccion.fecha }} {{ transaccion.hora }}
                                </span>

                                <span class="text-sm text-gray-500">{{ transaccion.tipo }}</span>
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
import { useClienteStore } from '@/stores/cliente/clienteStore';

const clienteStore = useClienteStore();

const transacciones = [
    {
        avatar: 'https://picsum.photos/200/300',
        nombre: 'Juan Pérez',
        fecha: '2023-02-20',
        hora: '10:00',
        monto: '$100.00',
        tipo: 'Débito'
    },
    {
        avatar: 'https://picsum.photos/200/300',
        nombre: 'María García',
        fecha: '2023-02-19',
        hora: '12:00',
        monto: '$50.00',
        tipo: 'Crédito'
    },
    {
        avatar: 'https://picsum.photos/200/300',
        nombre: 'Carlos López',
        fecha: '2023-02-18',
        hora: '14:00',
        monto: '$200.00',
        tipo: 'Débito'
    }
];



</script>

<style scoped>
ion-content {
    --padding-bottom: 170px
}
</style>
