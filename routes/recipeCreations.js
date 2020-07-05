const express = require('express');
const router = express.Router();
const axios = require('axios');
// const winston = require('winston/lib/winston/config');

router.put('/', async (req, res) => {
    const response = findRecipeFromIngredients(req);
    const creation = {
        creator: req.body.user,
    }
    res.send(creation);
});

// function findRecipeFromIngredients(req) {
//     axios.get('https://api.spoonacular.com/recipes/findByIngredients/', { 
//         params: { 
//             apiKey: process.env.API_KEY,
//             ignorePantry: true,
//             ranking: 1,
//             ingredients: req.body.ingredients,
//             number: 5
//         }
//     })
//     .then(function (response) {
//         winston.info(response);
//     })
//     .catch(function (error) {
//         winston.error('Error', error.message);
//     })
// };

module.exports = router;