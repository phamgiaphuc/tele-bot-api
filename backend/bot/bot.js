const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
const command = require('./group');

const startTheBot = () => {
     command.start(bot);
     command.msg(bot);
     command.check(bot);
     command.cmd(bot);
     command.addTele(bot);
     command.addGitHub(bot);
     command.allTeleMembers(bot);
     command.allGitMembers(bot);
     command.all(bot);
     command.pdf(bot);
     // command.querry(bot)
     bot.launch();
     return;
}

module.exports = { startTheBot };