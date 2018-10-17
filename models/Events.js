const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const EventsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  who: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  when: {
    type: Date,
    required: true
  },
  time: {
      type: String,
      required: true
  },
  to: {
      type: String
  },
  where: {
    type: String,
    required: true
  },
  childcare: {
      type: String,
      required: true
  },
  kidfriendly: {
      type: String,
      required: true
  },
  admission: {
      type: String
  },
  title: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  going: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
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

module.exports = Event = mongoose.model("event", EventsSchema);
