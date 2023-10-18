import React from "react";

const FlashCard = ({ flashcard, flip, setFlip }) => {
    return (
        <div className={`card${flip ? ' flipped' : ''}`} onClick={() => setFlip(!flip)}>
            <div className="card-face card-front">{flashcard.front}</div>
            <div className="card-face card-back">{flashcard.back}</div>
        </div>
    );
}

export default FlashCard