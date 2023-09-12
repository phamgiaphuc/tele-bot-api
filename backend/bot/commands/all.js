const all = require('../tasks/all');

const allCommand = (bot) => {
     // 8. /all: mention all people in the group chat
     bot.command('all', (ctx) => {
          const { id } = ctx.chat ?? {}
          const chat_id = JSON.parse(process.env.MY_CHAT_ID);
          if (!chat_id.includes(id)) {
               ctx.reply(`Action is not allowed with this id ${id}`);
               return;
          }
          const fromUser = ctx.from.username;
          all(id).then((response) => {
               replyContent(ctx, response, fromUser);
          });
     });
     return;
}

const replyContent = (ctx, response, fromUser) => {
     const filteredUsers = response.filter((username) => username !== fromUser)
     const usernames = filteredUsers.map((member) => `@${member.username}`);
     const mentionedUsers = usernames.join(' ');
     if (!usernames.length) {
          ctx.reply('No users to mention!');
          return
     }
     ctx.reply(`Hey everyone ✋ Mention to all users: ${mentionedUsers}`);
     return;
}

module.exports = allCommand;