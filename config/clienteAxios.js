import axios from 'axios';
// import { EXPO_PUBLIC_API_URL } from '@env';

const clienteAxios = axios.create({
    baseURL: "http://localhost:4000"
});

export default clienteAxios;