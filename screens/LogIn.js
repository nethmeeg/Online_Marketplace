import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {loginUser} from '../actions/authActions';
import TextFieldGroup from '../components/common/TextFieldGroup';


class LogIn extends Component{
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
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
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
    
  
    render(){

      const { errors } = this.state;

        return(
          <div>
              <Form style = {{margin:'5%', marginRight:'15%', marginLeft:'15%'}} onSubmit={this.onSubmit}>
              <h2 style = {{textAlign: 'center',color:'#f1f1f1',background: '#678d4c',padding:'5px'}}> Log In </h2>
                    <FormGroup>
                        <Label>Email:</Label> 
                        <TextFieldGroup
                        
                            type = "email"
                            placeholder = "Email"
                            style = {{marginRight:'5%', marginTop:'1%',marginBottom:'1%'}} 
                            name = "email"
                            value = {this.state.email}
                            onChange={this.onChange}
                            error={errors.email}
                            /> 

                        <Label>Password: </Label>
                        <TextFieldGroup
            
                            type = "password"
                            placeholder = "Password"
                            style = {{marginRight:'5%', marginTop:'1%',marginBottom:'1%'}}
                            name = "password"
                            value = {this.state.password}
                            onChange={this.onChange}
                            error={errors.password}
                            /> 

                        <FormGroup check>
                            <Input type="checkbox" name="logged_in_check"/>
                            <Label>Stay Logged In</Label>
                      
                        </FormGroup>
            
                        <Link>
                        <FormText color="muted" style = {{textAlign:'left', marginBottom:'2%'}}>
                        Forgot your password?
                        </FormText>
                        </Link>
                
                        <Button className = "btn btn-success" type = "submit" >Log In </Button>
                        <hr color = "#678d4c"/>
                        <p>Haven't Signed up yet? <Link to = "/signUp" style={{color:'#678d4c'}}> SignUp </Link></p>
                     </FormGroup>     
              </Form>
            </div>

        );

    }

}
LogIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(LogIn);
