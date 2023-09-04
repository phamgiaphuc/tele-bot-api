const checkCommand = (bot) => {
     // 2. /check : check if the bot is listening
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
     return;
}

module.exports = checkCommand;