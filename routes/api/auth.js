const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const User = require('../../models/User');

router.post('/', (req, res) => {


    const email = req.body.email;
    const password  = req.body.password;

//Validation
    if(!email  || !password) {
         return res.status(400).json({ msg: 'Please enter all fields' });
    }
        
          // Check for existing user
    User.findOne({ email })
        .then(user => {
             if(!user){
               return res.status(404).json({ email : 'User does not exist' });
             }
              // Validate password
              bcrypt.compare(password, user.password)
                    .then(isMatch => {
                      if(isMatch) {
                        const payload = {id : user.id};
                        jwt.sign(
                          payload,
                          config.get('jwtSecret'),
                          { expiresIn: 3600 },
                          (err, token) => {
                            res.json({
                              success: true,
                              token : 'Bearer' + token,
                              user: {
                                id: user.id,
                                email: user.email,
                                firstName: user.firstName,
                                lastName: user.lastName
                              }
                            });

                          });
                      }
                      else{
                        return res.status(400).json({password : 'Password Incorrect'})
                      }
                      
                 })
             
        })
   
});
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
      .select('-password')
      .then(user => res.json(user));
  });
  

module.exports = router;