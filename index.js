const express = require('express');
require('dotenv').config();
const expressApp = express();
const path = require('path')
const port = process.env.PORT || 3000;
const theBot = require('./bot/bot');

expressApp.use(express.static('static'))
expressApp.use(express.json());

expressApp.get("/", (req, res) => {
     res.sendFile(path.join(__dirname + '/index.html'));
});

// Start the bot
theBot.startTheBot();

expressApp.listen(port, () => {
     console.log(`Server is running on ${port}!`);
});

