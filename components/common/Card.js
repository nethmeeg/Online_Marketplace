import React from 'react';
import classnames from 'classnames';

import './CompoStyles.scss';

class Card extends React.Component {
  
  render() {
    let {
      className
    } = this.props;
    return (
      <div className={classnames("card", className)}>
	{this.props.children}
      </div>
    );
  }
}

export default Card;