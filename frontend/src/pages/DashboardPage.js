// frontend/src/pages/DashboardPage.js
import React, { useEffect, useState } from 'react';
import { fetchTasks } from '../services/taskService';

const DashboardPage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const data = await fetchTasks();
                setTasks(data);
            } catch (error) {
                console.error('Error loading tasks:', error);
            }
        };

        loadTasks();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default DashboardPage;
