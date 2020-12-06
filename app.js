// const winston = require('winston');
require('dotenv').config();

const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')(app);

module.exports = app;