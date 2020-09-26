import React, { Component } from 'react'
import { Nav, NavItem, NavLink} from 'reactstrap';
import './LayoutStyles.css';

 class Footer extends Component {
    render() {
        return (
            <div>
                <div  className = 'footer_style' >
                        <Nav justified>
                            
                                <NavItem>
                                    <NavLink href="/">About</NavLink>
                                </NavItem>
                            
                           
                                <NavItem  >
                                    <NavLink href = "#">Contact Us</NavLink>
                                </NavItem>
                            
                            
                                <NavItem  >
                                    <NavLink href = "#">Policies</NavLink>
                                </NavItem>
                   
                           
                                <NavItem>
                                <NavLink href = "#">Terms and Conditions</NavLink>
                                </NavItem>
                           
                           
                                <NavItem>
                                <NavLink href = "#">Notices</NavLink>
                                </NavItem>
                            
                    
                                <NavItem>
                                <NavLink href = "#">FAQs</NavLink>
                                </NavItem>          


                                <NavItem>
                                <NavLink href = "#">Help</NavLink>
                                </NavItem>    
                        </Nav>
                </div>
                
                <div className="text-center small copyright">
                     © Crafted 2019
                </div>
            </div>    
        );
    }
}
export default Footer;