const fs = require('fs');
const all = require('../tasks/all');

const allTeleUsersCommand = (bot, PATH) => {
     // 6. /allUsers : print out all Telegram usernames
     bot.command('allTeleUsers', async (ctx) => {
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
          all(id).then((response) => {
               replyContent(ctx, response);
          });
     });
     return;
}

const replyContent = (ctx, response) => {
     const usernames = response.map((member) => member.username);
     const mentionedUsers = usernames.join(', ');
     if (!usernames.length) {
          ctx.reply('No Telegram usernames are updated!');
          return;
     }
     ctx.reply(`All Telegram usernames are updated: ${mentionedUsers}`);
     return;
}

module.exports = allTeleUsersCommand;