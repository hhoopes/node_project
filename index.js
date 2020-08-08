// const winston = require('winston');
require('dotenv').config();

const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// require('./startup/logging')();
require('./startup/routes')(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

module.exports = server;