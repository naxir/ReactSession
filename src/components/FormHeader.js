import React from 'react';
import './FormHeader.css';

const FormHeader = (props) => {
    return (
        <div className="FormHeader">
            {props.headerText}
        </div>
    );
}

export default FormHeader;