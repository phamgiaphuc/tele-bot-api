const port = process.env.PORT || 3000;
const memberModel = require('../database/models/member');

const testServer = async (req, res) => {
     await res.status(200).send({
          "server_msg": {
               "response": `Server is listening on http://localhost:${port}`,
               "status_code": 200
          }
     });
     return;
}

const getAllMembers = async (req, res) => {
     try {
          const allMembers = await memberModel.find({});
          if (!allMembers) {
               res.status(404).json({
                    "server_msg": { 
                         "response": 'Members are not found',
                         "status_code": 404
                    }
               });
               return;
          }
          res.status(200).json({allMembers});
          return;
     } catch (error) {
          console.log(error.message);
          res.status(500).json({
               "server_msg": {
                    "response": error.message,
                    "status_code": 500
               }
          });
     }
}

const getAllTeleMembers = async (req, res) => {
     try {
          const allTeleMembers = await memberModel.find({
               user_type: 'telegram'
          });
          if (!allTeleMembers) {
               res.status(404).json({
                    "server_msg": {
                         "response": 'Telegram members are not found',
                         "status_code": 404
                    }
               });
               return;
          }
          res.status(200).json({allTeleMembers});
          return;
     } catch (error) {
          console.log(error.message);
          res.status(500).json({
               "server_msg": {
                    "response": error.message,
                    "status_code": 500
               }
          });
     }
}

const getAllGitMembers = async (req, res) => {
     try {
          const allGitMembers = await memberModel.find({
               user_type: 'github'
          });
          if (!allGitMembers) {
               res.status(404).json({
                    "server_msg": {
                         "response": 'GitHub members are not found',
                         "status_code": 404
                    }
               });
               return;
          }
          res.status(200).json({allGitMembers});
          return;
     } catch (error) {
          console.log(error.message);
          res.status(500).json({
               "server_msg": {
                    "response": error.message,
                    "status_code": 500
               }
          });
     }
}

const getMemberById = async(req, res) => {
     try {
          const { id: memberID } = req.params;
          const member = await memberModel.findOne({
               user_id: memberID
          });
          if (!member) {
               res.status(404).json({
                    "server_msg": {
                         "response": `User is not found`,
                         "status_code": 404
                    }
               });
               return;
          }
          res.status(200).json({member});
          return;
     } catch (error) {
          console.log(error.message);
          res.status(500).json({
               "server_msg": {
                    "response": error.message,
                    "status_code": 500
               }
          });
     }
}

const deleteMemberById = async (req, res) => {
     try {
          const { id: memberID } = req.params;
          const member = await memberModel.findOneAndDelete({
               user_id: memberID
          });
          if (!member) {
               res.status(404).json({
                    "server_msg": {
                         "response": `Member is not found`,
                         "status_code": 404
                    }
               });
               return;
          }
          res.status(200).json({member});
     } catch (error) {
          console.log(error.message);
          res.status(500).json({
               "server_msg": {
                    "response": error.message,
                    "status_code": 500
               }
          });
     }
     return;
}

const editMemberById = async (req, res) => {
     try {
          const { id: memberID } = req.params;
          const member = await memberModel.findOneAndUpdate({
               user_id: memberID
          }, req.body, {
               new: true,
               runValidators: true,
          });
          if (!member) {
               res.status(404).json({
                    "server_msg": {
                         "response": `Member is not found`,
                         "status_code": 404
                    }
               });
               return;
          }
          res.status(200).json({member});
     } catch (error) {
          console.log(error.message);
          res.status(500).json({
               "server_msg": {
                    "response": error.message,
                    "status_code": 500
               }
          });
     }
     return;
}

module.exports = { testServer, getAllMembers, getAllTeleMembers, getAllGitMembers, getMemberById, deleteMemberById, editMemberById };