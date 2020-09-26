const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Load Validation

const validateProfileInput = require('../validation/Profile');


//Load profile model
const Profile = require('../../models/Profile');

//Load user profile
const User = require('../../models/User');

router.get('/test',(req, res) => res.json({msg:'Profile Works'}));

// @route   GET api/Profile
// @desc    Get current user profile
// @access  Private
router.get('/',passport.authenticate('jwt',{session: false}),(req, res) =>{

    const errors = {};

    Profile.findOne({user: req.user.id })
        .populate('user',['firstName', 'lastName'])
        .then(Profile => {
            if(!Profile){
                errors.noprofile = 'There is no profile for this user';
                return res.status(404).json(errors);
            }
            res.json(Profile);
        })
        .catch(err => res.status(404).json(err));
});

// @route  GET api/Profile/all
// @desc   Get all profiles
// @access Public
router.get('/all', (res, req) => {

    const errors = {};
    Profile.find()
        .populate('user', ['firstName', 'lastName'])
        .then(profiles => {
            if(!profiles){

                errors.noprofile = 'There are no profiles';
                res.status(404).json(errors);
            }
            res.json(profiles);
        })
        .catch(err => res.status(404).json({profile: 'There are no profiles'}));
});

// @route  GET api/Profile/handle/:handle
// @desc   Get profile by handle
// @access Public

router.get('/handle/:handle', (req, res) => {
    const errors = {};
  
    Profile.findOne({ handle: req.params.handle })
      .populate('user', ['firstName'])
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          res.status(404).json(errors);
        }
  
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  });

// @route  GET api/Profile/user/:user_id
// @desc   Get Profile by user id
// @access Public
router.get('/user/:user_id', (res, req) => {

    const errors = {};
    Profile.findOne({user: req.prams.user_id})
        .populate('user', ['firstName', 'lastName'])
        .then(profile => {
            if(!profile){

                errors.noprofile = 'There is no profile for this user';
                res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json({profile: 'There is no profile for this user'}));
});

// @route  POST api/Profile
// @desc   Create or edit user profile
// @access  Private
router.post('/',passport.authenticate('jwt',{session: false}),(req, res) =>{

    const {errors, isValid} = validateProfileInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    //Get profile fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if(req.body.handle) profileFields.handle = req.body.handle;
    //Personal 
    profileFields.personal = {};
    if(req.body.gender) profileFields.personal.gender = req.body.gender;
    if(req.body.location) profileFields.personal.location = req.body.location;
    if(req.body.birthday) profileFields.personal.birthday = req.body.birthday;
    // Favorite materials - Spilt into array
    if (typeof req.body.fav_materials !== 'undefined') {
        profileFields.personal.fav_materials = req.body.fav_materials.split(',');
      }
    if(req.body.bio) profileFields.bio = req.body.bio;

    //Social
    profileFields.social = {};
    if(req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if(req.body.instagram) profileFields.social.instagram = req.body.instagram;
    if(req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if(req.body.youtube) profileFields.social.youtube = req.body.youtube;

    Profile.findOne({user: req.user.id}).then(profile =>{
        if(profile){

            //Update
            Profile.findOneAndUpdate(
                {user : req.user.id},
                {$set : profileFields},
                {new: true}
            ).then(profile => res.json(profile));
        }
        else{
            //Create

            //Check if the handle exist
            Profile.findOne({handle : profileFields.handle}).then(profile => {
                if(profile){

                    errors.handle ='That handle already exist';
                    res.status(400).json(errors);
                }
                //Save profile
                new Profile(profileFields).save().then(profile => res.json(profile));
            });
        }
    });
    
   
});
// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      Profile.findOneAndRemove({ user: req.user.id }).then(() => {
        User.findOneAndRemove({ _id: req.user.id }).then(() =>
          res.json({ success: true })
        );
      });
    }
  );
  

module.exports = router;