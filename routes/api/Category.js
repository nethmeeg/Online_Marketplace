const express = require('express');
const router = express.Router();

const Category = require('../../models/Category');

router.get('/', (req, res) =>{
    Category.find()
        .then(categories => res.json(categories));
});

router.post('/', (req, res) => {

    const {categoryID, category} = req.body;

    if(!categoryID  || !category ) {
         return res.status(400).json({ msg: 'Please enter all the requiered fields' });
    }
    Category.findOne({ categoryID })
    .then(categories => {
         if(categories) return res.status(400).json({ msg: 'This Category already exisit' });
    
          const newCategory = new Category({
           categoryID,
           category
          });
          newCategory.save().then(categories => res.json(categories));
         })

});

module.exports = router;