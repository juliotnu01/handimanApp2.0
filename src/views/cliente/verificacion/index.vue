<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Verificación</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="p-4">
            <div class="flex flex-col items-center justify-center  bg-gray-100" v-if="isFullyVerified">
                <div class="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                    <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-green-500" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <polyline points="9 15 12 18 15 15" />
                        </svg>
                    </div>

                    <!-- Título y Descripción -->
                    <h2 class="text-xl font-semibold text-center text-gray-800">Usuario Verificado</h2>
                    <p class="mt-2 text-sm text-center text-gray-600">
                        Tu cuenta ha sido verificada exitosamente. ¡Ahora puedes disfrutar de todos los beneficios!
                    </p>
                </div>
            </div>
            <ion-grid v-else>
                <ion-row class="mb-4">
                    <ion-col>
                        <div class="border border-gray-300 rounded-lg p-4 flex flex-col">
                            <ion-label class="block mb-2 text-gray-700">Identificación (Frente)</ion-label>
                            <input type="file" @change="onFileChange($event, 'front')" accept="image/*"
                                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
                            <div v-if="!frontImageUrl" class="skeleton mt-4 w-full h-48 rounded-lg bg-gray-200"></div>
                            <img v-if="frontImageUrl" :src="frontImageUrl" alt="Vista previa frente"
                                class="mt-4 w-full h-auto rounded-lg" />
                            <ion-button v-if="frontImage" @click="uploadFrontImage"
                                class="mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Subir
                                Frente</ion-button>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row v-if="frontUploaded" class="mb-4">
                    <ion-col>
                        <div class="border border-gray-300 rounded-lg p-4 flex flex-col">
                            <ion-label class="block mb-2 text-gray-700">Identificación (Dorso)</ion-label>
                            <input type="file" @change="onFileChange($event, 'back')" accept="image/*"
                                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
                            <div v-if="!backImageUrl" class="skeleton mt-4 w-full h-48 rounded-lg bg-gray-200"></div>
                            <img v-if="backImageUrl" :src="backImageUrl" alt="Vista previa dorso"
                                class="mt-4 w-full h-auto rounded-lg" />
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row v-if="frontUploaded && backImage">
                    <ion-col>
                        <ion-button @click="submitVerification"
                            class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Enviar</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonLabel, IonButton, IonIcon } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { api } from '@/common/apiJS';
import { Preferences } from '@capacitor/preferences';

const frontImage = ref(null);
const backImage = ref(null);
const frontImageUrl = ref(null);
const backImageUrl = ref(null);
const frontUploaded = ref(false);
const userId = ref(null);
const isFullyVerified = ref(false);

const checkFrontUploaded = async () => {
    const { value } = await Preferences.get({ key: 'frontUploaded' });
    frontUploaded.value = value === 'true';
};

const getUserId = async () => {
    const { value } = await Preferences.get({ key: 'user' });
    if (value) {
        const user = JSON.parse(value);
        userId.value = user.id;
        isFullyVerified.value = user.has_all_verifications;
        console.log(isFullyVerified.value);

    }
};

onMounted(() => {
    checkFrontUploaded();
    getUserId();
});

const onFileChange = (event, type) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        if (type === 'front') {
            frontImage.value = file;
            frontImageUrl.value = e.target.result;
        } else if (type === 'back') {
            backImage.value = file;
            backImageUrl.value = e.target.result;
        }
    };
    reader.readAsDataURL(file);
};

const uploadFrontImage = async () => {
    const formData = new FormData();
    formData.append('file', frontImage.value);
    formData.append('user_id', userId.value);
    formData.append('type', 'front');

    try {
        const response = await api.post('/verify-user', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log('Subida de frente exitosa:', response.data);
        await Preferences.set({ key: 'frontUploaded', value: 'true' });
        frontUploaded.value = true;
    } catch (error) {
        console.error('Error en la subida del frente:', error);
    }
};

const submitVerification = async () => {
    const formData = new FormData();
    formData.append('file', backImage.value);
    formData.append('user_id', userId.value);
    formData.append('type', 'back');

    try {
        const response = await api.post('/verify-user', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log('Verificación exitosa:', response.data);
    } catch (error) {
        console.error('Error en la verificación:', error);
    }
};
</script>

<style scoped>
ion-content {
    --padding-bottom: 100px;
}

.skeleton {
    @apply animate-pulse;
}
</style>