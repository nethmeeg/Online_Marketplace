import React from 'react';
import { Link } from 'react-router-dom';
import {GiShop} from 'react-icons/gi';
import {FaUserCircle, FaShoppingCart} from 'react-icons/fa';


const ProfileActions = () => {
  
  return (
    <div className="btn-group mb-4" role="group">

      <Link to="/edit-profile" className="btn btn-success" style={{color:'#f1f1f1'}}>
        <FaUserCircle style={{color:'#f1f1f1'}} />{' '}Edit Profile
      </Link>
      <Link to="/create-shop" className="btn btn-success" style={{color:'#f1f1f1'}}>
        <GiShop style={{color:'#f1f1f1'}} />{' '}
        Create Shop
      </Link>
      <Link to="/orders" className="btn btn-success" style={{color:'#f1f1f1'}}>
        <FaShoppingCart style={{color:'#f1f1f1'}} />{' '}
        Orders
      </Link>
    </div>
  );
};

export default ProfileActions;
