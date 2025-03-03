<template>
    <ion-page>
        <ion-header>

        </ion-header>
        <ion-content class="ion-padding">

            <!-- Título principal -->
            <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">Configuración del Cliente</h1>

            <form @submit.prevent="submitForm" class="space-y-6">
                <!-- Sección de Foto de Banner -->
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold text-gray-700 mb-4">Foto de Banner</h2>
                    <input type="file" id="banner_photo" @change="handleImageChange"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white" />
                    <img v-if="form.banner_photo_url" :src="form.banner_photo_url" alt="Banner Preview"
                        class="mt-4 w-full h-48 object-cover rounded-lg shadow-md" />
                </div>

                <!-- Sección de Información Básica -->
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold text-gray-700 mb-4">Información Básica</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label for="title_user" class="block text-sm font-medium text-gray-600">Título del
                                Usuario</label>
                            <input type="text" id="title_user" v-model="form.title_user"
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white" />
                        </div>
                        <div>
                            <label for="user_mobile" class="block text-sm font-medium text-gray-600">Móvil del
                                Usuario</label>
                            <input type="text" id="user_mobile" v-model="form.user_mobile"
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white" />
                        </div>
                        <div>
                            <label for="main_address" class="block text-sm font-medium text-gray-600">Dirección
                                Principal</label>
                            <input type="text" id="main_address" v-model="form.main_address"
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white" />
                        </div>
                        <div>
                            <label for="abount_user" class="block text-sm font-medium text-gray-600">Acerca del
                                Usuario</label>
                            <textarea id="abount_user" v-model="form.abount_user"
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none h-32 dark:bg-white"></textarea>
                        </div>
                    </div>
                </div>

                <!-- Sección de Datos Personales -->
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold text-gray-700 mb-4">Datos Personales</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label for="first_name" class="block text-sm font-medium text-gray-600">Primer
                                Nombre</label>
                            <input type="text" id="first_name" v-model="form.first_name"
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white" />
                        </div>
                        <div>
                            <label for="second_name" class="block text-sm font-medium text-gray-600">Segundo
                                Nombre</label>
                            <input type="text" id="second_name" v-model="form.second_name"
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white" />
                        </div>
                        <div>
                            <label for="first_last_name" class="block text-sm font-medium text-gray-600">Primer
                                Apellido</label>
                            <input type="text" id="first_last_name" v-model="form.first_last_name"
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white" />
                        </div>
                        <div>
                            <label for="second_last_name" class="block text-sm font-medium text-gray-600">Segundo
                                Apellido</label>
                            <input type="text" id="second_last_name" v-model="form.second_last_name"
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white" />
                        </div>
                        <div>
                            <label for="nationality"
                                class="block text-sm font-medium text-gray-600">Nacionalidad</label>
                            <input type="text" id="nationality" v-model="form.nationality"
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white" />
                        </div>
                        <div>
                            <label for="website" class="block text-sm font-medium text-gray-600">Sitio Web</label>
                            <input type="text" id="website" v-model="form.website"
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white" />
                        </div>
                        <div>
                            <label for="birthdate" class="block text-sm font-medium text-gray-600">Fecha de
                                Nacimiento</label>
                            <input type="date" id="birthdate" v-model="form.birthdate"
                                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white" />
                        </div>
                    </div>
                </div>

                <!-- Sección de Avatar -->
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold text-gray-700 mb-4">Avatar</h2>
                    <input type="file" id="avatar" @change="handleAvatarChange"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white" />
                    <img v-if="form.avatar_url" :src="form.avatar_url" alt="Avatar Preview"
                        class="mt-4 w-24 h-24 object-cover rounded-full shadow-md" />
                </div>

                <!-- Botones de Acción -->
                <div class="flex flex-col md:flex-row gap-4">
                    <button type="button" @click="submitAvatarForm"
                        class="w-full md:w-auto px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center justify-center gap-2">
                        <svg v-if="is_loading_avatar" class="animate-spin size-5 text-white"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                        Guardar Avatar
                    </button>
                    <button type="submit"
                        class="w-full md:w-auto px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center gap-2">
                        <svg v-if="is_loading" class="animate-spin size-5 text-white" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                        Guardar
                    </button>
                </div>
            </form>
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
const is_loading_avatar = ref(false);
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
    birthdate: '',
    avatar: null,
    avatar_url: ''
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
        form.value.avatar_url = `${api.defaults.baseURL.replace('/api', '')}${basicInfo.avatar_url}` || '';

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

const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        form.value.avatar = file;
        form.value.avatar_url = URL.createObjectURL(file);
    }
};

const submitForm = async () => {
    try {
        is_loading.value = true;
        const formData = new FormData();
        for (const key in form.value) {
            if (key !== 'banner_photo_url' && key !== 'avatar_url' && key !== 'avatar') {
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

const submitAvatarForm = async () => {
    try {
        is_loading_avatar.value = true;
        const formData = new FormData();
        formData.append('user_id', form.value.user_id);
        formData.append('avatar', form.value.avatar);

        const { data } = await api.post('update-avatar', formData);
        message_toast.value = data.message;
        setIsOpenToast(true);
        SetBasicInformationToForm();
        is_loading_avatar.value = false;
    } catch (error) {
        message_toast.value = 'Error al guardar el avatar';
        setIsOpenToast(true);
        is_loading_avatar.value = false;
        console.error(error);
    }
};

onMounted(async () => {
    loadBasicInformationUser();
    const { value } = await Preferences.get({ key: 'user' });
    if (value) {
        const user = JSON.parse(value);
        form.value.user_id = user.id;
        form.value.avatar_url = user.profile_photo_url;
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