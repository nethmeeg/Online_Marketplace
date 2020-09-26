const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegisterInputs(data){

    let errors = {};

    data.email = !isEmpty(data.email) ? data.email: '';
    data.firstName = !isEmpty(data.firstName) ? data.firstName: '';
    data.lastName = !isEmpty(data.lastName) ? data.lastName: '';
    data.password = !isEmpty(data.password) ? data.password: '';
    data.password2 = !isEmpty(data.password2) ? data.password2: '';

    if(!Validator.isLength(data.firstName,{min: 2, max: 30})){

        errors.firstName = 'First Name must be between 2 to 30 characters';
    }

    if(Validator.isEmpty(data.firstName)){
        errors.firstName = 'First Name field is required';
    }

    if(Validator.isEmpty(data.lastName)){
        errors.lastName = 'Last Name field is required';
    }

    if(Validator.isEmpty(data.email)){
        errors.email = 'Email field is required';
    }

    if(!Validator.isEmail(data.email)){
        errors.email = 'Email is not valid';
    }

    if(Validator.isEmpty(data.password)){
        errors.password = 'Password field is required';
    }

    if(!Validator.isLength(data.password,{min: 6, max: 30})){
        errors.password= 'Password must be of atleast 6 characters';
    }

    if(Validator.isEmpty(data.password2)){
        errors.password2 = 'Confirm password field is required';
    }

    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = 'Enter the same password';
    }

    return{
        errors,
        isValid : isEmpty(errors)
    };

    
};