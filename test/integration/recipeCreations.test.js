const request = require('supertest')
const app = require('../../app')

let server;

describe('/api/recipeCreations', () => {
    let user;
    let ingredients;

    const exec = async () => {
        return await request(app)
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