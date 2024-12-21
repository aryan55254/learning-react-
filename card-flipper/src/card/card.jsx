
import React, { useState } from 'react';
import './Card.css'; // Import CSS for styling

const Card = ({ isFlipped, color, content }) => {
    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} style={{ backgroundColor: color }}>
            <div className="card-inner">
                <div className="card-front">
                    <h2>Front</h2>
                    <p>{content.front}</p>
                </div>
                <div className="card-back">
                    <h2>Back</h2>
                    <p>{content.back}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
