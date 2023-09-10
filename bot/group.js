// bot
const start = require('./commands/start');
const msg = require('./commands/msg');
const check = require('./commands/check');
const cmd = require('./commands/cmd');
const addTele = require('./commands/addTele');
const addGitHub = require('./commands/addGitHub');
const allTeleUsers = require('./commands/allTeleUsers');
const allGitUsers = require('./commands/allGitUsers');
const all = require('./commands/all');
const pdf = require('./commands/pdf');
// const querry = require('./commands/querry');

module.exports = { start, msg, check, cmd, addTele, addGitHub, allTeleUsers, allGitUsers, all, pdf};