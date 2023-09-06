const startCommand = (bot) => {
     // start the bot
     bot.start((ctx) => {
          ctx.reply('Hi there ✋, please type /cmd to see the commands!');
     });
     return;
}

module.exports = startCommand;