const express = require('express');
require('dotenv').config();
const expressApp = express();
const axios = require("axios");
const path = require("path")
const port = process.env.PORT || 3000;
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
const fs = require('fs');

expressApp.use(express.static('static'))
expressApp.use(express.json());

expressApp.get("/", (req, res) => {
     res.sendFile(path.join(__dirname + '/index.html'));
});

bot.launch().then(() => {
     console.log('Bot PGP_BOT is running!');
})

bot.command('start', (ctx) => {
     const { username } = ctx.message.from;
     const { id } = ctx.chat ?? {}
     if (id !== Number(process.env.MY_CHAT_ID)) {
          bot.telegram.sendMessage(id, `Action is not allowed with this id ${id}!`);
          return;
     }
     if (username !== process.env.MY_USERNAME) {
          bot.telegram.sendMessage(id, `Action is not allowed with this username ${username}!`);
          return;
     }
     bot.telegram.sendMessage(id, `Bot PGP_BOT starts listening for actions!`);
});

bot.command('addgithub', async (ctx) => {
     const { username } = ctx.message.from;
     const { id } = ctx.chat ?? {}
     if (id !== Number(process.env.MY_CHAT_ID)) {
          bot.telegram.sendMessage(id, `Action is not allowed with this id ${id}!`);
          return;
     }
     if (username !== process.env.MY_USERNAME) {
          bot.telegram.sendMessage(id, `Action is not allowed with this username ${username}!`);
          return;
     }
     let userMess = ctx.message.text
     let usersData = { githubUsers: [] };
     try {
          const data = await fs.promises.readFile('users.json', 'utf8');
          usersData = JSON.parse(data);
     } catch (error) {
          console.error('Error reading the file:', error);
          return;
     }
     if (!userMess) {
          return;
     }
     const usernames = userMess.split(' ').slice(1);
     usersData.githubUsers.push(...usernames);
     userMess = '';
     try {
          const updatedData = JSON.stringify(usersData, null, 2);
          await fs.promises.writeFile('users.json', updatedData, 'utf8');
          return;
     } catch (error) {
          console.error('Error writing to the file:', error);
          return;
     }
});
expressApp.listen(port, () => {
     console.log(`Server is running on ${port}!`);
});

