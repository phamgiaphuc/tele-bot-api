const getAllGitUsersFromDB = require('../tasks/allGitMembers');

const allGitMembersCommand = (bot) => {
     // 7. /allGitUsers : print out all GitHub usernames
     bot.command('allGitMembers', async (ctx) => {
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
          getAllGitUsersFromDB(id).then((response) => {
               replyContent(ctx, response);
          });
     });
     return;
}

const replyContent = (ctx, response) => {
     const usernames = response.map((member) => member.username);
     const mentionedUsers = usernames.join(', ');
     if (!usernames.length) {
          ctx.reply('No GitHub usernames are updated!');
          return;
     }
     ctx.reply(`All GitHub usernames are updated: ${mentionedUsers}`);
     return;
}

module.exports = allGitMembersCommand;