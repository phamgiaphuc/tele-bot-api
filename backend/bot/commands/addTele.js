const addTeleToDB = require('../tasks/addTele');

const addTeleCommand = (bot) => {
     // 4. /add : add telegram usernames to json file
     bot.command('addTele', async (ctx) => {
          const { username } = ctx.message.from;
          const { id } = ctx.chat ?? {};
          const chat_id = JSON.parse(process.env.MY_CHAT_ID);
          if (!chat_id.includes(id)) {
               ctx.reply(`Action is not allowed with this id ${id}!`);
               return;
          }
          if (username !== process.env.MY_USERNAME) {
               ctx.reply(`Action is not allowed with this username ${username}!`);
               return;
          }
          const userMess = ctx.message.text
          const usernames = userMess.split(' ').slice(1);
          if (usernames.length === 0) {
               ctx.reply('No Telegram usernames are added!');
               return;
          }
          try {
               addTeleToDB(usernames, id);
               if (usernames.length > 1) {
                    ctx.reply('Add Telegram usernames to database successful!');
                    return;
               }
               ctx.reply('Add Telegram username to database successful!');
          } catch (error) {
               console.log(error);
          }
     });
     return;
}

module.exports = addTeleCommand;