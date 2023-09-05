const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const theBot = require('./bot/bot');
const http = require('http');
const server = http.createServer(app);
const connectToMongoDB = require('./database/connect');
const URL = process.env.MONGODB_URL;

app.use(express.static('static'))
app.use(express.json());

app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname + '/public/index.html'));
});

const startServer = () => {
     theBot.startTheBot();
     connectToMongoDB(URL);
     server.listen(port, () => {
          console.log(`Server is running on ${port}!`);
     });
}

startServer();