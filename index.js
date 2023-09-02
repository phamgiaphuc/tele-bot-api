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
     console.log('Bot is running!');
})

// 1. /start : start the instructions
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
     bot.telegram.sendMessage(id, 'Bot starts listening for commands!');

});
// 2. /cmd : show the commands
bot.command('cmd', (ctx) => {
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
     bot.telegram.sendMessage(id, `Here is all the bot commands:
     1. /start : start the instructions
     2. /cmd : show the commands
     3. /add : add telegram usernames to json file
     4. /addgithub : add github usernames to json file
     `)
     bot.telegram.sendPhoto(id, 'https://www.freepik.com/premium-vector/flat-chat-bot-marketing-design-chat-messenger-icon-support-service-icon-chat-bot-flat-style-online-consultation-support-service-bot_17408508.htm#query=bot%20logo&position=18&from_view=keyword&track=ais');
})

// 3. /add : add telegram usernames to json file
bot.command('add', async (ctx) => {
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
     let usersData = { users: [] };
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
     usersData.users.push(...usernames);
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

// 4. /addgithub : add github usernames to json file
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

