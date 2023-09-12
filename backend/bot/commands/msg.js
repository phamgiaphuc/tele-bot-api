const msgCommand = (bot) => {
     // 1. /start: call the bot
     bot.hears(['bot','hey bot', 'hey there'], (ctx) => ctx.reply('I am here ✋. Please type /cmd to see the commands!'));
     return;
}

module.exports = msgCommand;