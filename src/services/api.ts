import axios from 'axios';

const api = (token?: string) => {
    let instance = axios.create({
        baseURL: 'http://localhost:5000',
        headers: token ? {
            'Authorization': 'Bearer ' + token
        } : undefined,
    });

    return instance;
};

export default api;