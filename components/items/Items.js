import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  Spinner  from '../common/Spinner';
import ItemCard from './ItemCard';
import { getItems } from '../../actions/itemActions';

class Items extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items, loading } = this.props.item;
    let itemCards;

    if (items === null || loading) {
      itemCards = <Spinner />;
    } else {
      if (items.length > 0) {
        itemCards = items.map(item => (
          <ItemCard key={item._id} item={item} />
        ));
      } else {
        itemCards = <h4>No items found...</h4>;
      }
    }

    return (
      <div className="items">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center" style ={{color:'#678d4c'}}><b>Items at Crafted</b></h1>
              <p className="lead text-center">
                Browse and order your favorite Items
              </p>
              {itemCards}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Items.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems })(Items);
