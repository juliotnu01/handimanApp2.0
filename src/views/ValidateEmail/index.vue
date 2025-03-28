<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div
                class="bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-100 min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
                <div
                    class="relative w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white shadow-xl rounded-2xl overflow-hidden max-h-screen overflow-y-auto">
                    <div class="px-6 pt-16 pb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center">
                        <div class="inline-block bg-white rounded-full shadow-md p-2 -mt-12 mb-4">
                            <img src="/logo.png" alt="Logo" class="h-16 w-16" />
                        </div>
                        <h1 class="text-3xl font-semibold tracking-tight">
                            Verificación de Código
                        </h1>
                        <p class="mt-2 text-lg font-light">Ingresa el código de 6 dígitos.</p>
                    </div>

                    <div class="px-8 py-12">
                        <form class="space-y-6">
                            <div class="flex justify-center space-x-4">
                                <ion-input v-model="code[0]" type="number" maxlength="1"
                                    class="text-center text-2xl font-semibold w-16 h-16 rounded-md shadow-2xl"
                                    @input="handleInput(0)" @keydown="handleKeyDown(0, $event)"></ion-input>
                                <ion-input v-model="code[1]" type="number" maxlength="1"
                                    class="text-center text-2xl font-semibold w-16 h-16 rounded-md shadow-2xl"
                                    @input="handleInput(1)" @keydown="handleKeyDown(1, $event)"></ion-input>
                                <ion-input v-model="code[2]" type="number" maxlength="1"
                                    class="text-center text-2xl font-semibold w-16 h-16 rounded-md shadow-2xl"
                                    @input="handleInput(2)" @keydown="handleKeyDown(2, $event)"></ion-input>
                                <ion-input v-model="code[3]" type="number" maxlength="1"
                                    class="text-center text-2xl font-semibold w-16 h-16 rounded-md shadow-2xl"
                                    @input="handleInput(3)" @keydown="handleKeyDown(3, $event)"></ion-input>
                                <ion-input v-model="code[4]" type="number" maxlength="1"
                                    class="text-center text-2xl font-semibold w-16 h-16 rounded-md shadow-2xl"
                                    @input="handleInput(4)" @keydown="handleKeyDown(4, $event)"></ion-input>
                                <ion-input v-model="code[5]" type="number" maxlength="1"
                                    class="text-center text-2xl font-semibold w-16 h-16 rounded-md shadow-2xl"
                                    @input="handleInput(5)" @keydown="handleKeyDown(5, $event)"></ion-input>
                            </div>
                            <div>
                                <ion-button expand="block" @click="resendCode" class="font-bold" color="secondary">
                                    Reenviar Código
                                </ion-button>
                            </div>
                            <div>
                                <ion-button expand="block" @click="verifyCode" class="font-bold">
                                    Verificar
                                </ion-button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { IonPage, IonContent, IonInput, IonButton, toastController } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { Preferences } from '@capacitor/preferences';
import { api } from '@/common/apiJs'

const code = ref(['', '', '', '', '', '']);
const inputRefs = ref([]);
const router = useRouter();

onMounted(() => {
    inputRefs.value = Array.from(document.querySelectorAll('ion-input'));
});

const handleInput = (index) => {
    if (code.value[index].length > 1) {
        code.value[index] = code.value[index].charAt(0);
    }
    focusNext(index);
};

const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && code.value[index].length === 0 && index > 0) {
        code.value[index - 1] = '';
        inputRefs.value[index - 1].getInputElement().then((input) => {
            input.focus();
        });
    }
};

const focusNext = (index) => {
    if (code.value[index].length === 1 && index < 5) {
        inputRefs.value[index + 1].getInputElement().then((input) => {
            input.focus();
        });
    }
};
const verifyCode = async () => {
    const enteredCode = code.value.join('');

    try {
        const { data } = await api(`/verify-email/${enteredCode}`);

        if (data && data.message) {
            if (data.message === 'Correo electrónico verificado con éxito.') {
                await Preferences.set({ key: 'emailValidated', value: 'true' });
                const toast = await toastController.create({
                    message: data.message,
                    duration: 2000,
                    color: 'success',
                });
                toast.present();
                router.push({ name: 'cliente-home' });
            } else if (data.message === 'Código de verificación inválido.') {
                const toast = await toastController.create({
                    message: data.message,
                    duration: 2000,
                    color: 'danger',
                });
                toast.present();
            } else if (data.message === 'Error al verificar el correo electrónico.') {
                const toast = await toastController.create({
                    message: data.message,
                    duration: 2000,
                    color: 'danger',
                });
                toast.present();
            } else if (data.message === 'Error interno del servidor.') {
                const toast = await toastController.create({
                    message: data.message,
                    duration: 2000,
                    color: 'danger',
                });
                toast.present();
            }
        } else {
            const toast = await toastController.create({
                message: 'Respuesta del servidor inesperada.',
                duration: 2000,
                color: 'danger',
            });
            toast.present();
        }
    } catch (error) {
        console.error('Error al verificar el código:', error);
        const toast = await toastController.create({
            message: 'Error al verificar el código.',
            duration: 2000,
            color: 'danger',
        });
        toast.present();
    }
};
const resendCode = async () => {
    try {
        const { value: user } = await Preferences.get({ key: 'user' });

        if (!user) {
            const toast = await toastController.create({
                message: 'No se encontró el ID de usuario.',
                duration: 2000,
                color: 'danger',
            });
            toast.present();
            return;
        }
        let userId = JSON.parse(user).id;
        const { data } = await api.post('/resend-verification-email', { user_id: userId });

        if (data && data.message) {
            if (data.message === 'Código de verificación reenviado con éxito.') {
                const toast = await toastController.create({
                    message: data.message,
                    duration: 2000,
                    color: 'success',
                });
                toast.present();
            } else if (data.message === 'Usuario no encontrado.') {
                const toast = await toastController.create({
                    message: data.message,
                    duration: 2000,
                    color: 'danger',
                });
                toast.present();
            } else if (data.message === 'Error interno del servidor.') {
                const toast = await toastController.create({
                    message: data.message,
                    duration: 2000,
                    color: 'danger',
                });
                toast.present();
            } else {
                const toast = await toastController.create({
                    message: 'Respuesta del servidor inesperada.',
                    duration: 2000,
                    color: 'danger',
                });
                toast.present();
            }
        } else {
            const toast = await toastController.create({
                message: 'Respuesta del servidor inesperada.',
                duration: 2000,
                color: 'danger',
            });
            toast.present();
        }
    } catch (error) {
        console.error('Error al reenviar el código:', error);
        const toast = await toastController.create({
            message: 'Error al reenviar el código.',
            duration: 2000,
            color: 'danger',
        });
        toast.present();
    }
};
</script>

<style scoped>
ion-input {
    --padding-start: 0;
    --padding-end: 0;
    --padding-top: 0;
    --padding-bottom: 0;
}
</style>