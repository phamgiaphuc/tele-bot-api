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

// start the bot
bot.start((ctx) => {
     ctx.reply('Hi there ✋, please type /cmd to see the commands!');
});

// call the bot
bot.hears(['bot','hey bot', 'hey there'], (ctx) => ctx.reply('I am here ✋. Please type /cmd to see the commands!'))

// 1. /check : check if the bot is listening
bot.command('check', (ctx) => {
     const { username } = ctx.message.from;
     const { id } = ctx.chat ?? {}
     if (id !== Number(process.env.MY_CHAT_ID)) {
          ctx.reply(`Action is not allowed with this id ${id}!`);
          return;
     }
     if (username !== process.env.MY_USERNAME) {
          ctx.reply(`Action is not allowed with this username ${username}!`);
          return;
     }
     ctx.reply('Bot is listening for commands!');

});
// 2. /cmd : show the commands
bot.command('cmd', async (ctx) => {
     const { username } = ctx.message.from;
     const { id } = ctx.chat ?? {}
     if (id !== Number(process.env.MY_CHAT_ID)) {
          ctx.reply(`Action is not allowed with this id ${id}!`);
          return;
     }
     if (username !== process.env.MY_USERNAME) {
          ctx.reply(`Action is not allowed with this username ${username}!`);
          return;
     }
     ctx.replyWithPhoto('https://www.freepik.com/premium-vector/flat-chat-bot-marketing-design-chat-messenger-icon-support-service-icon-chat-bot-flat-style-online-consultation-support-service-bot_17408508.htm#query=bot%20logo&position=18&from_view=keyword&track=ais', 
     { caption: 
     `You can control me by sending these commands.

Bot commands:
1. /start : 'Hi there ✋, please type /cmd to see the commands!'
2. /check : check if the bot is listening
3. /cmd : show the commands
4. /add : add telegram usernames to json file
5. /addgithub : add github usernames to json file
6. /allUsers : print out all Telegram usernames
7. /allGitUsers : print out all GitHub usernames
          
Bot messages: 'bot', 'hey there' and 'hey bot'`});
})

// 3. /add : add telegram usernames to json file
bot.command('add', async (ctx) => {
     const { username } = ctx.message.from;
     const { id } = ctx.chat ?? {}
     if (id !== Number(process.env.MY_CHAT_ID)) {
          ctx.reply(`Action is not allowed with this id ${id}!`);
          return;
     }
     if (username !== process.env.MY_USERNAME) {
          ctx.reply(`Action is not allowed with this username ${username}!`);
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
          ctx.reply(`Action is not allowed with this id ${id}!`);
          return;
     }
     if (username !== process.env.MY_USERNAME) {
          ctx.reply(`Action is not allowed with this username ${username}!`);
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

bot.command('allUsers', async (ctx) => {
     const { username } = ctx.message.from;
     const { id } = ctx.chat ?? {}
     if (id !== Number(process.env.MY_CHAT_ID)) {
          ctx.reply(`Action is not allowed with this id ${id}!`);
          return;
     }
     if (username !== process.env.MY_USERNAME) {
          ctx.reply(`Action is not allowed with this username ${username}!`);
          return;
     }
     const data = await fs.promises.readFile('users.json', 'utf8');
     usersData = JSON.parse(data);
     const users = usersData.users.join(", ")
     ctx.reply(usersData.users.length > 0 ? `All users are updated: ${users}` : `No users are updated!`);
});

bot.command('allGitUsers', async (ctx) => {
     const { username } = ctx.message.from;
     const { id } = ctx.chat ?? {}
     if (id !== Number(process.env.MY_CHAT_ID)) {
          ctx.reply(`Action is not allowed with this id ${id}!`);
          return;
     }
     if (username !== process.env.MY_USERNAME) {
          ctx.reply(`Action is not allowed with this username ${username}!`);
          return;
     }
     const data = await fs.promises.readFile('users.json', 'utf8');
     usersData = JSON.parse(data);
     const users = usersData.githubUsers.join(", ")
     ctx.reply(usersData.githubUsers.length > 0 ? `All GitHub usernames are updated: ${users}` : `No GitHub usernames are updated!`);
});

bot.launch();

expressApp.listen(port, () => {
     console.log(`Server is running on ${port}!`);
});

