const { model } = require('mongoose');
const usersModel = require('../models/users')

const getAllGitUsersFromDB = async (chatId) => {
     try {
          const users = await usersModel.find({
               user_type: "github",
               chat_id: chatId
          });
          return users;
     } catch (error) {
          console.log(error);
     }
}

module.exports = getAllGitUsersFromDB;