const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateShopInput(data){

    let errors = {};

    data.shopName = !isEmpty(data.shopName) ? data.shopName: '';
    data.shopDesc = !isEmpty(data.shopDesc) ? data.shopDesc: '';
    data.location = !isEmpty(data.location) ? data.location: '';

    if(Validator.isEmpty(data.shopName)){

        errors.shopName = 'Shop name is required';
    }
    if(Validator.isEmpty(data.shopDesc)){

        errors.shopDesc = 'Shop Description is required';
    }
    if(Validator.isEmpty(data.location)){

        errors.location = 'Your location is required';
    }
    
    return{
        errors,
        isValid : isEmpty(errors)
    };

    
};