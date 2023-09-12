const usersModel = require('../../database/models/member');

const getAllFromDB = async (chatId) => {
     try {
          const users = await usersModel.find({
               user_type: "telegram",
               group_id: chatId
          });
          return users;
     } catch (error) {
          console.log(error);
     }
}

module.exports = getAllFromDB;