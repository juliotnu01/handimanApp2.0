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
        hasOfferReseña: false,
        services: Array.from({ length: 10 }, (_, i) => ({
            title: `Item ${i + 1}`,
            description: `Description ${i + 1}`,
            image: `https://picsum.photos/200/300?random=${i + 1}`,
            price: `$${Math.floor(Math.random() * 10000)}.${Math.floor(Math.random() * 100)}`,
        })),
        items: Array.from({ length: 10 }, (_, i) => ({
            title: Array.from({ length: Math.floor(Math.random() * 1) + 1 }, () => Math.random().toString(36).substring(2, 7)).join(' '),
            description: `Description ${i + 1}`,
            image: `https://picsum.photos/200/300?random=${i + 1}`,
        })),
        isOpen: false,
        isOpenFilter: false,
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
         * Sets the value of the isOpen state.
         *
         * @param {boolean} open - The new value to set for isOpen.
         */
        setOpen(open) { this.isOpen = open },
        /**
         * Sets the value of the isOpenFilter property.
         * 
         * @param {boolean} open - The new value for the isOpenFilter property.
         */
        setOpenFilter(open) { this.isOpenFilter = open },
        /**
         * Formats the given value as a string.
         *
         * @param {any} value - The value to be formatted.
         * @returns {string} The formatted value as a string.
         */
        pinFormatter(value) { return `${value}` },
        /**
         * Closes the modal by setting the `isOpen` property to `false`.
         */
        closeModal() {
            this.isOpen = false;
        },
        closeModalFilter() {
            this.isOpenFilter = false;
        },
        /**
         * Handles the change event for the lower range value.
         *
         * @param {Event} event - The event object containing the new value for the lower range.
         */
        handleLowerChange (event) {
            this.range.lower = event.detail.value;
        },
        /**
         * Handles the change event for the upper range value.
         *
         * @param {Event} event - The event object containing the new value for the upper range.
         */
        handleUpperChange (event) {
            this.range.upper = event.detail.value;
        },
        /**
         * Handles the change event for the offer checkbox.
         *
         * @param {Event} event - The event object from the checkbox change.
         * @property {Object} event.detail - The detail object of the event.
         * @property {boolean} event.detail.checked - The checked state of the checkbox.
         */
        handleOfferChange (event) {
            this.hasOffer = event.detail.checked;
        },

    }
})