const usersModel = require('../models/users');

const addGitHubToDB = async (usernames, chatId) => {
     try {
          for (let name of usernames) {
               await usersModel.create({
                    username: name,
                    user_type: 'github',
                    chat_id: chatId,
                    key: `${name}#github#${chatId}`
               });
          }
          console.log('Add GitHub usernames to MongoDB successful!');
     } catch (error) {
          console.log(error)
     };
     return;
}

module.exports = addGitHubToDB;