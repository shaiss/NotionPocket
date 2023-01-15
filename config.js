require('dotenv').config();

module.exports = {
    POCKET_CONSUMER_KEY: process.env.POCKET_CONSUMER_KEY,
    POCKET_ACCESS_TOKEN: process.env.POCKET_ACCESS_TOKEN,
    NOTION_DATABASE_ITEM: process.env.NOTION_DATABASE_ITEM,
    NOTION_API_KEY: process.env.NOTION_API_KEY
};
