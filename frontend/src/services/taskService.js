
import API from './api';

// Fetch tasks for the dashboard
export const fetchTasks = async () => {
    try {
        const response = await API.get('/tasks', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`, // Ensure token is passed
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};
