import React from 'react'
import { useState } from 'react'
import './App.css'
import FlashCard from './Flashcard'

function App() {
  const flashcards = FLASHCARD_CONTENT;
  const numOfCards = flashcards.length;
  let randomCard = Math.floor(Math.random() * numOfCards);
  const [cardID, setCardID] = useState(randomCard);
  const [flip, setFlip] = useState(false); 
  const [userGuess, setUserGuess] = useState('');


  const prevCard = () => {
    if (cardID > 0){
      setCardID(cardID - 1);
      setFlip(false);
      resetResult();
    }
  };

  const nextCard = () => {
    if (cardID < numOfCards - 1){
      setCardID(cardID + 1);
      setFlip(false);
      resetResult();
    }
  };

  const shuffleCard = () => {
    do {
      randomCard = Math.floor(Math.random() * numOfCards);
    } while (randomCard === cardID);
    setCardID(randomCard);
    setFlip(false);
    resetResult();
  };

  const resetResult = () => {
    setUserGuess('');
    setUserGuessClass('');
  }

  const checkAnswer = () => {
    const currentFlashcard = flashcards[cardID];
    if (userGuess.toLowerCase() === currentFlashcard.back.toLowerCase()) {
      setUserGuessClass('correct'); 
    } else {
      setUserGuessClass('incorrect'); 
    }
  }

  const setUserGuessClass = (className) => {
    document.getElementById('user-guess').classList = className;
  };

  return (
    <div>    

      <div className='header'>
        <h1>Geography 101</h1>
        <h2>Ready to brush up on your geographic knowledge?</h2>
        <h3>Number of cards: {numOfCards}</h3>
      </div>

      <div className='container'>
        <FlashCard flashcard={flashcards[cardID]} flip={flip} setFlip={setFlip}/>

        <div className='user-input-container'>
          <input 
            id='user-guess'
            type='text'
            placeholder='Enter your guess'
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
          />
          <button onClick={checkAnswer}>Submit</button>
        </div>

        <div className='buttons'>
          <button onClick={prevCard}>Back</button>
          <button onClick={nextCard}>Next</button>
          <button onClick={shuffleCard}>Shuffle</button>
        </div>

      </div>

    </div>
  )
}

const FLASHCARD_CONTENT = [
  {
    front: 'What is the capital of the United States?',
    back: 'Washington D.C.'
  },
  {
    front: 'What is the capital of France?',
    back: 'Paris'
  },
  {
    front: 'What is the name of the tallest mountain in the world?',
    back: 'Mount Everest'
  },
  {
    front: 'What is the largest country in South America?',
    back: 'Brazil'
  },
  {
    front: 'What is the largest desert in the world?',
    back: 'Sahara Desert'
  },
  {
    front: 'What is the name of the largest country in the world?',
    back: 'Russia'
  },
  {
    front: 'What is the capital of Spain?',
    back: 'Madrid'
  },
  {
    front: 'What is the capital of Ireland?',
    back: 'Dublin'
  },
  {
    front: 'What is the capital of Germany?',
    back: 'Berlin'
  },
  {
    front: 'What is the capital of Australia?',
    back: 'Canberra'
  },
  {
    front: 'Which river runs through Egypt?',
    back: 'Nile River'
  },
  {
    front: 'What is the capital of Canada?',
    back: 'Ottawa'
  },
  {
    front: 'Which country is known for its fjords and Viking history?',
    back: 'Norway'
  },
]

export default App
