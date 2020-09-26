import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile,  deleteAccount } from '../../actions/profileActions';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';



 class Dashboard extends Component {

    componentDidMount(){

        this.props.getCurrentProfile();
    }

    onDeleteClick(e) {
        this.props.deleteAccount();
    }

    render() {
        const { user } = this.props.auth;
        const { profile, loading } = this.props.profile;

        let dashboardContent;

        if (profile === null || loading) {
            dashboardContent = <Spinner />;
        } else {
            // Check if logged in user has profile data
            if (Object.keys(profile).length > 0) {
                dashboardContent = (
                    
                        <div>
                
                            <p>Welcome <Link to={`/profile/${profile.handle}`} style ={{color:'#678d4c'}}>{user.firstName}
                            </Link></p>
                            <ProfileActions />
                            <div style={{ marginBottom: '60px' }} />
                                <button className="btn btn-secondary" onClick={this.onDeleteClick.bind(this)}>
                                Delete My Account
                                </button>
                        </div>
                )
            } else {
                // User is logged in but has no profile
                dashboardContent = (
                    <div>
                        <p >Welcome {user.firstName}</p>
                        <p>You have not yet setup a profile, please add some info</p>
                        <Button className = "btn" color="success" >
                            <Link to="/create-profile" style={{color:'#f1f1f1'}} >Create Profile</Link>
                        </Button>
                    </div>
                );
            }
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text" style ={{color:'#678d4c'}}><b>Dashboard</b></h1>
                            {dashboardContent}
                        </div> 
                    </div>
                </div> 
            </div>
        )
    }
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
  });
  
  export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
