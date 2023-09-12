const PDFDocument = require("pdfkit");
const fs = require('fs');
const all = require('../tasks/all');
const getAllGitUsersFromDB = require('../tasks/allGitMembers');
const path = require('path');
const { Markup } = require("telegraf");

const pdfCommand = (bot) => {
     // 9. /pdf : download a PDF file of group data
     bot.command('pdf', (ctx) => {
          const { username } = ctx.message.from;
          const { id } = ctx.chat ?? {};
          const chat_id = JSON.parse(process.env.MY_CHAT_ID);
          if (!chat_id.includes(id)) {
               ctx.reply(`Action is not allowed with this id ${id}!`);
               return;
          }
          if (username !== process.env.MY_USERNAME) {
               ctx.reply(`Action is not allowed with this username ${username}!`);
               return;
          }
          const pdfInlineKeyboard = Markup.inlineKeyboard([
               Markup.button.callback('Download', 'download'),
          ]);
          ctx.reply('Click the below button to download the file!', pdfInlineKeyboard);
     });

     bot.action('download', async (ctx) => {
          const { id } = ctx.chat ?? {};
          ctx.reply('Downloading file to the desktop folder...');
          const teleUsernames = await all(id)
               .then((response) => {
                    return response;
               })
               .catch((error) => {
                    console.log(error);
               });
          let githubUsernames = [];
          try {
               githubUsernames = await getAllGitUsersFromDB(id)
                    .then((response) => {
                       return response;
                    })
          } catch (error) {
               console.log(error);
          }
          replyContent(ctx, teleUsernames, githubUsernames);
     })
     return;
}

const replyContent = (ctx, response1, response2) => {
     const teleUsernames = response1.map((member) => member.username);
     const githubUsernames = response2.map((member) => member.username);
     if (!teleUsernames.length) {
          ctx.reply('No Telegram usernames are updated!');
          return;
     }
     if (!githubUsernames.length) {
          ctx.reply('No GitHub usernames are updated!');
          return;
     }
     const destinationFilePath = generatePDF(teleUsernames, githubUsernames);
     setTimeout(() => {
          ctx.reply('Download completed!');
     }, 1000);
     return;
}

const generatePDF = (teleUsernames, githubUsernames) => {
     const doc = new PDFDocument({ size: "A4", margin: 50 });
     const desktopFolder = require('os').homedir();
     const destinationFilePath = path.join(desktopFolder + '/Desktop/', 'TelegramData.pdf');
     generateHeader(doc);
     const teleTablePosition = generateTele(doc, teleUsernames);
     const githubTablePosition = generateGitHub(doc, githubUsernames, teleTablePosition);
     doc.end();
     doc.pipe(fs.createWriteStream(destinationFilePath));
     return destinationFilePath;
}

const generateHeader = (doc) => {
     const logoPath = path.join(__dirname, '../data/image.png');
     doc
          .image(logoPath, 50, 45, { 
               width: 80 
          })
          .fillColor('#444444')
          .fontSize(16)
          .text('Telegram Bot API', 120, 70)
          .fontSize(12)
          .text('Telegram Bot API', 200, 55, { 
               align: 'right',
          })
          .text('Group information', 200, 70, { 
               align: 'right' 
          })
          .text(formatDate(new Date()), 200, 85, { 
               align: 'right' 
          })
          .moveDown();
}

const generateTele = (doc, usernames) => {
     doc
          .fillColor("#444444")
          .fontSize(18)
          .text("Telegram group information", 50, 150)
          .moveDown();
     generateHr(doc, 170);
     const tableTop = 180;
     doc.font('Helvetica-Bold');
     generateTableRow(doc, 'Index', 'Username', null, tableTop);
     doc.font('Helvetica');
     for (let i = 0; i < usernames.length; i++) {
          const position = tableTop + (i + 1) * 20;
          generateTableRow(doc, i + 1, usernames[i], null, position);
     }
     return tableTop + usernames.length * 20;
}

const generateGitHub = (doc, usernames, position) => {
     doc
          .fillColor("#444444")
          .fontSize(18)
          .text("GitHub group information", 50, position + 65)
          .moveDown();
     generateHr(doc, position + 85);
     const tableTop = position + 95;
     doc.font('Helvetica-Bold');
     generateTableRow(doc, 'Index', 'Username', 'GitHub link', tableTop);
     doc.font('Helvetica');
     for (let i = 0; i < usernames.length; i++) {
          const position = tableTop + (i + 1) * 20;
          generateTableRow(doc, i + 1, usernames[i], `https://github.com/${usernames[i]}`,  position);
     }
     return tableTop + usernames.length * 20;
}

const generateHr = (doc, position) => {
     doc
          .strokeColor("#aaaaaa")
          .lineWidth(1)
          .moveTo(50, position)
          .lineTo(550, position)
          .stroke();
}

const generateTableRow = (
     doc,
     index,
     username,
     link,
     y_position
) => {
     doc
          .fontSize(10)
          .text(index, 50, y_position)
          .text(username, 200, y_position)
          .text(link, 350, y_position);
}

const formatDate = (date) => {
     const second = date.getSeconds();
     const minute = date.getMinutes();
     const hour = date.getHours();
     const day = date.getDate();
     const month = date.getMonth();
     const year = date.getFullYear();
     return `${hour}:${minute}:${second} ${day}/${month}/${year}`;
}

module.exports = pdfCommand;