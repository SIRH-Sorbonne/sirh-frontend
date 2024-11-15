import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()

const API_URL = import.meta.env.API_URL;
const httpClient = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

const httpService = {
    get(url, config = {}) {
        return httpClient.get(url, config);
    },

    post(url, data, config = {}) {
        return httpClient.post(url, data, config);
    },

    put(url, data, config = {}) {
        return httpClient.put(url, data, config);
    },

    delete(url, config = {}) {
        return httpClient.delete(url, config);
    },
};

export default httpService;