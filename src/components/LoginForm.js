import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginClicked } from '../actions';
import TextGroupField from './common/TextGroupField';
import FieldLabel from './common/FieldLabel';
import Input from './common/Input';
import FormHeader from './FormHeader';
import { Link } from 'react-router';

import './Form.css';

class LoginForm extends Component {
    constructor(){
        super();
        this.state = {email:'', password:''};
    }
    onEmailChange(email){
        this.setState({email:email.target.value});
       //this.props.emailChanged(this.state.email);
    }
    
    onPasswordChange(password){
        this.setState({password:password.target.value});
        // this.props.passwordChanged(this.state.password);
    }

    onLoginClick(){
        this.props.loginClicked(this.state.email,this.state.password);
    }

    render(){
       const { email, password } = this.state;
        return (
            <div className="Form">
                <FormHeader headerText="Sign in"/>
                <TextGroupField>
                    <FieldLabel labelText="Email"/>
                    <Input placeHolder="test@seven.pk" type="text"
                     onChange={this.onEmailChange.bind(this)} value={email}/>
                </TextGroupField>
                    
                 <TextGroupField>
                    <FieldLabel labelText="Password"/>
                    <Input placeHolder="********" type="password"  
                    onChange={this.onPasswordChange.bind(this)} value={password}/>
                </TextGroupField>

                <TextGroupField>
                    <Input type="button" value="Sign in" className="btn" onClick={this.onLoginClick.bind(this)}/>
                    <Link to="/Register" className="btn">Register</Link>
                </TextGroupField>
            </div>
        );
    }
}


const mapStateToProps = state => {
    const { email, password, data } = state.auth;
    return {
            email: email,
            password: password,
            data: data
        };
}

export default connect(mapStateToProps,{ emailChanged, passwordChanged, loginClicked })(LoginForm);