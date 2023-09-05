const mongoose = require('mongoose');

const connectToMongoDB = (URL) => {
     mongoose
          .connect(URL)
          .then(() => {
               console.log('MongoDB database is connected!');
          })
          .catch((error) => {
               console.log(error);
          });
     return;
}

module.exports = connectToMongoDB;