<template>
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <!-- User Review Card -->
        <div class="p-4 border-b border-gray-200 my-2" v-for="(review, index) in reviews" :key="index">
            <div class="flex justify-between items-center">
                <div>
                    <h3 class="text-lg font-bold">{{ review.userName }}</h3>
                    <p class="text-sm text-gray-500">{{ review.duration }}</p>
                </div>
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{ review.rating }}
                </span>
            </div>
            <div class="mt-2">
                <p class="text-sm text-gray-600">{{ review.reviewText }}</p>
            </div>
        </div>

        <!-- Loader -->
        <div v-if="isLoading" class="flex justify-center items-center p-4">
            <svg class="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>
        </div>

        <!-- Observer Element -->
        <div ref="observer" class="observer-element"></div>

        <!-- Error Message -->
        <div v-if="errorMessage" class="text-red-500 text-center p-4">
            {{ errorMessage }}
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { api } from '@/common/apiJS.js';
import { Preferences } from '@capacitor/preferences';

// Estado inicial
const reviews = ref([]);
const isLoading = ref(false);
const errorMessage = ref('');
const currentPage = ref(1);
const hasMoreData = ref(true);
const observer = ref(null);

// Obtener el ID del usuario desde el localStorage
const getUserId = async () => {
    const { value } = await Preferences.get({ key: 'user' });
    const user = JSON.parse(value);
    return user?.id || null;
};

// Función para mapear los datos del backend
const mapReviewData = (rawData) => {
    return rawData.map((item) => ({
        userName: `User: ${item.reviewer_name}`, // Puedes ajustar esto según tus necesidades
        duration: formatDate(item.created_at), // Formatear la fecha
        rating: item.score,
        reviewText: item.score_comment || 'No comment provided',
    }));
};

// Función para formatear la fecha
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
};

// Función para cargar más reseñas
const loadReviews = async () => {
    if (isLoading.value || !hasMoreData.value) return;

    isLoading.value = true;
    errorMessage.value = '';

    try {
        const userId = await getUserId();
        if (!userId) {
            throw new Error('User ID not found');
        }

        const response = await api.get(`reviews/paginated/${userId}?page=${currentPage.value}`);
        const data = response.data;

        if (data.data.length === 0) {
            hasMoreData.value = false; // No hay más datos para cargar
        } else {
            // Mapear los datos antes de agregarlos al estado
            const mappedData = mapReviewData(data.data);
            reviews.value = [...reviews.value, ...mappedData]; // Agregar nuevas reseñas
            currentPage.value += 1; // Incrementar la página
        }
    } catch (error) {
        console.error('Error fetching reviews:', error);
        errorMessage.value = 'Failed to load reviews. Please try again later.';
    } finally {
        isLoading.value = false;
    }
};

// Configurar IntersectionObserver
const setupObserver = () => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    };

    const callback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !isLoading.value) {
                loadReviews();
            }
        });
    };

    const observerInstance = new IntersectionObserver(callback, options);
    if (observer.value) {
        observerInstance.observe(observer.value);
    }

    return observerInstance;
};

// Montar y desmontar el observer
let observerInstance = null;
onMounted(() => {
    loadReviews(); // Cargar las primeras reseñas
    observerInstance = setupObserver();
});

onUnmounted(() => {
    if (observerInstance) {
        observerInstance.disconnect();
    }
});
</script>