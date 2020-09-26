const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const ItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  itemName: {
    type: String,
    required: true,
    unique: true
  },
  itemDesc: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  materials: {
    type: [String],
    required: false
  },
  tags:{
    type: [String],
    required: false
  },
  image:{
    type: String
  },
  category:{
    type: String,
    required: false
  },
  added_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Item = mongoose.model('item', ItemSchema);