<template>
    <ion-page>
        <ion-header>
        </ion-header>
        <ion-content class="ion-padding">
            <!-- Título principal -->
            <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">Configuración del Cliente</h1>
            <div class="space-y-6">
                <!-- Sección de Foto de Banner -->
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold text-gray-700 mb-4">Foto de Banner</h2>
                    <div
                        class="mt-1  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white flex gap-2 items-center justify-between">
                        <div class="flex gap-2">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" class=" flex-shrink-0 ">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V16.999V17.001V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V14V6ZM19 6V14.5858L15.7071 11.2929C15.3166 10.9024 14.6834 10.9024 14.2929 11.2929L13 12.5858L9.20711 8.79289C8.81658 8.40237 8.18342 8.40237 7.79289 8.79289L5 11.5858V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6ZM5 18V14.4142L8.5 10.9142L12.2929 14.7071C12.6834 15.0976 13.3166 15.0976 13.7071 14.7071L15 13.4142L19 17.4142V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18ZM14.5 10C15.3284 10 16 9.32843 16 8.5C16 7.67157 15.3284 7 14.5 7C13.6716 7 13 7.67157 13 8.5C13 9.32843 13.6716 10 14.5 10Z"
                                    fill="#000000" />
                            </svg>
                            <label for="banner_photo"> {{ bannerNameImg ? (bannerNameImg.length > 20 ?
                                bannerNameImg.slice(0, 10) + '...' + bannerNameImg.slice(-7) : bannerNameImg) :
                                'Selecciona una imagen' }} </label>
                            <input type="file" id="banner_photo" @change="handleImageChange" class="hidden" />
                        </div>
                        <button class="h-fit w-fit" @click="clearBannerPhoto" v-if="bannerNameImg">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" class="">
                                <path d="M9 9L15 15" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M15 9L9 15" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <circle cx="12" cy="12" r="9" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
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

                <!-- Botones de Acción -->
                <div class="flex flex-col md:flex-row gap-4">
                    <button @click.prevent="submitForm"
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

                <!-- Sección de Avatar -->
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold text-gray-700 mb-4">Avatar</h2>
                    <div
                        class="mt-1  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white flex gap-2 items-center justify-between">
                        <div class="flex gap-2">
                            <svg width="20px" height="20px" viewBox="0 0 16 16" class=" flex-shrink-0 ">
                                <path
                                    d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 8 c 1.109375 0 2 -0.890625 2 -2 v -0.5 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 z m 0 0"
                                    fill="#2e3436" />
                            </svg>
                            <label for="avatar"> {{ avatarNameImg ? (avatarNameImg.length > 20 ?
                                avatarNameImg.slice(0, 10) + '...' + avatarNameImg.slice(-7) : avatarNameImg) :
                                'Selecciona una imagen' }} </label>
                            <input type="file" id="avatar" @change="handleAvatarChange" class="hidden" />
                        </div>
                        <button class="h-fit w-fit" @click="clearAvatarPhoto" v-if="avatarNameImg">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" class="">
                                <path d="M9 9L15 15" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M15 9L9 15" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <circle cx="12" cy="12" r="9" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <img v-if="form.avatar_url" :src="form.avatar_url" alt="Avatar Preview"
                        class="mt-4 w-24 h-24 object-cover rounded-full shadow-md" />
                </div>


                <!-- Botones de Acción -->
                <div class="flex flex-col md:flex-row gap-4">
                    <button type="button" @click.prevent="submitAvatarForm"
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
                </div>
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
const bannerNameImg = ref(null);
const avatarNameImg = ref(null);
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
        form.value.avatar_url = user.profile_photo_url || '';

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
        bannerNameImg.value = file.name;
    }
};

const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        form.value.avatar = file;
        form.value.avatar_url = URL.createObjectURL(file);
        avatarNameImg.value = file.name;
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
const clearBannerPhoto = () => {
    bannerNameImg.value = null;
    // Limpiar el input file
    const input = document.getElementById('banner_photo');
    if (input) {
        input.value = '';
    }
    SetBasicInformationToForm();
};
const clearAvatarPhoto = () => {
    avatarNameImg.value = null;
    // Limpiar el input file
    const input = document.getElementById('avatar');
    if (input) {
        input.value = '';
    }
    SetBasicInformationToForm();
};

const reBuildAvatarUser = async () => {
    console.log({ f: form.value });
    console.log({ f: form.value.avatar_url });

    // const { value: user } = await Preferences.get({ key: 'user' });
    // const userData = JSON.parse(user);
    // console.log({ u:userData.profile_photo_url, form: form.value.avatar_url });
    // userData.profile_photo_url = form.value.avatar_url;
    // await Preferences.set({ key: 'user', value: JSON.stringify(userData) });
    // console.log({ u:userData.profile_photo_url, form: form.value.avatar_url });
};
onMounted(async () => {
    loadBasicInformationUser();
    const { value } = await Preferences.get({ key: 'user' });
    if (value) {
        const user = JSON.parse(value);
        form.value.user_id = user.id;
        form.value.avatar_url = user.profile_photo_url;
    }
    reBuildAvatarUser()

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