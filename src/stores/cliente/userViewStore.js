import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

export const useUserViewStore = defineStore('userView', {
    state: () => ({
        // Define your state properties here
        user: null,
    }),
    getters: {
        // Define your getters here
        isAuthenticated: (state) => !!state.user,
    },
    actions: {

    },
});