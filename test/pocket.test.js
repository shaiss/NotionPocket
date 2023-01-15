const request = require('supertest');
const app = require('../server');

describe('Pocket route', () => {
    it('should return 200 OK and the latest saves', async () => {
        const res = await request(app).get('/pocket');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('list');
    });
});
