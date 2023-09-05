const all = require('../tasks/all');

const allCommand = (bot) => {
     bot.command('all', (ctx) => {
          const fromUser = ctx.from.username;
          all().then((response) => {
               replyContent(ctx, response, fromUser);
          });
     });
     return;
}

const replyContent = (ctx, response, fromUser) => {
     const filteredUsers = response.filter((username) => username !== fromUser)
     const usernames = filteredUsers.map((member) => `@${member.username}`);
     const mentionedUsers = usernames.join(' ');
     const message = `Hey everyone ✋ Mention to all users: ${mentionedUsers}!`;
     ctx.reply(message);
     return;
}

module.exports = allCommand;