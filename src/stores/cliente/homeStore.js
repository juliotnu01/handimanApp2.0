import { defineStore } from 'pinia';

const productNames = [
    'Widget', 'Gadget', 'Doohickey', 'Thingamajig', 'Contraption',
    'Gizmo', 'Apparatus', 'Device', 'Instrument', 'Tool'
];
const productWords = [
    'Advanced', 'Portable', 'Compact', 'Multi-functional', 'High-tech',
    'Durable', 'Innovative', 'Efficient', 'User-friendly', 'Versatile'
];
const generateProductName = () => {
    const name = productNames[Math.floor(Math.random() * productNames.length)];
    const word = productWords[Math.floor(Math.random() * productWords.length)];
    return `${word} ${name}`;
};
export const useHomeStore = defineStore('home', {
    state: () => ({
        services: Array.from({ length: 10 }, (_, i) => ({
            title: `Item ${i + 1}`,
            description: `Description ${i + 1}`,
            image: `https://picsum.photos/200/300?random=${i + 1}`,
            price: `$${Math.floor(Math.random() * 10000)}.${Math.floor(Math.random() * 100)}`,

        })),
        items: Array.from({ length: 10 }, (_, i) => ({
            name: generateProductName(),
            title: Array.from({ length: Math.floor(Math.random() * 1) + 1 }, () => Math.random().toString(36).substring(2, 7)).join(' '),
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo, reiciendis eaque similique eligendi sint necessitatibus asperiores ipsum perferendis aliquid consequatur tempore dolorum voluptate laudantium sit facilis facere adipisci sequi! ${i + 1}`,
            image: `https://picsum.photos/200/300?random=${i + 1}`,
            price: parseFloat((Math.random() * 9000 + 10000).toFixed(2)),
            oldPrice: parseFloat((Math.random() * 9000 + 10000).toFixed(2)),
            avatar: `https://picsum.photos/200/200?random=${i + 1}`
        })),
        searchQuery: '',
        isOpenFilter: false,
        isOpen: false,
    }),
    getters: {
        // define your getters here
    },
    actions: {
        /**
         * Handles the input event for the search field and updates the search query.
         *
         * @param {Event} event - The input event triggered by the search field.
         */
        handleSearchInput(event) {
            this.searchQuery = event.target.value;
        },
        /**
        * Sets the value of the isOpenFilter property.
        * 
        * @param {boolean} open - The new value for the isOpenFilter property.
        */
        setOpenFilter(open) { this.isOpenFilter = open },

        /**
         * Closes the filter modal by setting the isOpenFilter property to false.
         */
        closeModalFilter() {
            this.isOpenFilter = false;
        },
        /**
         * Clears the current search query by setting it to an empty string.
         */
        clearSearchQuery() {
            this.searchQuery = '';
        },
        /**
        * Sets the value of the isOpen state.
        *
        * @param {boolean} open - The new value to set for isOpen.
        */
        setOpen(open) { this.isOpen = open },
        /**
       * Closes the modal by setting the `isOpen` property to `false`.
       */
        closeModal(close) { this.isOpen = close; },
    }
});