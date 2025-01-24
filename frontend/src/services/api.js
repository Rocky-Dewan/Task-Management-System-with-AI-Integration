
import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:4000', // Update to match your backend's URL
});

export default API;
