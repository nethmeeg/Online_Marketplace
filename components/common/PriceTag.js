import React from 'react';

import './CompoStyles.scss';

class PriceTag extends React.Component {
  render() {
    let {
      price
    } = this.props;

    return (
      <div className='price-tag'>
	{price}
      </div>
    );
  }
}

export default PriceTag;