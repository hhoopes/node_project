const request = require('supertest')

let server;

describe('/api/recipeCreations', () => {
    beforeEach(() => { server = require('../../index'); })
    afterEach(async () => {
        server.close();
    });

    let user;
    let ingredients;

    const exec = async () => {
        return await request(server)
        .post('/api/recipeCreations')
        .send({user: user, ingredients: ingredients })
    }

    describe('POST /', () => {
        it('should return a successful response', async () => {
            user = 'user1'
            ingredients = 'string1,string2'
            const res = await exec();

            expect(res.status).toBe(200);
        })
    })
});