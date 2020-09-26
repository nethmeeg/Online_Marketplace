const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateProfileInputs(data){

    let errors = {};

    data.handle = !isEmpty(data.handle) ? data.handle: '';
    data.location = !isEmpty(data.location) ? data.location: '';
    data.gender = !isEmpty(data.gender) ? data.gender: '';
    data.birthday = !isEmpty(data.birthday) ? data.birthday: '';

    if(!Validator.isLength(data.handle, {min: 2, max: 40})){

        errors.handle = 'Handle should be between 2 to 40 characters';
    }
    if(Validator.isEmpty(data.handle)){

        errors.handle = 'Profile handle is required';
    }
    if(Validator.isEmpty(data.location)){

        errors.location = 'Your location is required';
    }
    if(Validator.isEmpty(data.gender)){

        errors.gender = 'Your gender is required';
    }
    if(Validator.isEmpty(data.birthday)){

        errors.birthday = 'Your Date of birth is required';
    }

    if(!isEmpty(data.facebook)){
        if(!Validator.isURL(data.facebook)){
            errors.facebook = 'Not a valid URL';
        }
    }

    if(!isEmpty(data.instagram)){
        if(!Validator.isURL(data.instagram)){
            errors.instagram = 'Not a valid URL';
        }
    }

    if(!isEmpty(data.twitter)){
        if(!Validator.isURL(data.twitter)){
            errors.twitter = 'Not a valid URL';
        }
    }

    if(!isEmpty(data.youtube)){
        if(!Validator.isURL(data.youtube)){
            errors.youtube = 'Not a valid URL';
        }
    }
    
    return{
        errors,
        isValid : isEmpty(errors)
    };

    
};