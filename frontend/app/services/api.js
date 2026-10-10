import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api', // ব্যাকএন্ড সার্ভার ইউআরএল
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'clce-secret-key-123', // ব্যাকএন্ডের সিক্রেট কি
    },
});

export default API;