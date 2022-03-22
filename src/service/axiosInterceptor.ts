import axios from 'axios';

export function axiosInterceptor() {
    axios.interceptors.request.use(
       (config) => {
        config.url += '?api_key=RGAPI-7e8d8d65-a2c8-43fb-8bd5-560a5abce05c';
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
}