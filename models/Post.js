const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

//Each post will have text as well as their name and avater
//If user decides to delete their account, posts and comments
//will not be deleted. This is why it is not populated from avatar with name
//from user, post itself will also have a date.

//each post will have name and avatar auto this will be automatically

//likes: will link to each user who made the like, userdi will go into an array, 
//if they dislike user id will be removed.

//comments will also have user associated with it, will also use name and avatar
//will also have a date


const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String 
    },
    avatar: {
        type: String 
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
          text: {
              type: String,
              required: true
          },
          name: {
              type: String 
          },
          avatar: {
              type: String 
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