const usersModel = require('../../database/models/member');
const date = require('./date');

const addGitHubToDB = async (usernames, chatId) => {
     try {
          for (let name of usernames) {
               await usersModel.create({
                    username: name,
                    user_type: 'github',
                    group_id: chatId,
                    created_time: date(),
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