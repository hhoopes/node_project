const express = require('express');
const router = express.Router();
// const winston = require('winston/lib/winston/config');

router.get('/', async (req, res) => {
    res.send('Successful request')
});

module.exports = router;