const express = require('express');
const router = express.Router();

const Message = require('../../models/Message');

router.get('/', (req, res) =>{
    Message.find()
        .then(message => res.json(message));
});

router.post('/', (req, res) => {

    const {receiverID, messageBody} = req.body;

    if(!receiverID ) {
         return res.status(400).json({ msg: 'Please enter the receiver' });
    }
    if(!messageBody ) {
        return res.status(400).json({ msg: 'This message is empty' });
   }
   Message.findOne()
   .then(message => {
         const newMessage = new Message({
           receiverID,
           messageBody
         });
         newMessage.save().then(message => res.json(message));
        })

});

module.exports = router;