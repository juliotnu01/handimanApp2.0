import { defineStore } from 'pinia'
import { menuController } from '@ionic/vue'
import { useRoute, useRouter } from 'vue-router';
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
        isOpenCarritoDeCompras: false,
        hasReview: false,
        isCartOpen: false,
        cartItems: [
            { id: 1, name: 'Producto 1', price: 10.00 },
            { id: 2, name: 'Producto 2', price: 20.00 },
            { id: 3, name: 'Producto 3', price: 30.00 },
            { id: 4, name: 'Producto 4', price: 40.00 },
            { id: 5, name: 'Producto 5', price: 50.00 },
            { id: 6, name: 'Producto 6', price: 60.00 },
            { id: 7, name: 'Producto 7', price: 70.00 },
            { id: 8, name: 'Producto 8', price: 80.00 },
            { id: 9, name: 'Producto 9', price: 90.00 },
            { id: 10, name: 'Producto 10', price: 100.00 },
        ],
        router: useRouter(),
        route: useRoute(),


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
        /**
         * Sets the state of the shopping cart's open status.
         *
         * @param {boolean} open - The new state of the shopping cart (true for open, false for closed).
         */
        setOpenCarritoDeCompras(open) { this.isOpenCarritoDeCompras = open },

        /**
         * Toggles the state of the shopping cart.
         * If the cart is currently open, it will be closed, and vice versa.
         */
        toggleCart() { this.isCartOpen = !this.isCartOpen; },
        /**
         * Navigates the user to the chat view.
         * Utilizes the router to push a new route with the name 'chat-view'.
         */
        /**
         * Navigates to the chat view.
         * 
         * This method uses the router to push a new route named 'chat-view'.
         * 
         * @returns {Promise} A promise that resolves when the navigation is complete.
         */
        goToChatsView() { return this.router.push({ name: 'chat-view' }) },
        /**
         * Checks if the current route is not the user view page.
         *
         * @returns {boolean} Returns true if the current route is not '/cliente/user', otherwise false.
         */
        isUserViewPage() { return this.route.path !== '/cliente/user' },
        /**
         * Navigates the user to the home page for clients.
         *
         * @returns {Promise} A promise that resolves when the navigation is complete.
         */
        goToHome() {
            return this.router.push('/cliente/home');
        },

        /**
         * Navigates the user to the categories view.
         * Utilizes the router to push a new route with the name 'categorias-view'.
         *
         * @returns {Promise} A promise that resolves when the navigation is complete.
         */
        gotToCategoriasView() {
            return this.router.push({ name: 'categorias-view' })
        },
        /**
         * Navigates the user to the orders view.
         * Utilizes the router to push a new route with the name 'ordenes-view'.
         *
         * @returns {Promise} A promise that resolves when the navigation is complete.
         */
        goToOrdenesView() {
            return this.router.push({ name: 'ordenes-view' })
        },
        /**
         * Navigates the user to the orders view.
         * Utilizes the router to push a new route with the name 'ordenes-view'.
         *
         * @returns {Promise} A promise that resolves when the navigation is complete.
         */
        goToNotificacionesView() {
            return this.router.push({ name: 'notificaciones-view' })
        }
    }
})