import { defineStore } from 'pinia';
import { menuController } from '@ionic/vue';
import { useRouter, useRoute } from 'vue-router';
import {
    home, cash, mailOutline, locate
} from 'ionicons/icons';
import { Preferences } from "@capacitor/preferences";

/**
 * Define el store de cliente, que maneja el estado y las acciones relacionadas con el cliente.
 * 
 * @returns {Object} El store de cliente.
 */
export const useClienteStore = defineStore('cliente', {
    state: () => ({
        clientes: [], // Array de clientes
        direcciones: [
            '123 Main St, Springfield, IL',
            '456 Elm St, Shelbyville, IL',
            '789 Oak St, Capital City, IL'
        ], // Array de direcciones disponibles
        selectedDireccion: '789 Oak St, Capital City, IL', // Dirección seleccionada actualmente
        range: { lower: 20, upper: 9999999 }, // Rango de valores para filtrado
        hasOffer: false, // Indica si hay ofertas disponibles
        isOpenFilter: false, // Indica si el filtro está abierto
        isOpenCarritoDeCompras: false, // Indica si el carrito de compras está abierto
        hasReview: false, // Indica si hay reseñas disponibles
        isCartOpen: false, // Indica si el carrito está abierto
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
        ], // Array de items en el carrito
        user_name: null,
        email_user: null,
        avatar_user: null,
        basic_information: null,
        appPages: [
            {
                title: 'Home',
                url: '/cliente/home',
                iosIcon: home,
                mdIcon: home
            },
            {
                title: 'Mi billetera',
                url: '/cliente/billetera',
                iosIcon: cash,
                mdIcon: cash
            },
            {
                title: 'Mensajes',
                url: '/cliente/chat',
                iosIcon: mailOutline,
                mdIcon: mailOutline
            },
            {
                title: 'Configuración',
                url: '/folder/Spam',
                iosIcon: locate,
                mdIcon: locate
            }
        ], // Array de páginas disponibles en la app
        modo: true
    }),
    actions: {
        /**
         * Abre el menú izquierdo.
         * 
         * @returns {Promise} Promesa que se resuelve cuando el menú izquierdo se abre.
         */
        async openMenuIzquierda() {
            return await menuController.open('menu-izquierda');
        },
        /**
         * Abre el menú derecho.
         * 
         * @returns {Promise} Promesa que se resuelve cuando el menú derecho se abre.
         */
        async openMenuDerecha() {
            return await menuController.open('menu-derecha');
        },
        /**
         * Formatea un valor como cadena.
         * 
         * @param {any} value El valor a formatear.
         * @returns {string} El valor formateado como cadena.
         */
        pinFormatter(value) {
            return `${value}`;
        },
        /**
         * Maneja el cambio en el valor inferior del rango.
         * 
         * @param {Event} event El evento que contiene el nuevo valor.
         */
        handleLowerChange(event) {
            this.range.lower = event.detail.value;
        },
        /**
         * Maneja el cambio en el valor superior del rango.
         * 
         * @param {Event} event El evento que contiene el nuevo valor.
         */
        handleUpperChange(event) {
            this.range.upper = event.detail.value;
        },
        /**
         * Maneja el cambio en la disponibilidad de ofertas.
         * 
         * @param {Event} event El evento que contiene el nuevo estado.
         */
        handleOfferChange(event) {
            this.hasOffer = event.detail.checked;
        },
        /**
         * Maneja el cambio en la disponibilidad de reseñas.
         * 
         * @param {Event} event El evento que contiene el nuevo estado.
         */
        handleReviewChange(event) {
            this.hasReview = event.detail.checked;
        },
        /**
         * Establece el estado de apertura del carrito de compras.
         * 
         * @param {boolean} open El estado de apertura del carrito.
         */
        setOpenCarritoDeCompras(open) {
            this.isOpenCarritoDeCompras = open;
        },
        /**
         * Alterna el estado de apertura del carrito.
         */
        toggleCart() {
            this.isCartOpen = !this.isCartOpen;
        },
        /**
         * Redirige a la vista de chats.
         * 
         * @returns {Promise} Promesa que se resuelve cuando la navegación se completa.
         */
        goToChatsView() {
            const router = useRouter();
            return router.push({ name: 'chat-view' });
        },
        /**
         * Determina si la página actual es la de vista de usuario.
         * 
         * @returns {boolean} Verdadero si la página actual es la de vista de usuario, falso de lo contrario.
         */
        isUserViewPage() {
            const route = useRoute();
            return route.path !== '/cliente/user';
        },
        /**
         * Redirige a la página de inicio.
         * 
         * @returns {Promise} Promesa que se resuelve cuando la navegación se completa.
         */
        goToHome() {
            const router = useRouter();
            return router.push('/cliente/home');
        },
        /**
         * Redirige a la vista de categorías.
         * 
         * @returns {Promise} Promesa que se resuelve cuando la navegación se completa.
         */
        gotToCategoriasView() {
            const router = useRouter();
            return router.push({ name: 'categorias-view' });
        },
        /**
         * Redirige a la vista de órdenes.
         * 
         * @returns {Promise} Promesa que se resuelve cuando la navegación se completa.
         */
        goToOrdenesView() {
            const router = useRouter();
            return router.push({ name: 'ordenes-view' });
        },
        /**
         * Redirige a la vista de notificaciones.
         * 
         * @returns {Promise} Promesa que se resuelve cuando la navegación se completa.
         */
        goToNotificacionesView() {
            const router = useRouter();
            return router.push({ name: 'notificaciones-view' });
        },
        /**
         * Carga el nombre del usuario desde las preferencias.
         * 
         * @returns {Promise} Promesa que se resuelve cuando el nombre del usuario es cargado.
         */
        async loadUserName() {
            let { value } = await Preferences.get({ key: 'user' });
            if (value) {
                let user = JSON.parse(value);
                this.user_name = user.name;
            } else {
                this.user_name = 'Usuario no identificado'; // Valor por defecto
            }
        },
        /**
         * Carga el email del usuario desde las preferencias.
         * 
         * @returns {Promise} Promesa que se resuelve cuando el email del usuario es cargado.
         */
        async loadEmailUser() {
            let { value } = await Preferences.get({ key: 'user' });
            if (value) {
                let user = JSON.parse(value);
                this.email_user = user.email;
            } else {
                this.email_user = 'Usuario no identificado'; // Valor por defecto
            }
        },
        /**
         * Carga el avatar del usuario desde las preferencias.
         * 
         * @returns {Promise} Promesa que se resuelve cuando el avatar del usuario es cargado.
         */
        async loadAvatarUser() {
            let { value } = await Preferences.get({ key: 'user' });
            if (value) {
                let user = JSON.parse(value);
                this.avatar_user = user.profile_photo_url;
            } else {
                this.avatar_user = 'Usuario no identificado'; // Valor por defecto
            }
        },
        /**
         * Carga la informacion basica  del usuario desde las preferencias.
         * 
         * @returns {Promise} Promesa que se resuelve cuando la informacion basica del usuario es cargado.
         */
        async loadBasicInformationUser() {
            let { value } = await Preferences.get({ key: 'user' });
            
            if (value) {
                let user = JSON.parse(value);
                this.basic_information = user.basic_information;
            } else {
                this.basic_information = 'Usuario no identificado'; // Valor por defecto
            }
        },

    }
});