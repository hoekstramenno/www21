import React from 'react';
import './IkeaCard.scss';

function IkeaCard(props) {
    return (
        <div className="ikea-card mb-4">
            {props.children}
        </div>
    )
}

export default IkeaCard;
