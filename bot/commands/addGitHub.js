const fs = require('fs');

const addGitHubCommand = (bot, PATH) => {
     // 5. /addgithub : add github usernames to json file
     bot.command('addGitHub', async (ctx) => {
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
          let userMess = ctx.message.text
          let usersData = { githubUsers: [] };
          try {
               const data = await fs.promises.readFile(PATH, 'utf8');
               usersData = JSON.parse(data);
          } catch (error) {
               console.error('Error reading the file:', error);
               return;
          }
          if (!userMess) {
               return;
          }
          const usernames = userMess.split(' ').slice(1);
          usersData.githubUsers.push(...usernames);
          userMess = '';
          try {
               const updatedData = JSON.stringify(usersData, null, 2);
               await fs.promises.writeFile(PATH, updatedData, 'utf8');
               return;
          } catch (error) {
               console.error('Error writing to the file:', error);
               return;
          }
     });
     return;
}

module.exports = addGitHubCommand;