import { defineStore } from 'pinia';

export const useChatStore = defineStore('chat', {
    state: () => ({
        messages: [],
        users: []
    }),
    getters: {
        getMessages: (state) => state.messages,
        getUsers: (state) => state.users
    },
    actions: {
        addMessage(message) {
            this.messages.push(message);
        },
        addUser(user) {
            this.users.push(user);
        }
    }
});