const request = require('supertest')

let server;

describe('/recipeCreation', () => {
    beforeEach(() => { server = require('../../index'); })
    afterEach(async () => {
        server.close();
    });

    describe('GET /healthcheck', () => {
        it('should return a successful response', async () => {
            const res = await request(server).get('/healthcheck');

            expect(res.status).toBe(200);
        })
    })
});