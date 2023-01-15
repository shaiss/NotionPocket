const request = require('supertest');
const app = require('../server');

describe('Notion route', () => {
    it('should return 200 OK and a success message', async () => {
        const res = await request(app)
            .post('/notion')
            .send({
                "save": {
                    "title": "Test Save",
                    "url": "https://www.example.com"
                }
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ message: 'Save added to Notion database' });
    });
});
