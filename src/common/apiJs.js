import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://192.168.0.102:8000/api', // URL de tu API Laravel
    headers: {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
    },
});

