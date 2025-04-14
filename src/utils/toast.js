// src/utils/toast.js
import { toastController } from '@ionic/vue';

export const showToast = async (message, duration = 2000, position = 'bottom') => {
    const toast = await toastController.create({
        message,
        duration,
        position,
        color: 'primary',
    });
    return toast.present();
};