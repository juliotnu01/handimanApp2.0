<template>
    <transition name="fade">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2">
            <div
                class="bg-white rounded-xl  w-full max-w-md shadow-2xl transform transition-all duration-300 ease-out scale-100 p-12">
                <div class="mb-6">
                    <p class=" text-lg font-semibold text-gray-800 text-center ">{{ message }}</p>
                </div>
                <div class="flex justify-center space-x-6">
                    <button @click="onCancel"
                        class="px-6 py-3 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200">
                        {{ cancelText }}
                    </button>
                    <button @click="onConfirm"
                        class="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200">
                        {{ confirmText }}
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import  { defineProps, defineEmits } from 'vue';

const props = defineProps({
    isOpen: Boolean,
    message: String,
    confirmText: String,
    cancelText: String,
});

const emit = defineEmits(['confirm', 'cancel']);

const onConfirm = () => {
    emit('confirm');
};

const onCancel = () => {
    emit('cancel');
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>