const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
const path = require("path")
const command = require('./group');
const PATH = path.join(__dirname, 'data/users.json');

const startTheBot = () => {
     command.start(bot);
     command.check(bot);
     command.cmd(bot);
     command.addTele(bot, PATH);
     command.addGitHub(bot, PATH);
     command.allTeleUsers(bot, PATH);
     command.allGitUsers(bot, PATH);
     bot.launch();
     return;
}

module.exports = { startTheBot };