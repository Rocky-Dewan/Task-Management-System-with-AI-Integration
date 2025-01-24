
import API from './api';

export const login = async (email, password) => {
    try {
        const response = await API.post('/login', { email, password });
        if (response.data.token) {
            // Save token in local storage
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error; // Pass the error for further handling
    }
};
