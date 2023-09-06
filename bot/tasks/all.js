const { model } = require('mongoose');
const usersModel = require('../models/users')

const getAllFromDB = async (chatId) => {
     try {
          const users = await usersModel.find({
               user_type: "telegram",
               chat_id: chatId
          });
          return users;
     } catch (error) {
          console.log(error);
     }
}

module.exports = getAllFromDB;