const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
     user_id: {
          type: String,
          required: true,
          unique: true,
          default: () => uuidv4()
     },
     username: {
          type: String,
          required: [true, 'Must provide an username!'],
          trim: true,
          minLength: [1, 'Minimum character is 1!'],
          maxLength: [50, 'Maximum characters is 50!'],
     },
     user_type: {
          type: String,
          required: () => {
               return this.user_type === 'telegram' || this.user_type ==='github';
          },
          trim: true,
          minLength: [1, 'Minimum character is 1!'],
          maxLength: [50, 'Maximum characters is 50!']
     },
     chat_id: {
          type: String,
          required: true,
          trim: true,
          minLength: [1, 'Minimum character is 1!'],
          maxLength: [25, 'Maximum characters is 50!']
     },
     key: {
          type: String,
          required: true,
          unique: [true, `Already have this ${this.username} in this group ${this.chat_id}`]
     }
});

module.exports = mongoose.model('Users', userSchema);