import Axios, { AxiosInstance } from 'axios'
import env from '../env.json'

const api:AxiosInstance = Axios.create({
  baseURL: env.BackendUrl
})

export const authorizaton = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}

export default api
