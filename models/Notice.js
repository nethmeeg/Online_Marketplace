const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const NoticeSchema = new Schema({

  userID:{
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: false
  },
    noticeID: {
    type: String,
    required: true,
    unique: true
  },
  noticeTitle: {
    type: String,
    required: true
  },
  noticeDesc: {
    type: String,
    required: true
  },
  post_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Notice = mongoose.model('notice', NoticeSchema);