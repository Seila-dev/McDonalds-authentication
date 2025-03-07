import axios from 'axios'

const api = axios.create({
    baseURL: "https://mcdonalds-server.onrender.com/"
})

export default api