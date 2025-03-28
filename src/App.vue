<template>
  <ion-app class="safe-area">
    <ion-router-outlet />
    <ion-toast :is-open="isOpenToast" :message="messageToast" :duration="2000" @didDismiss="closeToast">
    </ion-toast>
    <div v-if="isLoading" class="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
      <img src="/logo.png" alt="Loading" class="h-24 w-24 animate-bounce">
    </div>
    <div v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
      <div
        class="bg-white rounded-lg p-6 w-11/12 max-w-md shadow-lg transform transition-transform duration-300 ease-in-out scale-95"
        :class="{ 'scale-100': isModalOpen }">
        <div class="mb-4">
          <p class="text-sm text-center font-semibold text-gray-800">{{ modalMessage }}</p>
        </div>
        <div class="flex justify-end space-x-2">
          <button @click="onModalCancel"
            class="px-2 py-1 font-bold rounded-md bg-gray-200 text-gray-700  transition-colors duration-200 text-[16px] ">
            Cancelar
          </button>
          <button @click="onModalConfirm"
            class="px-2 py-1 font-bold rounded-md bg-blue-600 text-white  transition-colors duration-200 text-[16px] ">
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
  --ion-safe-area-top: env(safe-area-inset-top, 0px);
  --ion-safe-area-bottom: env(safe-area-inset-bottom, 0px);
  --ion-safe-area-left: env(safe-area-inset-left, 0px);
  --ion-safe-area-right: env(safe-area-inset-right, 0px);
}

.safe-area {
  padding-top: var(--ion-safe-area-top);
  padding-bottom: var(--ion-safe-area-bottom);
  padding-left: var(--ion-safe-area-left);
  padding-right: var(--ion-safe-area-right);
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