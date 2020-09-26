import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {GiShop} from 'react-icons/gi';


class ShopCard extends Component {
  render() {
    const { shop } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <GiShop style ={{color:'#678d4c'}} size='8em'/>
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{shop.shopName}</h3>
            <p>
              <span>{shop.shopDesc}</span>{' '}
            </p>
            <p>
                <span>{shop.location}</span>
        
            </p>
            <Link to={`/shop/${shop.shopName}`} className="btn btn-success">
              View Shop
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

ShopCard.propTypes = {
  shop: PropTypes.object.isRequired
};

export default ShopCard;
