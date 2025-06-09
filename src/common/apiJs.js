import axios from 'axios';

export const api = axios.create({
    baseURL:  `${import.meta.env.VITE_API_URL}/api` , // URL de tu API Laravel
});

api.interceptors.request.use((config) => {
    if (config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data';
    } else {
        config.headers['Content-Type'] = 'application/json';
    }
    return config;
});

