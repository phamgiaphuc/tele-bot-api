const cmdCommand = (bot) => {
     // 3. /cmd : show the commands
     bot.command('cmd', async (ctx) => {
          const { username } = ctx.message.from;
          const { id } = ctx.chat ?? {}
          const chat_id = JSON.parse(process.env.MY_CHAT_ID);
          if (!chat_id.includes(id)) {
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
4. /addTele : add telegram usernames to json file
5. /addGitHub : add github usernames to json file
6. /allTeleUsers : print out all Telegram usernames
7. /allGitUsers : print out all GitHub usernames
8. /all: mention all people in the group chat
               
Bot messages: 'bot', 'hey there' and 'hey bot'`});
     });
     return;
}

module.exports = cmdCommand;