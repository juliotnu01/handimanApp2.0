<template>
  <ion-app>
    <ion-router-outlet />
    <ion-toast :is-open="isOpen" :message="message_toast" :duration="2000"
      @didDismiss="setIsOpenToast(false)">
    </ion-toast>
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet, IonToast } from '@ionic/vue';
import { useAppStore } from '@/stores/appStore.js'
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const appStore = useAppStore()
const { is_open_toast, message_toast } = storeToRefs(appStore)
const { setIsOpenToast } = appStore

const isOpen = computed({
  get() { return is_open_toast.value },
  set(val) { is_open_toast.value = val }
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
</style>
