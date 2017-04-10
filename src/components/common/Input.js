import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    render() {
        const { placeHolder, type, value, onClick, className, onChange } = this.props;
        return (
            <input  type={type} placeholder={ placeHolder } className={className} value={value}
            onClick={onClick} onChange={onChange}/>
        );
     }
}

export default Input; 