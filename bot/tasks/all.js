const { model } = require('mongoose');
const usersModel = require('../models/users')

const getAllFromDB = async () => {
     try {
          const users = await usersModel.find({
               user_type: "telegram"
          });
          return users;
     } catch (error) {
          console.log(error);
     }
}

module.exports = getAllFromDB;