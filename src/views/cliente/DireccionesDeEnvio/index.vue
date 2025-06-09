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
                            <div class="flex items-center gap-2">
                                <span class="text-sm text-gray-600">{{ direccion.status ? 'Activo' : 'Inactivo'
                                    }}</span>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" class="sr-only peer" :checked="direccion.status === 1"
                                        @click.prevent="actualizarStatusDireccion(direccion.id, direccion.status)" />
                                    <div
                                        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer peer-checked:bg-indigo-600 transition-colors">
                                    </div>
                                    <div
                                        class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5">
                                    </div>
                                </label>
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
import { onMounted, ref, nextTick, watchEffect, computed, watch } from 'vue';
import segment from '@/components/segment.vue';


const DireccionesDeEnvioStore = useDireccionesDeEnvioStore();
const { isLoadingGuardar, direccionInput, direccionesDelUsuario } = storeToRefs(DireccionesDeEnvioStore);
const { inicializarMapa, inicializarAutocompletado, guardarDireccion, obtenerDireccionesDeUsuario, actualizarStatusDireccion } = DireccionesDeEnvioStore;

// Referencias para el mapa y el input de autocompletado
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
    console.log({
        direccionesDelUsuarioComputed
    });

    // Cargar la API de Google Maps si aún no está cargada
    if (!DireccionesDeEnvioStore.google) {
        await DireccionesDeEnvioStore.loader.load();
        DireccionesDeEnvioStore.google = window.google; // Asignar la API global
    }

    // Inicializar el mapa
    if (mapElement.value && DireccionesDeEnvioStore.google) {
        inicializarMapa(mapElement.value);
    }

    // Inicializar el autocompletado
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