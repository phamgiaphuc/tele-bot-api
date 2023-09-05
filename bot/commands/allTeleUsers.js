const fs = require('fs');

const allTeleUsersCommand = (bot, PATH) => {
     // 6. /allUsers : print out all Telegram usernames
     bot.command('allTeleUsers', async (ctx) => {
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
          const data = await fs.promises.readFile(PATH, 'utf8');
          usersData = JSON.parse(data);
          const users = usersData.telegramUsers.join(", ")
          ctx.reply(usersData.telegramUsers.length > 0 ? `All users are updated: ${users}` : `No users are updated!`);
     });
     return;
}

module.exports = allTeleUsersCommand;