const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OfferSchema = new Schema({
  itemID: {
    type: Schema.Types.ObjectId, 
    ref: 'item',
    required: true
  },
  offerRate: {
    type: String,
    required: true
  
  },
  conditions: {
    type: String
   
  },
  start_date: {
    type: Date,
    default: Date.now,
    required: true
  },
  end_date:{
      type: Date,
      required:true
  }
});

module.exports = Offer = mongoose.model('offer', OfferSchema);