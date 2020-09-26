import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {FaPlusSquare} from 'react-icons/fa';
import './Styles.css';
import PropTypes from 'prop-types';
import TextFieldGroup from '../components/common/TextFieldGroup';
import SelectListGroup from '../components/common/SelectListGroup';
import TextAreaFieldGroup from '../components/common/TextAreaFieldGroup';
import {createShop} from '../actions/shopActions';


class CreateShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
          shopName: '',
          shopDesc: '',
          location: '',
          contactNo: '',
          errors: {}
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

    componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
        this.setState({ errors: nextProps.errors });
      }
    }

    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
      e.preventDefault();

      const shopData ={

        shopName: this.state.shopName,
        shopDesc: this.state.shopDesc,
        location: this.state.location,
        contactNo: this.state.contactNo,
        
      };
      this.props.createShop(shopData, this.props.history);

    }
    
    render() {

      const { errors } = this.state;



      const options = [
        { label: '* Select your shop location', value: 0 },
        { label: 'Ampara', value: 'Ampara' },
        { label: 'Anuradhapura', value: 'Anuradhapura' },
        { label: 'Badulla', value: 'Badulla' },
        { label: 'Batticaloa', value: 'Batticaloa' },
        { label: 'Colombo', value: 'Colombo' },
        { label: 'Galle', value: 'Galle' },
        { label: 'Gampaha', value: 'Gampaha' },
        { label: 'Hambantota', value: 'Hambantota' },
        { label: 'Jaffna', value: 'Jaffna' },
        { label: 'Kalutara', value: 'Kalutara' },
        { label: 'Kandy', value: 'Kandy' },
        { label: 'Kegalle', value: 'Kegalle' },
        { label: 'Kilinochchi', value: 'Kilinochchi' },
        { label: 'Mannar', value: 'Mannar' },
        { label: 'Matale', value: 'Matale' },
        { label: 'Matara', value: 'Matara' },
        { label: 'Monaragala', value: 'Monaragala' },
        { label: 'Mulaitivu', value: 'Mulaitivu' },
        { label: 'Nuwara Eliya', value: 'Nuwara Eliya' },
        { label: 'Polonnaruwa', value: 'Polonnaruwa' },
        { label: 'Puttlum', value: 'Puttlum' },
        { label: 'Rathnapura', value: 'Rathnapura' },
        { label: 'Trincomalee', value: 'Trincomalee' },
        { label: 'Vavuniya', value: 'Vavuniya' }
        
      ];



      return (
            
        <div className="create-shop">
        <div className = "shopfront_banner">Millions of Buyers are waiting to buy your Products</div>
        <div className="container">
          <div className="row">
              <div className="col-md-8 m-auto">
                  <Link to="/dashboard" className="btn btn-light mb-3 float-left">
                    Back To Dashboard
                  </Link>
                  <h1 className="display-4 text-center" style ={{color:'#678d4c'}}><b>Create Your Shop</b></h1>
                  <small className="d-block pb-3">* = required fields</small>
                  <form onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="* Shop Name"
                    name="shopName"
                    value={this.state.shopName}
                    onChange={this.onChange}
                    error={errors.shopName}
                    info="A catchy name for your shop to impress buyers"
                  />
                 <TextAreaFieldGroup
                  placeholder="Shop Description"
                  name="shopDesc"
                  value={this.state.shopDesc}
                  onChange={this.onChange}
                  error={errors.shopDesc}
                  info="Tell us a little about your shop or what made you start your own shop"
                />

                  <SelectListGroup
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  options={options}
                  error={errors.location}
                  info="Select your the location of your shop "
                />
                <small className="d-block pb-3">optional</small>
                <TextFieldGroup
                    placeholder="Contact Number"
                    name="contactNo"
                    value={this.state.contactNo}
                    onChange={this.onChange}
                    error={errors.contactNo}
                    info="If you want the buyers to contact you, add your contact number"
                />
                <Link to="/add-item" className="btn btn-secondary" style={{color:'#f1f1f1'}}>
                    <FaPlusSquare style={{color:'#f1f1f1'}} />{' '}Add Items to your Shop
                </Link>

                <input
                  type="submit"
                  value="Create Your Shop"
                  className="btn btn-block mt-4 btn-success" />
                </form>
              </div>
          </div>
      </div>
      </div>

        )
    }
}

CreateShop.propTypes = {
    shop: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    shop: state.shop,
    errors: state.errors
  });
  
  export default connect(mapStateToProps, { createShop })(withRouter(CreateShop));
  

