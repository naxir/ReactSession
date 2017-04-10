import React from 'react';
import './TextGroupField.css';

const TextArea = (props) => {
    return (
        <div className="TextGroupField">
            {props.children}
        </div>
    );
}

export default TextArea;