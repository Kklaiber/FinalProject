const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  community: {
    type: String,
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: Schema.Types.ObjectId,
        ref: 'profiles'
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      community: {
        type: String,
       
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: Schema.Types.ObjectId,
        ref: 'profiles'
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
