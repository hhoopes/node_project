// const winston = require('winston');
const express = require('express');
const app = express();

// require('./startup/logging')();
require('./startup/routes')(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

module.exports = server;