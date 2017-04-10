import React, { Component } from 'react';
import TextGroupField from './common/TextGroupField';
import FieldLabel from './common/FieldLabel';
import Input from './common/Input';
import FormHeader from './FormHeader';
import './Form.css';

class RegisterForm extends Component {
    render(){
        return (
            <div className="Form">
                <FormHeader headerText="Sign up"/>

                <TextGroupField>
                    <FieldLabel labelText="Email"/>
                    <Input placeHolder="test@seven.pk" type="text" />
                </TextGroupField>

                <TextGroupField>
                    <FieldLabel labelText="Password"/>
                    <Input placeHolder="********" type="password" />
                </TextGroupField>

                  <TextGroupField>
                    <FieldLabel labelText="Confirm Password :"/>
                    <Input placeHolder="********" type="password" />
                </TextGroupField>

                <TextGroupField>
                    <Input type="button"  className="btn" value="Sign up"/>
                </TextGroupField>
            </div>
        );
    }
}


export default RegisterForm;