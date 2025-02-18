import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        is_open_toast: false,
        message_toast: ''
    }),
    getters: {
        // getters del store
    },
    actions: {
        setIsOpenToast(open) {
            this.is_open_toast = open
        }
    },
})



