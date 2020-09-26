import React, { Component } from 'react'
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

 class ProfileAbout extends Component {
    render() {
        const { profile } = this.props;

        return (
            <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center" style ={{color:'#678d4c'}}>{profile.user.firstName}'s Bio</h3>
            <p className="lead">
              {isEmpty(profile.bio) ? (
                <span>{profile.user.firstName} does not have a bio</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </p>
            <hr />
          </div>
        </div>
      </div>
    );
        
    }
}

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
    
  };
  
export default ProfileAbout;