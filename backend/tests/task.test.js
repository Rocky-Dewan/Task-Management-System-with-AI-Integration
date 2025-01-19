const request = require('supertest');
const app = require('../app');

describe('Task Routes', () => {
    it('should create a new task', async () => {
        const token = 'your-jwt-token'; // Get this from a previous login

        const response = await request(app)
            .post('/api/tasks')
            .set('Authorization', `Bearer ${token}`)
            .send({ title: 'Test Task', description: 'Test task description' });

        expect(response.status).toBe(201);
        expect(response.body.title).toBe('Test Task');
    });

    it('should get all tasks for the user', async () => {
        const token = 'your-jwt-token'; // Get this from a previous login

        const response = await request(app)
            .get('/api/tasks')
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});
