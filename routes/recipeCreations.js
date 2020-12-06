const express = require('express');
const router = express.Router();
const axios = require('axios');
// const winston = require('winston/lib/winston/config');

router.post('/', async (req, res) => {
    const recipe = await findRecipeFromIngredients(req.body.ingredients);
    let creation = {
        creator: req.body.user,
        recipe: recipe.data,
    }
    res.send(creation);
});

const findRecipeFromIngredients = async (ingredients) => {
    let params = {
        apiKey: process.env.API_KEY,
        ignorePantry: true,
        ranking: 1,
        ingredients: ingredients,
        number: 5
    }
    try {
        const resp = await axios.get('https://api.spoonacular.com/recipes/findByIngredients/', { params: params });
        return(resp);
    } catch (error) {
        console.error(error)
    };
};

module.exports = router;