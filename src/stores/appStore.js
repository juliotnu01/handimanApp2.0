import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        is_open_toast: false,
        message_toast: '',
        is_loading: true // Añadido is_loading al estado
    }),
    getters: {
        // getters del store
    },
    actions: {
        setIsOpenToast(open) {
            this.is_open_toast = open
        },
        setIsLoading(loading) { // Añadido setIsLoading a las acciones
            this.is_loading = loading
        }
    },
})



