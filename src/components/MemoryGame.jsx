import React, { useState, useEffect, useMemo } from 'react';
import GameBoard from './GameBoard';
import { shuffle } from 'lodash';
import './../App.css';

const MemoryGame = ({ images }) => {
  const shuffledCards = useMemo(
    () => shuffle([...images, ...images]),
    [images]
  );

  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [flipCount, setFlipCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [maxFlips, setMaxFlips] = useState(20); // Giá trị mặc định

  const handleCardClick = (index) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      matchedCards.includes(index) ||
      gameOver
    ) {
      return;
    }

    if (flipCount >= maxFlips - 1) {
      setGameOver(true);
      return;
    }

    setFlippedCards((prev) => [...prev, index]);
    setFlipCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (shuffledCards[first] === shuffledCards[second]) {
        setMatchedCards((prev) => [...prev, first, second]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  }, [flippedCards, shuffledCards]);

  const restartGame = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    setFlipCount(0);
    setGameOver(false);
  };

  return (
    <div className='memory-game'>
      <h1>Memory Game</h1>

      {gameOver ? (
        <div>
          <h2>Game Over!</h2>
          <button onClick={restartGame}>Restart</button>
        </div>
      ) : (
        <>
          <div className='options'>
            <label>Choose max flips:</label>
            <select
              value={maxFlips}
              onChange={(e) => setMaxFlips(parseInt(e.target.value))}
            >
              <option value='20'>20 Flips</option>
              <option value='26'>26 Flips</option>
              <option value='30'>30 Flips</option>
            </select>
          </div>

          <p>Flips left: {maxFlips - flipCount}</p>
          <GameBoard
            cards={shuffledCards}
            flippedCards={flippedCards}
            matchedCards={matchedCards}
            onCardClick={handleCardClick}
          />
        </>
      )}
    </div>
  );
};

export default MemoryGame;
