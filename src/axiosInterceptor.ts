import axios from 'axios';

export function axiosInterceptor() {
    axios.interceptors.request.use(
       (config) => {
        config.url += '?api_key=' + process.env.REACT_APP_RIOT_API_KEY;
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
}