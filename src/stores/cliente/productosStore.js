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
export const useProductosStore = defineStore('productos', {
    state: () => ({
        items: Array.from({ length: 10 }, (_, i) => ({
            name: generateProductName(),
            title: Array.from({ length: Math.floor(Math.random() * 1) + 1 }, () => Math.random().toString(36).substring(2, 7)).join(' '),
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo, reiciendis eaque similique eligendi sint necessitatibus asperiores ipsum perferendis aliquid consequatur tempore dolorum voluptate laudantium sit facilis facere adipisci sequi! ${i + 1}`,
            image: `https://picsum.photos/200/300?random=${i + 1}`,
        })),
    }),
    getters: {
    },
    actions: {
    }
});