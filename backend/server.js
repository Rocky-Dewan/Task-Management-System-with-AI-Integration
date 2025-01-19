const express = require('express');
const { sendTaskNotification } = require('./services/notificationService');
const { getTaskPriority } = require('./services/taskService');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Route to add a task and notify the user
app.post('/task', async (req, res) => {
    const { description, user } = req.body;

    // Determine task priority using AI service
    const priority = await getTaskPriority(description);

    // Send notification to the user
    sendTaskNotification(user, { title: description, priority });

    res.json({
        message: 'Task added successfully!',
        priority,
    });
});

// Route to manually trigger a notification (for testing)
app.post('/notify', (req, res) => {
    const { user, task } = req.body;

    sendTaskNotification(user, task); // Call the function from notificationService.js
    res.json({ message: 'Notification sent successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
