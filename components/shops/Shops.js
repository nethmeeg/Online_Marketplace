import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  Spinner  from '../common/Spinner';
import ShopCard from './ShopCard';
import { getShops } from '../../actions/shopActions';

class Shops extends Component {
  componentDidMount() {
    this.props.getShops();
  }

  render() {
    const { shops, loading } = this.props.shop;
    let shopCards;

    if (shops === null || loading) {
      shopCards = <Spinner />;
    } else {
      if (shops.length > 0) {
        shopCards = shops.map(shop => (
          <ShopCard key={shop._id} shop={shop} />
        ));
      } else {
        shopCards = <h4>No shops found...</h4>;
      }
    }

    return (
      <div className="shops">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center" style ={{color:'#678d4c'}}><b>Shops at Crafted</b></h1>
              <p className="lead text-center">
                Browse and connect with sellers
              </p>
              {shopCards}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Shops.propTypes = {
  getShops: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  shop: state.shop
});

export default connect(mapStateToProps, { getShops })(Shops);
