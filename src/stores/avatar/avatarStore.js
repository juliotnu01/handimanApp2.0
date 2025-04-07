import { defineStore } from 'pinia';
import { Preferences } from '@capacitor/preferences';

export const useAvatarStore = defineStore('avatar', {
    state: () => ({
        url_avatar_user: null, // Initial state
    }),
    actions: {
        async getAvatarUser() {
            const { value: user } = await Preferences.get({ key: 'user' });
            const userAvatar = JSON.parse(user);
            if (userAvatar.profile_photo_url) {
                this.url_avatar_user = userAvatar.profile_photo_url;
            }
        },

        setUrlAvatarUser(url) {
            this.url_avatar_user = url;
        }
    },
});