const fs = require('fs');

const allGitUsersCommand = (bot, PATH) => {
     // 7. /allGitUsers : print out all GitHub usernames
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
          const data = await fs.promises.readFile(PATH, 'utf8');
          usersData = JSON.parse(data);
          const users = usersData.githubUsers.join(", ");
          if (!usersData.githubUsers.length) {
               ctx.reply('No GitHub usernames are updated!');
               return;
          }
          ctx.reply(`All GitHub usernames are updated: ${users}`);
     });
     return;
}

module.exports = allGitUsersCommand;