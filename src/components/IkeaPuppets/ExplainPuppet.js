import React from 'react';
import './ExplainPuppet.scss';
import puppet from '../../assets/images/explainingPuppet.png';

function ExplainPuppet() {
    return (
        <>
            <div className="puppet">
                <img src={puppet} alt="ExplainPuppet"/>
            </div>
        </>
    )
}

export default ExplainPuppet;
