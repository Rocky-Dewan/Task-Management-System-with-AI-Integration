// notificationService.js - Responsible for sending notifications

// Example function to send task notifications
exports.sendTaskNotification = (user, task) => {
    console.log(`Notification for user ${user.username}: Task "${task.title}" is due soon.`);
};
