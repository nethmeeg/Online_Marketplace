const express = require('express');
const router = express.Router();

const Order = require('../../models/Order');

router.get('/', (req, res) =>{
    Order.find()
        .sort({placed_date: 1})
        .then(order => res.json(order));
});

router.post('/', (req, res) => {

    const {orderID,orderStatus, quantity, completion_date } = req.body;

    if(!orderID  || !quantity || !completion_date) {
         return res.status(400).json({ msg: 'Please enter all the requiered fields' });
    }
    Order.findOne({ orderID })
    .then(order => {
         if(order) return res.status(400).json({ msg: 'This Order already exisit' });
    
          const newOrder = new Order({
            orderID,
            orderStatus,
            quantity,
            completion_date
          });
          newOrder.save().then(order => res.json(order));
         })

});

module.exports = router;