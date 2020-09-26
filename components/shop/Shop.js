import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import  Spinner  from '../common/Spinner';
import ShopHeader from './ShopHeader';
import { getShopByName } from '../../actions/shopActions';

class Shop extends Component {
    componentDidMount() {
        if (this.props.match.params.shopName) {
          this.props.getShopByName(this.props.match.params.shopName);
        }
    }
    
  componentWillReceiveProps(nextProps) {
    if (nextProps.shop.shop === null && this.props.shop.loading) {
      this.props.history.push('/not-found');
    }
  }
    render() {
        const { shop, loading } = this.props;
        let shopContent;

    if (shop === null || loading) {
      shopContent = <Spinner />;
     } else {
      shopContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to ="/shops" className="btn btn-light mb-3 float-left">
                Back To Shops
              </Link>
            </div>
            <div className="col-md-6" />
          </div>
          <ShopHeader shop={shop} />    
        </div>   
      );
     }
    
        return (
            <div className="shop">
                <div className="container">
                    <div className="row">
                         <div className="col-md-12">{shopContent}</div>
                    </div>
                </div>
            </div>
        );
    }
}

Shop.propTypes = {

    getShopByName: PropTypes.func.isRequired,
    shop: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    shop : state.shop
});

    
export default  connect(mapStateToProps, { getShopByName })(Shop);