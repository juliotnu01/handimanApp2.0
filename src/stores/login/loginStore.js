import { defineStore } from 'pinia';
import { Preferences } from '@capacitor/preferences';
import { useRouter } from 'vue-router';
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
        router: useRouter()

    }),
    actions: {
        showToast(message_toast, is_open_toast) {
            const appStore = useAppStore();
            appStore.setIsOpenToast(is_open_toast);
            appStore.message_toast = message_toast
        },
        async login() {
            try {
                this.loading = true;
                let { data } = await api.post(`/verify-login`, this.model);
                await Preferences.set({ key: 'name', value: data.user.email });
                await Preferences.set({ key: 'user', value: JSON.stringify(data.user) });
                await Preferences.set({ key: 'valid_user', value: data.valid });
                await Preferences.set({ key: 'mode', value: data.user.mode });
                await this.router.push({ name: 'cliente-home' });
                this.showToast('Session iniciada con éxito...', true)
                this.loading = false;
            } catch (error) {
                this.showToast(`Error en el login --> ${error}`, true)
                this.loading = false;
            }
        },

        async registerUser() {
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
                if (this.model_register.mode == 'cliente') {
                    await this.router.push({ name: 'cliente-home' });
                } else if (this.model_register.mode == 'especialista') {
                    await this.router.push({ name: 'especialista-home' });
                }

                this.showToast(data.message, true)
                this.loading = false;
            } catch (error) {
                this.showToast(`Error en el registro --> ${error}`, true)
                this.loading = false;
            }
        }

    },
});