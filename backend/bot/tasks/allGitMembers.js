const usersModel = require('../../database/models/member');

const getAllGitMembersFromDB = async (chatId) => {
     try {
          const users = await usersModel.find({
               user_type: "github",
               group_id: chatId
          });
          return users;
     } catch (error) {
          console.log(error);
     }
}

module.exports = getAllGitMembersFromDB;