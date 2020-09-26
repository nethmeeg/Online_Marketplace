const express = require('express');
const router = express.Router();

const Offer = require('../../models/Offer');

router.get('/', (req, res) =>{
    Offer.find()
        .then(offer => res.json(offer));
});

router.post('/', (req, res) => {

    const {itemID, offerRate, end_date} = req.body;

    if(!itemID ) {
        return res.status(400).json({ msg: 'Please enter the Item' });
   }
    if(!offerRate ) {
         return res.status(400).json({ msg: 'Please enter the Offer Rate' });
    }
    if(!end_date ) {
        return res.status(400).json({ msg: 'When will this Offer end' });
   }
   Offer.findOne()
   .then(offer => {
         const newOffer = new Offer({
            itemID,
            offerRate,
            end_date
         });
         newOffer.save().then(offer => res.json(offer));
        })

});

module.exports = router;