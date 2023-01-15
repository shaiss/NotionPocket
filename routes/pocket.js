const express = require('express');
const router = express.Router();
const request = require('request');
const validation = require('../validation/validation');
const config = require('../config');

router.get('/', (req, res) => {
    request.get(`https://getpocket.com/v3/get?consumer_key=${config.POCKET_CONSUMER_KEY}&access_token=${config.POCKET_ACCESS_TOKEN}`, (error, response, body) => {
        if (error) {
            res.status(500).json({ message: 'Error retrieving Pocket saves' });
        } else {
            const data = JSON.parse(body);
            res.json(data);
        }
    });
});

module.exports = router;
