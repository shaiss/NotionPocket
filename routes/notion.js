const express = require('express');
const router = express.Router();
const request = require('request');
const validation = require('../validation/validation');
const config = require('../config');

router.post('/', (req, res) => {
    const { save } = req.body;
    if (!validation.validateSave(save)) {
        return res.status(400).json({ message: 'Invalid save data' });
    }

    const options = {
        url: `https://api.notion.com/v3/add_to_database`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Notion-Version': '2022-01-28',
            'Authorization': `Bearer ${config.NOTION_API_KEY}`
        },
        json: {
            "database_id": config.NOTION_DATABASE_ITEM,
            "items": [save]
        }
    };

    request(options, (error, response, body) => {
        if (error) {
            res.status(500).json({ message: 'Error adding save to Notion database' });
        } else {
            res.json({ message: 'Save added to Notion database' });
        }
    });
});

module.exports = router;
