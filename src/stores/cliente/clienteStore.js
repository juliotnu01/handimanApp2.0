import { defineStore } from 'pinia'
import { menuController } from '@ionic/vue'
export const useClienteStore = defineStore('cliente', {
    state: () => ({
        clientes: [],
        direcciones: [
            '123 Main St, Springfield, IL',
            '456 Elm St, Shelbyville, IL',
            '789 Oak St, Capital City, IL'
        ],
        selectedDireccion: '789 Oak St, Capital City, IL',
        range: { lower: 20, upper: 9999999 },
        hasOffer: false,
        isOpenFilter: false,
        hasReview: false,
    }),
    getters: {


    },
    actions: {
        /**
         * Opens the left menu ('menuIzquierda') and enables it.
         * 
         * This function enables the menu identified by 'menuIzquierda' and then opens it.
         * It uses the `menuController` to perform these actions.
         * 
         * @async
         * @function openMenuIzquierda
         * @returns {Promise<void>} A promise that resolves when the menu is opened.
         */
        async openMenuIzquierda() {
            return await menuController.open('menu-izquierda');
        },
        /**
         * Opens the right-side menu using the menu controller.
         * 
         * @async
         * @function openMenuDerecha
         * @returns {Promise<void>} A promise that resolves when the menu is opened.
         */
        async openMenuDerecha() {
            return await menuController.open('menu-derecha');
        },
        /**
         * Formats the given value as a string.
         *
         * @param {any} value - The value to be formatted.
         * @returns {string} The formatted value as a string.
         */
        pinFormatter(value) { return `${value}` },
      
        /**
         * Handles the change event for the lower range value.
         *
         * @param {Event} event - The event object containing the new value for the lower range.
         */
        handleLowerChange(event) {
            this.range.lower = event.detail.value;
        },
        /**
         * Handles the change event for the upper range value.
         *
         * @param {Event} event - The event object containing the new value for the upper range.
         */
        handleUpperChange(event) {
            this.range.upper = event.detail.value;
        },
        /**
         * Handles the change event for the offer checkbox.
         *
         * @param {Event} event - The event object from the checkbox change.
         * @property {Object} event.detail - The detail object of the event.
         * @property {boolean} event.detail.checked - The checked state of the checkbox.
         */
        handleOfferChange(event) {
            this.hasOffer = event.detail.checked;
        },
        /**
         * Handles the change event for the review checkbox.
         *
         * @param {Event} event - The event object from the change event.
         * @property {Object} event.detail - The detail object of the event.
         * @property {boolean} event.detail.checked - The checked state of the review checkbox.
         */
        handleReviewChange(event) {
            this.hasReview = event.detail.checked;
        },

    }
})