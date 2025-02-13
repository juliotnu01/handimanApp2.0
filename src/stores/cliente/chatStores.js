import { defineStore } from 'pinia';

export const useChatStore = defineStore('chat', {
    state: () => ({
        isOpenChat: false,
    }),
    getters: {

    },
    actions: {
        /**
         * Sets the value of isOpenChat.
         *
         * @param {boolean} value - The new value to set for isOpenChat.
         */
        setIsOpenChat(value) {
            this.isOpenChat = value;
        }
    }
});