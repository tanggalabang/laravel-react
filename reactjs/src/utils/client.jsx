import axios from 'axios'
import { sessionToken } from '../constant/localStorage'

const client = axios.create({
    baseURL: 'http://localhost:8000/api/',
    params: {
        token: localStorage.getItem(sessionToken)
    }
})

export default client