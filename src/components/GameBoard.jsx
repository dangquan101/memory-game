import React from 'react';
import Card from './Card';
import './../App.css'

const GameBoard = ({ cards, flippedCards, matchedCards, onCardClick }) => {
  return (
    <div className="game-board">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className={`card ${flippedCards.includes(index) || matchedCards.includes(index) ? "flipped" : ""}`} 
          onClick={() => onCardClick(index)}
        >
          <div className="card-inner">
            <div className="card-front" style={{ backgroundImage: `url(${card})` }}></div>
            <div className="card-back">?</div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default GameBoard;