<template>
  <ion-app>
    <ion-router-outlet />
    <ion-toast :is-open="isOpen" :message="message_toast" :duration="2000"
      @didDismiss="setIsOpenToast(false)">
    </ion-toast>
    <div v-if="isLoading" class="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
      <img src="/logo.png" alt="Loading" class="h-24 w-24 animate-bounce">
    </div>
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet, IonToast } from '@ionic/vue';
import { useAppStore } from '@/stores/appStore.js'
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const appStore = useAppStore()
const { is_open_toast, message_toast, is_loading } = storeToRefs(appStore)
const { setIsOpenToast, setIsLoading } = appStore

const isOpen = computed({
  get() { return is_open_toast.value },
  set(val) { is_open_toast.value = val }
})

const isLoading = computed({
  get() { return is_loading.value },
  set(val) { setIsLoading(val) }
})

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
  0%, 100% {
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
