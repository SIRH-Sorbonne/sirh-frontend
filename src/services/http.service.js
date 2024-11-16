import axios from 'axios';

//const API_URL = 'https://sirh-backend.onrender.com';
const API_URL = 'http://localhost:3000';

const httpService = {
    get(url, config = {}) {
        return axios.get(`${API_URL}${url}`, config);
    },

    post(url, data, config = {}) {
        return axios.post(`${API_URL}${url}`, data, config);
    },

    put(url, data, config = {}) {
        return axios.put(`${API_URL}${url}`, data, config);
    },

    delete(url, config = {}) {
        return axios.delete(`${API_URL}${url}`, config);
    },
};

export default httpService;