// App.jsx
import React, { useState } from 'react';
import Card from './card/card';
import './App.css'; // Import the new CSS file

const App = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [color, setColor] = useState('lightblue');
    const [content, setContent] = useState({
        front: 'This is the front!',
        back: 'This is the back!',
    });

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
        setColor(isFlipped ? 'lightblue' : 'lightcoral');
        setContent({
            front: isFlipped ? 'This is the front!' : 'New front content!',
            back: isFlipped ? 'This is the back!' : 'FUCKING PIECE OF SHIT',
        });
    };

    return (
        <div className="app-container"> {/* Use the new class here */}
            <div style={{ textAlign: 'center' }}>
                <Card isFlipped={isFlipped} color={color} content={content} />
                <button onClick={handleFlip} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
                    Flip Card
                </button>
            </div>
        </div>
    );
};

export default App;
