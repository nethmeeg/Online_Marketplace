import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label} from 'reactstrap';
import {withRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {registerUser} from '../actions/authActions';
import TextFieldGroup from '../components/common/TextFieldGroup';




class SignUp extends Component{
  constructor(){
    super();
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password:'',
      password2:'',
      errors: {}
      
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
    

  onChange(e){
      this.setState({ [e.target.name]: e.target.value });
  }
    
  onSubmit(e){
      e.preventDefault();
    
        // Create user object
        const newUser = {
            email : this.state.email,
            firstName : this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            password2: this.state.password2
        };
     this.props.registerUser(newUser, this.props.history)
       
   }
  
    render() {
      const { errors } = this.state;
        return(
          <div>
                <Form style = {{margin:'5%', marginRight:'15%', marginLeft:'15%'}} onSubmit ={this.onSubmit}>
                <h2 style = {{textAlign: 'center',color:'#f1f1f1',background: '#678d4c',padding:'5px'}}> Sign Up </h2>
                     <FormGroup>
                        <Label>Email:</Label> 
                        <TextFieldGroup
                            
                            type = "email"
                            placeholder = "Email"
                            style = {{marginRight:'5%', marginTop:'1%',marginBottom:'1%'}}
                            name = "email"
                            value = {this.state.email}
                            onChange = {this.onChange}
                            error={errors.email}
                            /> 
                            
                        <Label>First Name:</Label> 
                        <TextFieldGroup
                            
                            type = "text"
                            placeholder = "First Name" 
                            style = {{marginRight:'5%', marginTop:'1%',marginBottom:'1%'}} 
                            name = "firstName"
                            value = {this.state.firstName}
                            onChange = {this.onChange}
                            error={errors.firstName}
                            /> 
                          
                        <Label>Last Name:</Label>  
                        <TextFieldGroup
                            
                            type = "text"
                            placeholder = "Last Name"
                            style = {{marginRight:'5%', marginTop:'1%', marginBottom:'1%'}}
                            name = "lastName"
                            value = {this.state.lastName}
                            onChange = {this.onChange}
                            error={errors.lastName}
                            />
                          
                        <Label> Password:</Label> 
                        <TextFieldGroup
                            
                            type = "password"
                            placeholder = "Password"
                            style = {{marginRight:'5%', marginTop:'1%',marginBottom:'1%'}} 
                            name = "password" 
                            value = {this.state.password}
                            onChange = {this.onChange}
                            error={errors.password}
                            /> 
                          
                        <Label>Confirm Password:</Label>  
                        <TextFieldGroup
                            
                            type = "password"
                            placeholder = "Re-enter Password" 
                            style = {{marginRight:'5%', marginTop:'1%', marginBottom:'1%'}}                                                        
                            name = "password2" 
                            value = {this.state.password2}
                            onChange = {this.onChange}
                            error={errors.password2}
                            />

                    <Button className = "btn btn-success" type = "submit" >Sign Up </Button>
                    <hr color = "#678d4c"/>
                    <p>Already Signed Up? <Link to = "/Login" style={{color:'#678d4c'}}> Login </Link></p>

                </FormGroup> 
             </Form>    
             </div>
             );   
            }   
        }


      
SignUp.propTypes = {
    register: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
          
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
          
export default connect(mapStateToProps, { registerUser })(withRouter(SignUp));