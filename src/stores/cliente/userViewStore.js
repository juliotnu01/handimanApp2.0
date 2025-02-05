import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

export const useUserViewStore = defineStore('userView', {
    state: () => ({
        // Define your state properties here
        user: null,
        router: useRouter(),
    }),
    getters: {
        // Define your getters here
        isAuthenticated: (state) => !!state.user,
    },
    actions: {
        /**
         * Navigates to the user view page.
         * 
         * @returns {Promise} A promise that resolves when the navigation is complete.
         */
        goToUserViewPage() {
            return this.router.push({ name: 'user-view' });
        },
        /**
         * !no sirve!
         * Navigates the user to the 'cliente-home' route.
         *
         * @returns {Promise} A promise that resolves when the navigation is complete.
         */
        goTotHome() {
            return this.router.push({ name: 'cliente-home' });
        }
    },
});