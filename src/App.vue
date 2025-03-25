<template>
  <ion-app>
    <ion-router-outlet />
    <ion-toast :is-open="isOpenToast" :message="messageToast" :duration="2000" @didDismiss="closeToast">
    </ion-toast>
    <div v-if="isLoading" class="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
      <img src="/logo.png" alt="Loading" class="h-24 w-24 animate-bounce">
    </div>
    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <div class="mb-4">
          <p class="text-lg font-semibold text-gray-800">{{ modalMessage }}</p>
        </div>
        <div class="flex justify-end space-x-4">
          <button @click="onModalCancel" class="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300">
            Cancelar
          </button>
          <button @click="onModalConfirm" class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet, IonToast } from '@ionic/vue';
import { useAppStore } from '@/stores/appStore.js';
import { storeToRefs } from 'pinia';
import { computed, onUnmounted, onMounted } from 'vue';
import { Preferences } from '@capacitor/preferences';
import { App } from '@capacitor/app';

const appStore = useAppStore();
const { is_open_toast, message_toast, is_loading, is_modal_open, modal_message } = storeToRefs(appStore);
const { setIsOpenToast, setIsLoading, openModal, closeModal, onModalConfirm } = appStore;

const isOpenToast = computed({
  get() { return is_open_toast.value; },
  set(val) { setIsOpenToast(val); },
});

const messageToast = computed({
  get() { return message_toast.value; },
});

const isLoading = computed({
  get() { return is_loading.value; },
  set(val) { setIsLoading(val); },
});

const isModalOpen = computed({
  get() { return is_modal_open.value; },
});

const modalMessage = computed({
  get() { return modal_message.value; },
});

const closeToast = () => {
  setIsOpenToast(false);
};
const onModalCancel = () => {
  closeModal();
};

const clearStorage = async () => {
  await Preferences.clear();
};
const handleBeforeUnload = async () => {
  await clearStorage();
};
const handleAppExit = async () => {
  await clearStorage();
};

onMounted(() => {
  window.addEventListener('beforeunload', handleBeforeUnload);
  App.addListener('exit', handleAppExit);
});

onUnmounted(() => {
  window.removeEventListener('beforeunload', handleBeforeUnload);
  App.removeAllListeners();
});

</script>

<style>
:root {
  --ion-safe-area-top: 1.5rem;
}

:root.ios {
  --ion-safe-area-bottom: 1rem;
}

ion-header {
  box-shadow: none !important;
}

ion-toolbar {
  --border-width: 0 !important;
  --border-style: none !important;
  --box-shadow: none !important;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-25%);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
</style>