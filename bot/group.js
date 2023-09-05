// bot
const start = require('./commands/start');
const check = require('./commands/check');
const cmd = require('./commands/cmd');
const addTele = require('./commands/addTele');
const addGitHub = require('./commands/addGitHub');
const allTeleUsers = require('./commands/allTeleUsers');
const allGitUsers = require('./commands/allGitUsers');

module.exports = { start, check, cmd, addTele, addGitHub, allTeleUsers, allGitUsers };