import React from 'react';
import './FieldLabel.css';


const FieldLabel = (props) => {
    return (
        <div className="FieldLabel">
            {props.labelText}
        </div>
    );
}

export default FieldLabel;