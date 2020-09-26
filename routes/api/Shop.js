const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Load Validation

const validateShopInput = require('../validation/Shop');

//Load Shop model
const Shop = require('../../models/Shop');

router.get('/test',(req, res) => res.json({msg:'Shop Works'}));

// @route   GET api/Shop
// @desc    Get current shop
// @access  Private
router.get('/',passport.authenticate('jwt',{session: false}),(req, res) =>{

    const errors = {};

   Shop.findOne({user: req.user.id })
        .populate('user',['firstName'])
        .then(Shop => {
            if(!Shop){
                errors.noshop = 'There is no shop for this user';
                return res.status(404).json(errors);
            }
            res.json(Shop);
        })
        .catch(err => res.status(404).json(err));
});

// @route  GET api/Shop/all
// @desc   Get all shops
// @access Public
router.get('/all', (req, res) => {
  const errors = {};

  Shop.find()
    .populate('user', ['firstName'])
    .then(shops => {
      if (!shops) {
        errors.noshop = 'There are no shops';
        return res.status(404).json(errors);
      }

      res.json(shops);
    })
    .catch(err => res.status(404).json({ shop: 'There are no shops' }));
});

// @route  GET api/Shop/shopName/:shopName
// @desc   Get shop by shop name
// @access Public

router.get('/shopName/:shopName', (req, res) => {
    const errors = {};
  
    Shop.findOne({ shopName: req.params.shopName })
      .populate('user', ['firstName'])
      .then(shop => {
        if (!shop) {
          errors.noshop = 'There is no shop for this user';
          res.status(404).json(errors);
        }
  
        res.json(shop);
      })
      .catch(err => res.status(404).json(err));
  });



// @route  POST api/Shop
// @desc   Create or edit a Shop
// @access  Private
router.post('/',passport.authenticate('jwt',{session: false}),(req, res) =>{

    const {errors, isValid} = validateShopInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    //Get shop fields
    const shopFields = {};
    shopFields.user = req.user.id;
    if(req.body.shopName) shopFields.shopName = req.body.shopName;
    if(req.body.shopDesc) shopFields.shopDesc = req.body.shopDesc;
    if(req.body.location) shopFields.location = req.body.location;
    if(req.body.contactNo) shopFields.contactNo = req.body.contactNo;

    Shop.findOne({user: req.user.id}).then(shop =>{
        if(shop){

            //Update
            Shop.findOneAndUpdate(
                {user : req.user.id},
                {$set : shopFields},
                {new: true}
            ).then(shop => res.json(shop));
        }
        else{
            //Create

            //Check if the name exist
           Shop.findOne({shopName : shopFields.shopName}).then(shop => {
                if(shop){

                    errors.shopName ='That Shop name already exist';
                    res.status(400).json(errors);
                }
                //Save profile
                new Shop(shopFields).save().then(shop => res.json(shop));
            });
        }
    });    
});
  
// @route   DELETE api/Shop
// @desc    Delete your Shop
// @access  Private
router.delete(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      Shop.findOneAndRemove({ user: req.user.id }).then(() => {
        
          res.json({ success: true })
      });
    }
  );
  

module.exports = router;