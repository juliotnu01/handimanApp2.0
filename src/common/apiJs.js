import axios from 'axios';

export const api = axios.create({
    // baseURL: 'http://18.222.144.231/api', // URL de tu API Laravel
    baseURL:  `${import.meta.env.VITE_API_URL}/api` , // URL de tu API Laravel
    headers: {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
    },
});

