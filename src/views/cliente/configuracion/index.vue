<template>
    <ion-page>
        <ion-header>

        </ion-header>
        <ion-content class="ion-padding">
            <div class="container mx-auto">
                <h1 class="text-2xl font-bold mb-4">Configuración del Cliente</h1>
                <form @submit.prevent="submitForm" class="space-y-4">
                    <div class="mb-4">
                        <label for="banner_photo" class="block text-sm font-medium text-gray-700">Foto de Banner</label>
                        <input type="file" id="banner_photo" @change="handleImageChange"
                            class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-white">
                        <img v-if="form.banner_photo_url" :src="form.banner_photo_url" alt="Banner Preview"
                            class="mt-2 w-full h-48 object-cover rounded-lg shadow-md">
                    </div>
                    <div class="mb-4">
                        <label for="title_user" class="block text-sm font-medium text-gray-700">Título del
                            Usuario</label>
                        <input type="text" id="title_user" v-model="form.title_user"
                            class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-white">
                    </div>
                    <div class="mb-4">
                        <label for="user_mobile" class="block text-sm font-medium text-gray-700">Móvil del
                            Usuario</label>
                        <input type="text" id="user_mobile" v-model="form.user_mobile"
                            class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-white">
                    </div>
                    <div class="mb-4">
                        <label for="main_address" class="block text-sm font-medium text-gray-700">Dirección
                            Principal</label>
                        <input type="text" id="main_address" v-model="form.main_address"
                            class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-white">
                    </div>
                    <div class="mb-4">
                        <label for="abount_user" class="block text-sm font-medium text-gray-700">Acerca del
                            Usuario</label>
                        <textarea id="abount_user" v-model="form.abount_user"
                            class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-none h-32 p-2 dark:bg-white"></textarea>
                    </div>
                    <div class="mb-4">
                        <label for="first_name" class="block text-sm font-medium text-gray-700">Primer Nombre</label>
                        <input type="text" id="first_name" v-model="form.first_name"
                            class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-white">
                    </div>
                    <div class="mb-4">
                        <label for="second_name" class="block text-sm font-medium text-gray-700">Segundo Nombre</label>
                        <input type="text" id="second_name" v-model="form.second_name"
                            class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-white">
                    </div>
                    <div class="mb-4">
                        <label for="first_last_name" class="block text-sm font-medium text-gray-700">Primer
                            Apellido</label>
                        <input type="text" id="first_last_name" v-model="form.first_last_name"
                            class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-white">
                    </div>
                    <div class="mb-4">
                        <label for="second_last_name" class="block text-sm font-medium text-gray-700">Segundo
                            Apellido</label>
                        <input type="text" id="second_last_name" v-model="form.second_last_name"
                            class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-white">
                    </div>
                    <div class="mb-4">
                        <label for="nationality" class="block text-sm font-medium text-gray-700">Nacionalidad</label>
                        <input type="text" id="nationality" v-model="form.nationality"
                            class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-white">
                    </div>
                    <div class="mb-4">
                        <label for="website" class="block text-sm font-medium text-gray-700">Sitio Web</label>
                        <input type="text" id="website" v-model="form.website"
                            class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-white">
                    </div>
                    <div class="mb-4">
                        <label for="birthdate" class="block text-sm font-medium text-gray-700">Fecha de
                            Nacimiento</label>
                        <input type="date" id="birthdate" v-model="form.birthdate"
                            class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-white">
                    </div>
                    <div>
                        <button type="submit"
                            class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex gap-2 items-center justify-center">
                            <svg class="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" v-if="is_loading">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { Preferences } from '@capacitor/preferences';
import { api } from '@/common/apiJs';
import { useClienteStore } from '@/stores/cliente/clienteStore'
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/stores/appStore.js'

const clienteStore = useClienteStore();
const { basic_information } = storeToRefs(clienteStore);
const { loadBasicInformationUser } = clienteStore
const appStore = useAppStore();
const { message_toast } = storeToRefs(appStore);
const { setIsOpenToast } = appStore;


const is_loading = ref(false);
const form = ref({
    user_id: '',
    banner_photo: null,
    banner_photo_url: '',
    title_user: '',
    user_mobile: '',
    main_address: '',
    abount_user: '',
    first_name: '',
    second_name: '',
    first_last_name: '',
    second_last_name: '',
    nationality: '',
    website: '',
    birthdate: ''
});


const SetBasicInformationToForm = async () => {
    try {
        const { data: { user } } = await api.get(`user-basic-information/${form.value.user_id}`);
        const basicInfo = user.basic_information || {};
        form.value.banner_photo_url = `${api.defaults.baseURL.replace('/api', '')}${basicInfo.banner_photo_url}` || '';
        form.value.title_user = basicInfo.title_user || '';
        form.value.user_mobile = basicInfo.user_mobile || '';
        form.value.main_address = basicInfo.main_address || '';
        form.value.abount_user = basicInfo.abount_user || '';
        form.value.first_name = basicInfo.first_name || '';
        form.value.second_name = basicInfo.second_name || '';
        form.value.first_last_name = basicInfo.first_last_name || '';
        form.value.second_last_name = basicInfo.second_last_name || '';
        form.value.nationality = basicInfo.nationality || '';
        form.value.website = basicInfo.website || '';
        form.value.birthdate = basicInfo.birthdate || '';

    } catch (error) {
        message_toast.value = 'Error al guardar la información';
        setIsOpenToast(true);
        console.error(error);
    }
};
const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        form.value.banner_photo = file;
        form.value.banner_photo_url = URL.createObjectURL(file);
    }
};

const submitForm = async () => {
    try {
        is_loading.value = true;
        const formData = new FormData();
        for (const key in form.value) {
            if (key !== 'banner_photo_url') {
                formData.append(key, form.value[key]);
            }
        }
        if (form.value.banner_photo) {
            formData.append('banner_photo', form.value.banner_photo);
        } 
        
        const { data } = await api.post('store-basic-information', formData);
        message_toast.value = data.message;
        setIsOpenToast(true);
        SetBasicInformationToForm();
        is_loading.value = false;
    } catch (error) {
        message_toast.value = 'Error al guardar la información';
        setIsOpenToast(true);
        is_loading.value = false;
        console.error(error);
    }
};

onMounted(async () => {
    loadBasicInformationUser();
    const { value } = await Preferences.get({ key: 'user' });
    if (value) {
        const user = JSON.parse(value);
        form.value.user_id = user.id;
    }

    if (basic_information.value) {
        SetBasicInformationToForm();
    }




});
</script>
<style scoped>
ion-content {
    --padding-bottom: 100px
}
</style>