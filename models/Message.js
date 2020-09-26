const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MessageSchema = new Schema({
  receiverID: {
    type: Schema.Types.ObjectId, 
    ref: 'user',
    required: true

  },
  messageTitle: {
    type: String
  
  },
  messageBody: {
    type: String,
    required: true
  },

  sent_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Message = mongoose.model('message', MessageSchema);