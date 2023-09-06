const usersModel = require('../models/users');

const addTeleToDB = async (usernames, chatId) => {
     try {
          for (let name of usernames) {
               await usersModel.create({
                    username: name,
                    user_type: 'telegram',
                    chat_id: chatId,
                    key: `${name}#telegram#${chatId}`
               });
          }
          console.log('Add Telegram usernames to MongoDB successful!');
     } catch (error) {
          console.log(error)
     };
     return;
}

module.exports = addTeleToDB;