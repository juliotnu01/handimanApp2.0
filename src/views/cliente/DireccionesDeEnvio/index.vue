<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Direcciones de envío</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <segment :segments="['Agregar Dirrección', 'Lista de Direcciones']"
                @update:model-value="handleSegmentChange">
                <template #segment-0>
                    <div class="flex flex-col gap-4">
                        <!-- Autocompletado de direcciones -->
                        <div class="bg-white p-6 rounded-lg shadow-md flex flex-col gap-2">
                            <label for="autocomplete-input" class="block text-sm font-medium text-gray-600">
                                Dirección de envío
                            </label>
                            <input id="autocomplete-input" type="text" :placeholder="'Ingrese su dirección'"
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white"
                                ref="autocompleteInput" v-model="direccionInput" />
                        </div>

                        <!-- Mapa -->
                        <div class="bg-white p-6 rounded-lg shadow-md relative" style="height: 400px;">
                            <div ref="mapElement" class="w-full h-full"></div>
                        </div>

                        <!-- Botón Guardar -->
                        <button
                            class="w-full md:w-auto px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center gap-2"
                            @click="guardarDireccion" :disabled="isLoadingGuardar">
                            <svg v-if="isLoadingGuardar" class="animate-spin size-5 text-white"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4">
                                </circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            <p v-else>
                                Guardar
                            </p>
                        </button>
                    </div>
                </template>
                <template #segment-1>
                    <div class="flex flex-col gap-4">
                        <div v-for="direccion in direccionesDelUsuarioComputed" :key="direccion.id"
                            class="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <p class="font-semibold text-gray-800">{{ direccion.direccion }}</p>
                                <p class="text-xs text-gray-500 mt-1">Agregada: {{ new
                                    Date(direccion.created_at).toLocaleDateString() }}</p>
                            </div>
                            <div class="flex items-center gap-2 justify-between">
                                <div class="flex items-center justify-center gap-2">
                                    <span class="text-sm text-gray-600">{{ direccion.status ? 'Activo' : 'Inactivo'
                                    }}</span>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" class="sr-only peer" :checked="direccion.status === 1"
                                            @click.prevent="actualizarStatusDireccion(direccion, direccion.status)" />
                                        <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer peer-checked:bg-indigo-600 transition-colors">
                                        </div>
                                        <div
                                            class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5">
                                        </div>
                                        <div
                                            class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5 flex items-center justify-center">
                                            <svg v-if="direccion.loading" class="animate-spin h-4 w-4 text-indigo-600"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                    stroke-width="4"></circle>
                                                <path class="opacity-75" fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                                </path>
                                            </svg>
                                        </div>
                                    </label>
                                </div>
                                <button class="p-2 rounded-full hover:bg-red-100 transition-colors"
                                    @click="elimininarDireccion(direccion)" :disabled="direccion.loading"
                                    title="Eliminar dirección">
                                    <svg v-if="direccion.loading" class="animate-spin h-4 w-4 text-red-600"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m-7 0h10" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div v-if="direccionesDelUsuario.length === 0" class="text-center text-gray-500 py-8">
                            No hay direcciones registradas.
                            {{ direccionesDelUsuario }}
                        </div>
                    </div>
                </template>
            </segment>

        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { useDireccionesDeEnvioStore } from '@/stores/cliente/direccionesDeEnvioStore';
import { storeToRefs } from 'pinia';
import { onMounted, ref, nextTick, watchEffect, computed } from 'vue';
import segment from '@/components/segment.vue';


const DireccionesDeEnvioStore = useDireccionesDeEnvioStore();
const { isLoadingGuardar, direccionInput, direccionesDelUsuario } = storeToRefs(DireccionesDeEnvioStore);
const { inicializarMapa, inicializarAutocompletado, guardarDireccion, obtenerDireccionesDeUsuario, actualizarStatusDireccion, elimininarDireccion } = DireccionesDeEnvioStore;

const mapElement = ref(null);
const autocompleteInput = ref(null);

const direccionesDelUsuarioComputed = computed({
    get() {
        return direccionesDelUsuario.value;
    },
    set(value) {
        direccionesDelUsuario.value = value;
    }
});

const handleSegmentChange = async (newIndex) => {
    if (newIndex === 0) {
        await nextTick();
        obtenerDireccionesDeUsuario();
        const stopWatch = watchEffect(() => {
            if (mapElement.value && autocompleteInput.value && DireccionesDeEnvioStore.google) {
                inicializarMapa(mapElement.value);
                inicializarAutocompletado(autocompleteInput.value);
                stopWatch();
            }
        });
    }
};

onMounted(async () => {
    if (!DireccionesDeEnvioStore.google) {
        await DireccionesDeEnvioStore.loader.load();
        DireccionesDeEnvioStore.google = window.google; // Asignar la API global
    }
    if (mapElement.value && DireccionesDeEnvioStore.google) {
        inicializarMapa(mapElement.value);
    }
    if (autocompleteInput.value && DireccionesDeEnvioStore.google) {
        inicializarAutocompletado(autocompleteInput.value);
    }
    obtenerDireccionesDeUsuario();

});


</script>

<style scoped>
ion-content {
    --padding-bottom: 70px;
}
</style>