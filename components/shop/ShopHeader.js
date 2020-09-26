import React, { Component } from 'react';
import { GiShop } from 'react-icons/gi';
import isEmpty from '../../validation/is-empty'

 class ShopHeader extends Component {
    render() {
        const {shop} = this.props
        return (
            <div className="row">
            <div className="col-md-12">
             <div className="card card-body text-white mb-3" style ={{backgroundColor:'#678d4c'}} >
             <div className="row">
              <div className="col-4 col-md-2 m-auto">
              <GiShop style={{color:'#f1f1f1'}} size = '8em'/>
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{shop.shopName}</h1>
              
              {isEmpty(shop.shopDesc) ? null : <p>{shop.shopDesc}</p>}
              
            </div>
          </div>
        </div>
      </div>
    );
    }
}

export default ShopHeader;