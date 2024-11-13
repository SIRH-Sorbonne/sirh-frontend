import axios from 'axios'

const api = axios.create({
  baseURL: 'https://sirh-backend.onrender.com', // Ajustez l'URL selon votre configuration
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
