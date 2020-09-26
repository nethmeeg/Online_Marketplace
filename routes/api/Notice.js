const express = require('express');
const router = express.Router();

const Notice = require('../../models/Notice');

router.get('/', (req, res) =>{
    Notice.find()
        .then(notice => res.json(notice));
});

router.post('/', (req, res) => {

    const {noticeID, noticeTitle, noticeDesc} = req.body;

    if(!noticeID  || !noticeTitle || !noticeDesc ) {
         return res.status(400).json({ msg: 'Please enter all the requiered fields' });
    }
    Notice.findOne({ noticeID })
    .then(notice => {
         if(notice) return res.status(400).json({ msg: 'This Notice already exisit' });
    
          const newNotice = new Notice({
           noticeID,
           noticeTitle,
           noticeDesc
          });
          newNotice.save().then(notice => res.json(notice));
         })

});

module.exports = router;