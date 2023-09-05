const usersModel = require('../models/users')
const addGitHubToDB = async (usernames) => {
     try {
          for (let name of usernames) {
               await usersModel.create({
                    username: name,
                    user_type: 'github'
               })
          }
     } catch (error) {
          console.log(error)
     };
     return;
}

module.exports = addGitHubToDB;