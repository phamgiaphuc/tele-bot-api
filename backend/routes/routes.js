const express = require('express');
const route = express.Router();
const { testServer, getAllMembers, getAllTeleMembers, getAllGitMembers, getMemberById, deleteMemberById, editMemberById } = require('../controllers/tasks');

route.get('/test', testServer);
route.get('/member', getAllMembers);
route.get('/member/telegram', getAllTeleMembers);
route.get('/member/github', getAllGitMembers);
route.route('/member/:id')
     .get(getMemberById)
     .delete(deleteMemberById)
     .patch(editMemberById);

module.exports = route;