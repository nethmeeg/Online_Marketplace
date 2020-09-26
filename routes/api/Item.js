const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const multer = require('multer')

// Load Validation
const validateItemInput = require('../validation/Item');

// Load Profile Model
const Item = require('../../models/Item');

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/');
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ){
    cb(null, true);
  }else{
    cb(null, false);
  }
}

const upload = multer({
  storage: storage,
  limits:{
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});



// @route   GET api/Item/test
// @desc    Tests Item route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Item Works' }));

// @route   GET api/Item
// @desc    Get current item
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};

    Item.findOne({ user: req.user.id })
      .populate('user', ['firstName'])
      .then(item => {
        if (!item) {
          errors.noitem = 'There is no items by this user';
          return res.status(404).json(errors);
        }
        res.json(item);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   GET api/Item/all
// @desc    Get all items
// @access  Public
router.get('/all', (req, res) => {
  const errors = {};

  Item.find()
    .populate('user', ['firstName'])
    .then(items => {
      if (!items) {
        errors.noitem = 'There are no items';
        return res.status(404).json(errors);
      }

      res.json(items);
    })
    .catch(err => res.status(404).json({ item: 'There are no items' }));
});

// @route   GET api/Item/itemName/:itemName
// @desc    Get item by item name
// @access  Public

router.get('/itemName/:itemName', (req, res) => {
  const errors = {};

  Item.findOne({ itemName: req.params.itemName })
    .populate('user', ['firstName'])
    .then(item => {
      if (!item) {
        errors.noitem = 'There is no item in this shop';
        res.status(404).json(errors);
      }

      res.json(item);
    })
    .catch(err => res.status(404).json(err));
});


// @route   POST api/Item
// @desc    Add item details
// @access  Private
router.post(
  '/',
  upload.single('image'),
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateItemInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const itemFields = {};
    itemFields.user = req.user.id;
    if (req.body.itemName) itemFields.itemName = req.body.itemName;
    if (req.body.itemDesc) itemFields.itemDesc = req.body.itemDesc;
    if (req.body.price) itemFields.price = req.body.price;
    if (req.body.category) itemFields.category = req.body.category;
    //if (req.file.path) itemFields.image = req.file.path;
    
    // materials - Spilt into array
    if (typeof req.body.materials !== 'undefined') {
      itemFields.materials = req.body.materials.split(',');
    }

    // tags - Spilt into array
    if (typeof req.body.tags !== 'undefined') {
      itemFields.tags = req.body.tags.split(',');
    }

    Item.findOne({ user: req.user.id }).then(item => {
      if (item) {
        // Update
        Item.findOneAndUpdate(
          { user: req.user.id },
          { $set: itemFields },
          { new: true }
        ).then(item => res.json(item));
      } else {
        // Create

          // Save Profile
          new Item(itemFields).save().then(item => res.json(item));
        
      }
    });
  }
);

// @route   DELETE api/Item
// @desc    Delete item
// @access  Private
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Item.findOneAndRemove({ user: req.user.id }).then(() => {
        res.json({ success: true })
      
    });
  }
);

module.exports = router;
