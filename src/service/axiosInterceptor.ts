import axios from 'axios';

export function axiosInterceptor() {
    axios.interceptors.request.use(
       (config) => {
        config.url += '?api_key=RGAPI-8bc9aa4a-dc72-4ba2-ae9e-51d7ab8e2f2a';
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
}