import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
    state: () => ({
        is_open_toast: false,
        message_toast: '',
        is_loading: true,
        is_modal_open: false,
        modal_message: '',
        modal_confirm_action: null,
    }),
    getters: {
        // getters del store (puedes agregar getters si los necesitas)
    },
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
    },
});