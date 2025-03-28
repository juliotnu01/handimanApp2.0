<template>
    <div class="flex flex-col space-y-4">
        <!-- Botones de segmentos -->
        <div class="flex space-x-2 mx-auto">
            <button v-for="(segment, index) in segments" :key="index" @click="selectSegment(index)" :class="[
                'px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out',
                selectedSegment === index
                    ? 'bg-black text-white scale-105' // Efecto de escala y color al seleccionar
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
            ]">
                {{ segment }}
            </button>
        </div>

        <!-- Contenido del segmento con transición -->
        <transition name="segment-fade" mode="out-in">
            <div :key="selectedSegment"
                class="p-4 transition-all duration-300 ease-in-out">
                <slot :name="`segment-${selectedSegment}`"></slot>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    segments: {
        type: Array,
        required: true,
    },
    modelValue: {
        type: Number,
        default: 0, // Valor inicial del segmento seleccionado
    },
});

const emit = defineEmits(['update:modelValue']);

const selectedSegment = ref(props.modelValue);

// Actualizar el segmento seleccionado desde el exterior
watch(() => props.modelValue, (newValue) => {
    selectedSegment.value = newValue;
});

// Función para seleccionar un segmento internamente
const selectSegment = (index) => {
    selectedSegment.value = index;
    emit('update:modelValue', index); // Emitir el cambio al exterior
};
</script>

<style scoped>
/* Estilos para la transición */
.segment-fade-enter-active,
.segment-fade-leave-active {
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.segment-fade-enter-from,
.segment-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>