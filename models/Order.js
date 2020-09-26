const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = new Schema({
  orderID: {
    type: String,
    required: true,
    unique: true
  },
  userID:{
    type:Schema.Types.ObjectId,
    ref: 'user',
    required: false
  },
  itemID:{
    type: Schema.Types.ObjectId,
    ref: 'item',
    required: false
  },
  orderStatus: {
    type: String,
    default: "Incomplete"
  },
  quantity: {
    type: String,
    required: true
  },
  placed_date:{
    type: Date,
    default: Date.now
  },
  completion_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Order = mongoose.model('order', OrderSchema);