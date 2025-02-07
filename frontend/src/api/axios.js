import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // 기본 주소 설정
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
