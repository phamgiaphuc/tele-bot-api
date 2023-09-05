const usersModel = require('../models/users');

const addTeleToDB = async (usernames) => {
     try {
          for (let name of usernames) {
               await usersModel.create({
                    username: name,
                    user_type: 'telegram'
               });
          }
          console.log('Add Telegram usernames to MongoDB successful');
     } catch (error) {
          console.log(error)
     };
     return;
}

module.exports = addTeleToDB;