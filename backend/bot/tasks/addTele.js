const usersModel = require('../../database/models/member');
const date = require('./date');

const addTeleToDB = async (usernames, chatId) => {
     try {
          for (let name of usernames) {
               result = await usersModel.create({
                    username: name,
                    user_type: 'telegram',
                    group_id: chatId,
                    created_time: date(),
                    updated_time: date(),
                    key: `${name}#telegram#${chatId}`
               });
          }
          console.log('Add Telegram usernames to MongoDB successful!');
     } catch (error) {
          console.log(error);
     };
     return;
}

module.exports = addTeleToDB;