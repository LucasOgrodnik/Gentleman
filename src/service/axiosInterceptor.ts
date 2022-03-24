import axios from 'axios';

export function axiosInterceptor() {
    axios.interceptors.request.use(
       (config) => {
            if (config.params)
                config.params['api_key'] = process.env.REACT_APP_RIOT_API_KEY;
            else
                config.params = {'api_key': process.env.REACT_APP_RIOT_API_KEY};
            return config;
    }, (error) => {
        return Promise.reject(error);
    });
}