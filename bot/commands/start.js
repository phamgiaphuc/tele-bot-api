const startCommand = (bot) => {
     // start the bot
     bot.start((ctx) => {
          ctx.reply('Hi there ✋, please type /cmd to see the commands!');
     });

     // 1. /start: call the bot
     bot.hears(['bot','hey bot', 'hey there'], (ctx) => ctx.reply('I am here ✋. Please type /cmd to see the commands!'));
     return;
}

module.exports = startCommand;