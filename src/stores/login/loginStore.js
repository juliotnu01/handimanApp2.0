import { defineStore } from 'pinia';
import { Preferences } from '@capacitor/preferences';

import { api } from '../../common/apiJs';
import { useAppStore } from '../../stores/appStore'; // Importar el otro store

export const useLoginStore = defineStore('login', {
    state: () => ({
        login: false,
        model: {
            email: 'admin@admin.com',
            password: 'asdasdasd',
        },
        model_register: {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            mode: 'cliente' // cliente, especialista
        },
        loading: false,

    }),
    actions: {
        showToast(message_toast, is_open_toast) {
            const appStore = useAppStore();
            appStore.setIsOpenToast(is_open_toast);
            appStore.message_toast = message_toast
        },
        async login(router) {
            try {
                this.loading = true;
                let { data } = await api.post(`/verify-login`, this.model);
                await Preferences.set({ key: 'name', value: data.user.email });
                await Preferences.set({ key: 'user', value: JSON.stringify(data.user) });
                await Preferences.set({ key: 'valid_user', value: data.valid });
                await Preferences.set({ key: 'mode', value: data.user.mode });
                await Preferences.set({ key: 'emailValidated', value: data.user.email_verification?.verified == 1 ? true : false });
                // Redirigir usando el router pasado como argumento
                await router.push({ name: 'cliente-home' });
                this.showToast('Sesión iniciada con éxito...', true);
                this.loading = false;
            } catch (error) {
                console.log({ error });
                this.showToast(`Error en el login --> ${error}`, true);
                this.loading = false;
            }
        },

        async registerUser(router) {
            try {
                this.loading = true;
                let { data } = await api.post(`/register-user`, this.model_register);

                if (data.error) {
                    this.showToast(data.error, true);
                    this.loading = false;
                    return;
                }

                await Preferences.set({ key: 'name', value: data.user.email });
                await Preferences.set({ key: 'user', value: JSON.stringify(data.user) });
                await Preferences.set({ key: 'valid_user', value: data.valid });
                await Preferences.set({ key: 'mode', value: data.user.mode });
                await Preferences.set({ key: 'emailValidated', value: data.user.email_verification?.verified == 1 ? true : false });

                if (this.model_register.mode === 'cliente') {
                    await router.push({ name: 'cliente-home' });
                } else if (this.model_register.mode === 'especialista') {
                    await router.push({ name: 'especialista-home' });
                }

                this.model_register = {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    mode: 'cliente', // cliente, especialista
                };

                this.showToast(data.message, true);
                this.loading = false;
            } catch (error) {
                this.showToast(`Error en el registro --> ${error}`, true);
                this.loading = false;
            }
        }

    },
});