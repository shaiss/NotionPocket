const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const pocket = require('./routes/pocket');
const notion = require('./routes/notion');
const validation = require('./validation/validation');
const config = require('./config');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/pocket', pocket);
app.use('/notion', notion);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
