<template>
    <ion-page>
        <!-- Encabezado -->
        <ion-header class="bg-white shadow-sm">
        </ion-header>
        <ion-content class="bg-gray-50">
            <!-- Formulario para cargar un archivo PDF -->
            <div class="p-6 bg-white rounded-lg shadow-md mx-4 mt-6">
                <h2 class="text-xl font-semibold text-gray-800 mb-4">Cargar Certificado</h2>

                <!-- Campo de selección de archivo -->
                <div class="mb-4 w-full">
                    <div class="w-full flex flex-col items-center">
                        <!-- Contenedor principal con el ícono y el texto -->
                        <label for="fileInput"
                            class="flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                            <!-- Ícono SVG -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 mr-3" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>

                            <!-- Texto dinámico -->
                            <span class="flex-grow text-left text-gray-700 truncate">
                                {{ fileCertificateName !== '' ? fileCertificateName : 'Seleccionar archivo' }}
                            </span>

                            <!-- Indicador de acción (opcional) -->
                            <span class="text-sm text-gray-500">PDF</span>
                        </label>

                        <!-- Input oculto -->
                        <input type="file" accept="application/pdf" ref="fileInput" id="fileInput" class="hidden"
                            @change="handleFileUpload" />
                    </div>
                </div>

                <!-- Campo de descripción -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Descripción (opcional)</label>
                    <textarea v-model="description" rows="3" placeholder="Escribe una descripción..."
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none dark:bg-white"></textarea>
                </div>

                <!-- Botón para agregar archivo -->
                <ion-button expand="block"
                    class="bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    :disabled="!selectedFile" @click="addFileToList">
                    Agregar Archivo
                </ion-button>
            </div>

            <!-- Lista de archivos cargados -->
            <div v-if="fileList.length > 0" class="mt-6 mx-4">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Archivos cargados:</h3>
                <ul class="space-y-3">
                    <li v-for="(file, index) in fileList" :key="index"
                        class="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                        <div>
                            <p class="text-sm font-medium text-gray-800">{{ file.name }}</p>
                            <p class="text-xs text-gray-500">{{ file.description || 'Sin descripción' }}</p>
                        </div>
                        <button class="text-red-500 hover:text-red-700 focus:outline-none" @click="removeFile(index)">
                            <ion-icon :icon="trashOutline" class="text-xl"></ion-icon>
                        </button>
                    </li>
                </ul>
            </div>

            <!-- Botón para enviar los archivos al backend -->
            <div class="mt-6 mx-4">
                <ion-button expand="block"
                    class="bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    :disabled="fileList.length === 0" @click="uploadFiles">
                    Enviar Certificados
                </ion-button>
            </div>

            <!-- Listado de certificados desde localStorage -->
            <div class="mt-8 mx-4">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Certificados Guardados:</h3>
                <ul class="space-y-3">
                    <li v-for="(cert, index) in savedCertificates" :key="cert.id"
                        class="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                        <div>
                            <p class="text-sm font-medium text-gray-800">{{ cert.certification_name }}</p>
                            <p class="text-xs text-gray-500">{{ cert.description || 'Sin descripción' }}</p>
                            <p class="text-xs" :class="cert.is_verified ? 'text-green-500' : 'text-yellow-500'">
                                {{ cert.is_verified ? 'Verificado' : 'Pendiente de verificación' }}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/vue';
import { trashOutline } from 'ionicons/icons';
import { api } from '@/common/apiJs.js'; // Importar la implementación de api
import { useAppStore } from '@/stores/appStore.js'
import { storeToRefs } from 'pinia';
import { Preferences } from '@capacitor/preferences';


const appStore = useAppStore();

const { setIsOpenToast } = appStore
const { message_toast } = storeToRefs(appStore)

// Variables reactivas
const description = ref('');
const selectedFile = ref(null);
const fileList = ref([]);
const fileInput = ref(null); // Referencia al campo de entrada de archivos
const savedCertificates = ref([]);
const fileCertificateName = ref('');

onMounted(async () => {
    const { value } = await Preferences.get({ key: 'user' });
    const user = value ? JSON.parse(value) : null;
    if (user && user.certifications) {
        savedCertificates.value = user.certifications;
    }
});

// Manejar la selección de archivos
const handleFileUpload = (event) => {
    const file = event.target.files[0];
    fileCertificateName.value = file.name;
    if (file && file.type === 'application/pdf') {
        selectedFile.value = file;
    } else {
        message_toast.value = "Por favor, selecciona un archivo PDF válido".
            setIsOpenToast(true)
        // alert('Por favor, selecciona un archivo PDF válido.');
        selectedFile.value = null;
    }
};

// Agregar archivo a la lista
const addFileToList = () => {
    if (!selectedFile.value) {
        message_toast.value = "Por favor, selecciona un archivo PDF antes de agregarlo.".
            setIsOpenToast(true)
        alert('');
        return;
    }

    fileList.value.push({
        file: selectedFile.value,
        name: selectedFile.value.name,
        description: description.value,
    });

    // Limpiar campos después de agregar
    selectedFile.value = null;
    description.value = '';
    fileInput.value.value = ''; // Limpiar el campo de selección de archivos
    fileCertificateName.value = '';
};

// Eliminar archivo de la lista
const removeFile = (index) => {
    fileList.value.splice(index, 1);
};

// Enviar archivos al backend
const uploadFiles = async () => {
    const formData = new FormData();
    fileList.value.forEach((item, index) => {
        formData.append(`files[${index}]`, item.file);
        formData.append(`descriptions[${index}]`, item.description);
    });

    formData.append('user_id', 1); // Aquí puedes obtener el ID del usuario actual

    try {
        const response = await api.post('upload-certificates', formData); // Usar la implementación de api
        message_toast.value = response.data.message
        setIsOpenToast(true)
        fileList.value = []; // Limpiar la lista después de enviar
    } catch (error) {
        message_toast.value = "Por favor, selecciona un archivo PDF antes de agregarlo.".
            setIsOpenToast(true)
    }
};
</script>

<style scoped>
ion-content {
    --padding-bottom: 100px;
}
</style>