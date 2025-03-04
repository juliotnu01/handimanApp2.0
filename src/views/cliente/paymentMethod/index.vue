<template>
    <ion-page>
        <!-- Header -->
        <ion-header>

        </ion-header>

        <!-- Content -->
        <ion-content class="bg-gray-100">
            <div class="p-6">
                <!-- Lista de Métodos de Pago -->
                <div v-if="paymentMethods.length > 0" class="space-y-4 mb-8">
                    <h3 class="text-lg font-semibold text-gray-800">Tus Métodos de Pago</h3>
                    <div v-for="method in paymentMethods" :key="method.id" class="bg-white rounded-lg shadow-lg p-4">
                        <div class="flex justify-between items-center mb-2">
                            <div class="text-gray-500 text-sm">{{ method.bank_name }}</div>
                            <div class="text-gray-500 text-sm">{{ method.type_account }}</div>
                        </div>
                        <div class="text-lg font-bold text-gray-800 mb-1">{{ method.titular_name }}</div>
                        <div class="text-gray-600">
                            **** **** **** {{ method.account_number.slice(-4) }}
                        </div>
                        <div class="mt-2 flex items-center">
                            <span :class="[
                                method.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                                'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
                            ]">
                                {{ method.status ? 'Activo' : 'Inactivo' }}
                            </span>
                        </div>
                    </div>
                </div>
                <div v-else class="text-center text-gray-500">
                    No tienes métodos de pago registrados.
                </div>

                <!-- Formulario -->
                <form @submit.prevent="submitForm" class="space-y-6">
                    <!-- Campo Nombre del Banco -->
                    <div>
                        <label for="bank_name" class="block text-sm font-medium text-gray-700">
                            Nombre del Banco
                        </label>
                        <input type="text" id="bank_name" v-model="formData.bank_name" placeholder="Ej. Banco Nacional"
                            class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white"
                            required />
                    </div>

                    <!-- Campo Nombre del Titular -->
                    <div>
                        <label for="titular_name" class="block text-sm font-medium text-gray-700">
                            Nombre del Titular
                        </label>
                        <input type="text" id="titular_name" v-model="formData.titular_name"
                            placeholder="Ej. Juan Pérez" disabled
                            class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white"
                            required />
                    </div>

                    <!-- Campo Número de Cuenta -->
                    <div>
                        <label for="account_number" class="block text-sm font-medium text-gray-700">
                            Número de Cuenta
                        </label>
                        <input type="text" id="account_number" v-model="formData.account_number"
                            placeholder="Ej. 1234567890"
                            class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white"
                            required />
                    </div>

                    <!-- Campo ID del Titular -->
                    <div>
                        <label for="id_titular" class="block text-sm font-medium text-gray-700">
                            ID del Titular
                        </label>
                        <input type="text" id="id_titular" v-model="formData.id_titular" placeholder="Ej. 12345678"
                            class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white"
                            required />
                    </div>

                    <!-- Tipo de Cuenta -->
                    <div>
                        <label for="type_account" class="block text-sm font-medium text-gray-700">
                            Tipo de Cuenta
                        </label>
                        <select id="type_account" v-model="formData.type_account"
                            class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-white"
                            required>
                            <option value="" disabled>Selecciona un tipo</option>
                            <option value="ahorro">Cuenta de Ahorro</option>
                            <option value="corriente">Cuenta Corriente</option>
                        </select>
                    </div>

                    <!-- Botón de Envío -->
                    <button type="submit"
                        class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Guardar Método de Pago
                    </button>
                </form>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { Preferences } from '@capacitor/preferences';
import { api } from '@/common/apiJs.js'
import { useAppStore } from '@/stores/appStore.js'
import { storeToRefs } from 'pinia';

const appStore = useAppStore();

const { setIsOpenToast } = appStore
const { message_toast } = storeToRefs(appStore)
const paymentMethods = ref([]);

// Datos del formulario
const formData = ref({
    bank_name: '',
    titular_name: '',
    account_number: '',
    id_titular: '',
    type_account: '',
    status: true,
    user_id: null // Inicializamos como null
});

// Función para cargar el ID del usuario desde el localStorage
const loadUserId = async () => {
    try {
        const { value } = await Preferences.get({ key: 'user' });
        const user = JSON.parse(value); // Parseamos el objeto almacenado
        const fullName = computed(() => `${user.basic_information?.first_name} ${user.basic_information?.second_name} ${user.basic_information?.first_last_name} ${user.basic_information?.second_last_name}`);
        if (value) {
            formData.value.user_id = user.id; // Asignamos el ID del usuario
            formData.value.titular_name = fullName.value; // Asignamos el nombre completo del usuario
            paymentMethods.value = user.payment_methods || []; // Cargamos los métodos de pago del usuario
        } else {
            message_toast.value = "No se encontró el usuario en el localStorage".
                setIsOpenToast(true)
        }
    } catch (error) {

        message_toast.value = "Error al cargar el ID del usuario".
            setIsOpenToast(true)
    }
};

// Función para enviar el formulario
const submitForm = async () => {
    try {
        // Validar que el user_id esté presente
        if (!formData.value.user_id) {
            message_toast.value = "'No se pudo obtener el ID del usuario. Por favor, inicia sesión nuevamente.".
                setIsOpenToast(true)
            return;
        }
        await api.post('store-payment-method', formData.value);
        formData.value = {
            bank_name: '',
            titular_name: '',
            account_number: '',
            id_titular: '',
            type_account: '',
            status: true,
            user_id: formData.value.user_id
        };
        message_toast.value = "¡Método de pago registrado con éxito!".
            setIsOpenToast(true)
    } catch (error) {
        message_toast.value = "Ocurrió un error al registrar el método de pago.".
            setIsOpenToast(true)
    }
};

// Cargar el ID del usuario al montar el componente
onMounted(() => {
    loadUserId();
});
</script>

<style scoped>
ion-content {
    --padding-bottom: 100px;
}
</style>