const mongoose = require("mongoose");

const ConnectionSchema = new mongoose.Schema(
  {
    email:{
          type:String,
         
      },
  },
  { timestamps: true }
);
var Connection;

if (mongoose.models.Connection) {
  mongoose.Connection = mongoose.model('Connection');
} else {
  Connection = mongoose.model('Connection', ConnectionSchema);
}

module.exports = Connection;