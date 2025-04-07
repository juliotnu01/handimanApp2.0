import { Preferences } from '@capacitor/preferences';
import { defineStore } from 'pinia';
import { api } from '../common/apiJs';
import { useClienteStore } from '../stores/cliente/clienteStore'

export const useAppStore = defineStore('app', {
    state: () => ({
        is_open_toast: false,
        message_toast: '',
        is_loading: true,
        is_modal_open: false,
        is_modal_open_redirect_configuration: false,
        modal_message: '',
        redirect_configuration_modal_message: '',
        modal_confirm_action: null,
    }),
    actions: {
        setIsOpenToast(open) {
            this.is_open_toast = open;
        },
        setIsLoading(loading) {
            this.is_loading = loading;
        },
        openModal(message, confirmAction) {
            this.modal_message = message;
            this.modal_confirm_action = confirmAction;
            this.is_modal_open = true;
        },
        closeModal() {
            this.is_modal_open = false;
        },
        onModalConfirm() {
            if (this.modal_confirm_action) {
                this.modal_confirm_action();
            }
            this.closeModal();
        },
        async getUserbyId(id_user) {
            try {
                const { data: { user } } = await api(`/user/${id_user}`);
                useClienteStore.basic_information = user.basic_information;
                await Preferences.set({
                    key: 'user',
                    value: JSON.stringify(user),
                });
            } catch (error) {
                console.error('Error fetching and updating user:', error);
            }
        },
    },
});