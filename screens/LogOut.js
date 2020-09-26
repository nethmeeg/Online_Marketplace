import React, { Component, Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import PropTypes from 'prop-types';

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
      <Fragment>
        <NavLink style={{color:'#f1f1f1'}} onClick={this.props.logout} href='#'>
          Logout |
        </NavLink>
      </Fragment>
    );
  }
}

export default connect( null,{ logoutUser })(Logout);