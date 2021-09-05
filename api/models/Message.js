const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
      conversationId:{
          type:String,
      },
       sender:{
          type:String,
      },
       text:{
          type:String,
      },
  },
  { timestamps: true }
);
var Message;

if (mongoose.models.Message
) {
  Message= mongoose.model('Message');
} else {
  Message
 = mongoose.model('Message', MessageSchema);
}

module.exports = Message;