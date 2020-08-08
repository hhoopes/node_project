const request = require('supertest');
const app = require('../../app');

describe('/healthcheck', () => {
    describe('GET /', () => {
        it('should return a successful response', async () => {
            const res = await request(app).get('/healthcheck');

            expect(res.status).toBe(200);
        })
    })
});