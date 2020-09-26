import React, { Component, Fragment } from 'react';
import {
  Navbar,
  Nav,
  NavLink,
  NavItem, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from './logo.png';
import {MdSearch} from 'react-icons/md';
import {FaUserCircle} from 'react-icons/fa';
import './LayoutStyles.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../actions/authActions';
import {clearCurrentProfile} from '../../actions/profileActions';


class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
  
    render() {
       const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment> 
        <NavItem>
          <NavLink>
            <Link to ="/post-feed" style={{color:'#f1f1f1'}}> Post Feed |</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to ="/dashboard" style={{color:'#f1f1f1'}}> {user.firstName}'s Dashboard |</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link
            to = "/home"
            style={{color:'#f1f1f1'}}
            onClick={this.onLogoutClick.bind(this)}>
            Logout
            </Link>
            </NavLink>
          </NavItem>
          <div style={{color:'#f1f1f1'}}> 
          <FaUserCircle size='2em'/>
           </div>{' '}
      </Fragment>
      
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <NavLink>
            <Link to ="/signUp" style={{color:'#f1f1f1'}}>SignUp |</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
              <Link to ="/logIn" style={{color:'#f1f1f1'}}>LogIn |</Link>
            </NavLink>
        </NavItem>
      </Fragment>
    ); 
      
      return (
        <div>
          <Navbar className="header_style" expand="md">
            <h1 className ="heading_style">Crafted</h1> {' '}
            <img src = {logo} alt = "Logo" height = "80" width = "80"/> 
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>  
                  <Link to="/" style={{color:'#f1f1f1'}}>Home | </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to ="/shops" style={{color:'#f1f1f1'}}>Shops |</Link>
                </NavLink>
              </NavItem>
              {isAuthenticated ? authLinks : guestLinks}
            </Nav>
          </Navbar>

          <Navbar className="header_style" expand="md">
            <Nav>
              <InputGroup>
                <Input type = "text" placeholder = "Search..."  />
                    <Input 
                      addonType="append"
                      type = "select" >
                          <option>All Categories</option>
                          <option >Home Decor/Garden</option>
                          <option>Jewellery/Accessories</option>
                          <option>Greeting Cards</option>
                          <option>Food/Beverages</option>
                          <option>Toys/Party Items</option>
                          <option>Go Green</option>
                          <option>Other</option>
                        </Input>
                    <Input 
                      addonType="append" 
                      type = "select">
                         <option>All Shops</option>
                          <option>Shop 1</option>
                          <option>Shop 2</option>
                          <option>Shop 3</option>
                          <option>Shop 4</option>
                          <option>Shop 5</option>
                      </Input>
                    
                  <InputGroupAddon addonType="append">
                    <Button color = "success" style = {{flex:'1'}} size="sm"><MdSearch size="2em"/></Button>
                  </InputGroupAddon>
              </InputGroup>
            </Nav>      
          </Navbar> 
          <Navbar style = {{background: '#f1f1f1',padding:'8px'}} expand="md">
            <Nav>
              <NavItem>
                <NavLink>
                <Link to="/homeDecor"  className= "btn btn-secondary btn-lg" style={{color:'#f1f1f1'}}>
                    Home Decor and Garden
                 </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                    <Link to="/jewellery"  className= "btn btn-secondary btn-lg" style={{color:'#f1f1f1'}}>
                    Jewellery and Accessories
                    </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                    <Link to="/greetingCards"  className= "btn btn-secondary btn-lg" style={{color:'#f1f1f1'}}>
                    Greeting Cards
                    </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                    <Link to="/food-beverages"  className= "btn btn-secondary btn-lg" style={{color:'#f1f1f1'}}>
                    Food and Beverages
                    </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                    <Link to="/toys-partItems"  className= "btn btn-secondary btn-lg" style={{color:'#f1f1f1'}}>
                    Toys and Party Items
                    </Link>
                </NavLink> 
              </NavItem>
              <NavItem>
                <NavLink>
                    <Link to="/ecofriendly"  className= "btn btn-secondary btn-lg" style={{color:'#f1f1f1'}}>
                    Eco-friendly
                    </Link>
                </NavLink> 
              </NavItem>
            </Nav>
          </Navbar>
        </div>
        
          
        
      );
    }
  }
  Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Header);
  
