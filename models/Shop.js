const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ShopSchema = new Schema({
  
  shopOwner:{
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: false

  },
  shopName: {
    type: String,
    required: true,
    unique: true
  },
  shopDesc: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  contactNo:{
    type: String,
    required:false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Shop = mongoose.model('shop', ShopSchema);