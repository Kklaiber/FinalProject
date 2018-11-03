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
  avatar: {
    // type:  Schema.Types.ObjectId,
    // ref: 'profile'
    type:String,
    default: 'http://notdavidscott.com/images/collective/profilepicture.png'

    
  },
  date: {
    type: Date,
    default: Date.now
  },
  
});

module.exports = User = mongoose.model('users', UserSchema);
