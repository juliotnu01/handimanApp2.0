import { defineStore } from 'pinia';

export const useCategoriasStore = defineStore('categorias', {
    state: () => ({
        items: Array.from({ length: 10 }, (_, i) => ({
            title: Array.from({ length: Math.floor(Math.random() * 1) + 1 }, () => Math.random().toString(36).substring(2, 7)).join(' '),
            description: `Description ${i + 1}`,
            image: `https://picsum.photos/200/300?random=${i + 1}`,
        })),
    }),
    getters: {
    },
    actions: {

    }
});