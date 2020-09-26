import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaInstagram } from 'react-icons/fa';
import PropTypes from 'prop-types';
import TextFieldGroup from '../components/common/TextFieldGroup';
import SelectListGroup from '../components/common/SelectListGroup';
import TextAreaFieldGroup from '../components/common/TextAreaFieldGroup';
import {createProfile, getCurrentProfile} from '../actions/profileActions';
import isEmpty from '../validation/is-empty';


class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          displaySocialInputs: false,
          handle: '',
          gender: '',
          location: '',
          birthday: '',
          fav_materials: '',
          bio: '',
          twitter: '',
          facebook: '',
          youtube: '',
          instagram: '',
          errors: {}
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    componentDidMount(){

        this.props.getCurrentProfile();
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
        this.setState({ errors: nextProps.errors });
      }
      if(nextProps.profile.profile){
          const profile = nextProps.profile.profile;

          
          //If profile field does not exist make empty string
          //personal information
          profile.personal = !isEmpty(profile.personal) ? profile.personal : {};
          profile.gender = !isEmpty(profile.personal.gender) ? profile.personal.gender : '';
          profile.location = !isEmpty(profile.personal.location) ? profile.personal.location : '';
          profile.birthday = !isEmpty(profile.personal.birthday) ? profile.personal.birthday : '';

          // Bring fav_materials array back to CSV
          const fav_materialsCSV = profile.personal.fav_materials.join(',');


          profile.bio = !isEmpty(profile.bio) ? profile.bio : '';

          //social inputs
          profile.social = !isEmpty(profile.social) ? profile.social : {};
          profile.twitter = !isEmpty(profile.social.twitter) ? profile.social.twitter : '';
          profile.facebook = !isEmpty(profile.social.facebook) ? profile.social.facebook : '';
          profile.youtube = !isEmpty(profile.social.youtube)? profile.social.youtube : '';
          profile.instagram = !isEmpty(profile.social.instagram) ? profile.social.instagram : '';

          //Set componet field state
          this.setState({
              handle: profile.handle,
              gender: profile.gender,
              location: profile.location,
              birthday: profile.birthday,
              fav_materials: fav_materialsCSV,
              bio: profile.bio,
              twitter: profile.twitter,
              facebook: profile.facebook,
              youtube: profile.youtube,
              instagram: profile.instagram
          });
      }
    }

    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
      e.preventDefault();

      const profileData ={

        handle: this.state.handle,
        gender: this.state.gender,
        location: this.state.location,
        birthday: this.state.birthday,
        fav_materials: this.state.fav_materials,
        bio: this.state.bio,
        twitter: this.state.twitter,
        facebook: this.state.facebook,
        youtube: this.state.youtube,
        instagram: this.state.instagram

      };
      this.props.createProfile(profileData, this.props.history);

    }
    
    render() {

      const { errors, displaySocialInputs } = this.state;

      let socialInputs;

      if (displaySocialInputs) {
        socialInputs = (
          <div >
              <FaTwitterSquare size="2em"/>
              <TextFieldGroup
                placeholder="Twitter Profile URL"
                name="twitter"
                value={this.state.twitter}
                onChange={this.onChange}
                error={errors.twitter}

              />
              <FaFacebookSquare size="2em"/>
              <TextFieldGroup
                  placeholder="FaceBook Page URL"
                  name="facebook"
                  value={this.state.facebook}
                  onChange={this.onChange}
                  error={errors.facebook}

                />
              
              <FaYoutubeSquare size="2em"/>
              <TextFieldGroup
                  placeholder="YouTube Channel URL"
                  name="youtube"
                  value={this.state.youtube}
                  onChange={this.onChange}
                  error={errors.youtube}

                />
              <FaInstagram size="2em"/>
              <TextFieldGroup
                  placeholder="Instagram Page URL"
                  name="instagram"
                  value={this.state.instagram}
                  onChange={this.onChange}
                  error={errors.instagram}

                />
          </div>
        );
      }

      const options = [
        { label: '* Select your location/hometown/shop location', value: 0 },
        { label: 'Ampara', value: 'Ampara' },
        { label: 'Anuradhapura', value: 'Anuradhapura' },
        { label: 'Badulla', value: 'Badulla' },
        { label: 'Batticaloa', value: 'Batticaloa' },
        { label: 'Colombo', value: 'Colombo' },
        { label: 'Galle', value: 'Galle' },
        { label: 'Gampaha', value: 'Gampaha' },
        { label: 'Hambantota', value: 'Hambantota' },
        { label: 'Jaffna', value: 'Jaffna' },
        { label: 'Kalutara', value: 'Kalutara' },
        { label: 'Kandy', value: 'Kandy' },
        { label: 'Kegalle', value: 'Kegalle' },
        { label: 'Kilinochchi', value: 'Kilinochchi' },
        { label: 'Mannar', value: 'Mannar' },
        { label: 'Matale', value: 'Matale' },
        { label: 'Matara', value: 'Matara' },
        { label: 'Monaragala', value: 'Monaragala' },
        { label: 'Mulaitivu', value: 'Mulaitivu' },
        { label: 'Nuwara Eliya', value: 'Nuwara Eliya' },
        { label: 'Polonnaruwa', value: 'Polonnaruwa' },
        { label: 'Puttlum', value: 'Puttlum' },
        { label: 'Rathnapura', value: 'Rathnapura' },
        { label: 'Trincomalee', value: 'Trincomalee' },
        { label: 'Vavuniya', value: 'Vavuniya' }
        
      ];

      const gender = [
         {label:'*Select Gender', value: 0},
         {label: 'Male', value: 'Male'},
         {label: 'Female', value: 'Female'}
       ];


      return (
            
        <div className="create-profile">
        <div className="container">
          <div className="row">
              <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center" style ={{color:'#678d4c'}}><b>Edit Your Profile</b></h1>
                  <form onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="* Profile Handle"
                    name="handle"
                    value={this.state.handle}
                    onChange={this.onChange}
                    error={errors.handle}
                    info="A unique handle for your profile URL. Your full name or nickname"
                  />
                  
                 <SelectListGroup
                  name="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                  options={gender}
                  error={errors.gender}
                /> 
                  <SelectListGroup
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  options={options}
                  error={errors.location}
                  info="Select your hometown or the location of your shop "
                />
                <TextFieldGroup
                    type="Date"
                    placeholder="*Date of Birth"
                    name="birthday"
                    value={this.state.birthday}
                    onChange={this.onChange}
                    error={errors.birthday}
                    info="Enter your date of birth"
                />
                <TextFieldGroup
                    placeholder="Favourite Materials: paper, wool, cotton, paint "
                    name="fav_materials"
                    value={this.state.fav_materials}
                    onChange={this.onChange}
                    error={errors.fav_materials}
                    info="What are your craft inspirations? (Please use commas to seperate)"
                  />
                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us a little about yourself"
                />

                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-success"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-block mt-4 btn-success" />
                </form>
              </div>
          </div>
      </div>
      </div>

        )
    }
}

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
  });
  
  export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile));
  
