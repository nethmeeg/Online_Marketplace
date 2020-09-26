import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { GiShop } from 'react-icons/gi';
import placeholder_img from './person-placeholder.jpg';

 class ProfileHeader extends Component {
    render() {
        const {profile} = this.props
        return (
            <div className="row">
            <div className="col-md-12">
             <div className="card card-body text-white mb-3" style ={{backgroundColor:'#678d4c'}} >
             <div className="row">
              <div className="col-4 col-md-2 m-auto">
                <img className="rounded-circle" src={placeholder_img} alt=" " height = "100" width = "100" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{profile.user.firstName}</h1>
              {isEmpty(profile.personal.location) ? null : <p>{profile.personal.location}</p>}
              <p>
                {isEmpty(profile.shop) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.shop}
                   
                  >
                      <GiShop/>
                    
                  </a>
                )}

                {isEmpty(profile.social && profile.social.twitter) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.twitter}
                    
                  >
                      <FaTwitter/>
                    
                  </a>
                )}

                {isEmpty(profile.social && profile.social.facebook) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.facebook}
                    
                  >
                      <FaFacebook/>
                    
                  </a>
                )}


                {isEmpty(profile.social && profile.social.youtube) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.youtube}
                   
                  >
                      <FaYoutube/>
                   
                  </a>
                )}

                {isEmpty(profile.social && profile.social.instagram) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.instagram}
                   
                  >
                      <FaInstagram/>
                    
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
    }
}
export default ProfileHeader;