import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class ItemCard extends Component {
  render() {
    const { item } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <i>{item.image}</i>
          </div>
          <div className="col-lg-6 col-md-2 col-8">
            <h3>{item.itemName}</h3>
            <p>
              <span>{item.itemDesc}</span>{' '}
            </p>
            <p>
                <span>{item.price}</span>
        
            </p>
            <Link to={`/item/${item.itemName}`} className="btn btn-success">
              View Item
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

ItemCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default ItemCard;