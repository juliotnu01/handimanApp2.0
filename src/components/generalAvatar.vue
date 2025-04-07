<template>
    <img 
        alt="avatar" 
        :src="urlAvatar" 
        :class="computedClasses" 
    />
</template>
<script setup>
import { IonAvatar } from '@ionic/vue'
import { defineProps, computed, onMounted } from 'vue'
import { useAvatarStore } from '@/stores/avatar/avatarStore'

const avatarStore = useAvatarStore()
const { getAvatarUser, setUrlAvatarUser } = avatarStore

const props = defineProps({
    url_avatar_user: {
        type: String,
        default: ''
    },
    customClasses: {
        type: String,
        default: ''
    }
})

const urlAvatar = computed({
    get: () => props.url_avatar_user || avatarStore.url_avatar_user,
    set: (value) => setUrlAvatarUser(value)
})

const computedClasses = computed(() => 
    props.customClasses || 'w-full h-full object-cover'
)

onMounted(() => {
    getAvatarUser()
})
</script>