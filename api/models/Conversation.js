const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
      members:{
          type:Array,
      },
  },
  { timestamps: true }
);
var Conversation;

if (mongoose.models.Conversation) {
  Conversation = mongoose.model('Conversation');
} else {
  Conversation = mongoose.model('Conversation', ConversationSchema);
}

module.exports = Conversation;
