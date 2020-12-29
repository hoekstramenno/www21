import React from 'react';
import './IkeaHeader.scss';

function IkeaHeader(props) {
    return (
        <div className="row ikea-header">
            {props.title || 'WWW 21' }
        </div>
    )
}

export default IkeaHeader;
