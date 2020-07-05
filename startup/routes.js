const express = require('express')
const healthcheck = require('../routes/healthcheck')
const recipeCreations = require('../routes/recipeCreations');
// const winston = require('winston/lib/winston/config');
const router = express.Router();

module.exports = function(app) {
    // app.use(express.json());
    app.use('/healthcheck', healthcheck);
    app.use('/api/recipeCreations', recipeCreations);
}