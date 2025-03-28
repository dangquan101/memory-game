import React from 'react'
import './../App.css'


const Card = ({ index, image, isFlipped, onClick }) => {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={() => onClick(index)}>
      {isFlipped ? <img src={image} alt="Memory Card" /> : <div className="card-back" />}
    </div>
  );
};

export default Card;