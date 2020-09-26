import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {FaFileImage, FaPlusSquare} from 'react-icons/fa';
import PropTypes from 'prop-types';
import TextFieldGroup from '../components/common/TextFieldGroup';
import SelectListGroup from '../components/common/SelectListGroup';
import TextAreaFieldGroup from '../components/common/TextAreaFieldGroup';
import ImageUploader from '../components/common/ImageUploader';
import {addItem} from '../actions/itemActions';


class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          itemName: '',
          itemDesc: '',
          price: '',
          category: '',
          materials: '',
          tags: '',
          image: '',
          errors: {}
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this)
      }

    componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
        this.setState({ errors: nextProps.errors });
      }
    }

    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }

    onChangeFile(e){
        this.setState({[e.target.name]: e.target.files[0]});
    }

    onSubmit(e){
      e.preventDefault();

      const itemData ={

        itemName: this.state.itemName,
        itemDesc: this.state.itemDesc,
        price: this.state.price,
        category: this.state.category,
        materials: this.state.materials,
        tags: this.state.tags,
        image: this.state.image

      };
      this.props.addItem(itemData, this.props.history);

    }
    
    render() {

      const { errors } = this.state;

      const categories = [
        { label: 'Select the category of your item', value: 0 },
        { label: 'Home Decor & Garden', value: 'Home Decor & Garden' },
        { label: 'Jewellery & Accessories', value: 'Jewellery & Accessories' },
        { label: 'Greeting Cards', value: 'Greeting Cards' },
        { label: 'Food & Beverage', value: 'Food & Beverage' },
        { label: 'Toys & Party Items', value: 'Toys & Party Items' },
        { label: 'Galle', value: 'Galle' },
        { label: 'Eco-friendly', value: 'Eco-friendly' },
        { label: 'Other', value: 'Other' }
        
      ];



      return (
            
        <div className="add-item">
        <div className="container">
          <div className="row">
              <div className="col-md-8 m-auto">
                <Link to="/create-shop" className="btn btn-light mb-3 float-left">
                    Back To Create Shop
                </Link>
                  <h1 className="display-4 text-center" style ={{color:'#678d4c'}}><b>Add Items to Your Shop</b></h1>
                  <p className="lead text-center">
                  Let's add some handcrafted and homemade items to your shop
                  </p>
                  <small className="d-block pb-3">* = required fields</small>
                  <form onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="*Item Name"
                    name="itemName"
                    value={this.state.itemName}
                    onChange={this.onChange}
                    error={errors.itemName}
                    info="Name of your item"
                  />

                <TextAreaFieldGroup
                  placeholder="*Item Description"
                  name="itemDesc"
                  value={this.state.itemDesc}
                  onChange={this.onChange}
                  error={errors.itemDesc}
                  info="Tell us a little bit about your item"
                />

                <TextFieldGroup
                    placeholder="*Price of the Item"
                    name="price"
                    value={this.state.price}
                    onChange={this.onChange}
                    error={errors.price}
                    info="Enter the Price of your Item"
                />
                 
                  <SelectListGroup
                  name="category"
                  value={this.state.category}
                  onChange={this.onChange}
                  options={categories}
                  error={errors.category}
                  info="Select the Category to which your item belong "
                />
                
                <TextFieldGroup
                    placeholder="Materials used to create the item: paper, wool, cotton, paint... "
                    name="materials"
                    value={this.state.materials}
                    onChange={this.onChange}
                    error={errors.materials}
                    info="What are the materials used to create your item? (Please use commas to seperate)"
                  />
                  <TextFieldGroup
                    placeholder="Tags to help buyers search for your item: material, colour, usage... "
                    name="tags"
                    value={this.state.tags}
                    onChange={this.onChange}
                    error={errors.tags}
                    info="Add some tags to easy the search for your item (Please use commas to seperate)"
                  />
                  <FaFileImage size="2em"/>
                  <ImageUploader
                    
                    type= "file"
                    name= "image"
                    info= "Add a suitable image of your item"
                    onChange = {this.onChangeFile}
                    errors= {errors.image}
                  />
                   
                <input
                  type="submit"
                  value="Add Item"
                  className="btn btn-block mt-4 btn-success" />
                <Link to="/add-item" className="btn btn-block mt-4 btn-secondary" style={{color:'#f1f1f1'}}>
                    <FaPlusSquare style={{color:'#f1f1f1'}} />{' '}Add more Items
                </Link>
                </form>
              </div>
          </div>
      </div>
      </div>

        )
    }
}

AddItem.propTypes = {
    item: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    item: state.item,
    errors: state.errors
  });
  
  export default connect(mapStateToProps, { addItem })(withRouter(AddItem));
  
