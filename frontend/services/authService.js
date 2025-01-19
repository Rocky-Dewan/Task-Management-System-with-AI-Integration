import api from './api';

export const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', response.data.token);
};

export const register = async (username, email, password) => {
    return api.post('/auth/register', { username, email, password });
};
