const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  communities: {
    type: [String],
    required: false
  },
  //remove avatar and do profile pic links
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  
});

module.exports = User = mongoose.model('users', UserSchema);
