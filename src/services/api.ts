import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Atualize com a URL do seu backend
})