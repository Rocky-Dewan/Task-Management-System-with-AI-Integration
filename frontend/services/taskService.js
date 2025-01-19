import api from './api';

export const getTasks = async () => {
    const response = await api.get('/tasks', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
};

export const createTask = async (task) => {
    return api.post('/tasks', task, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
};
