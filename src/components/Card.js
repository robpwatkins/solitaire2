import React, { useRef } from 'react';
import { usePreviousValue } from '../usePreviousValue';

const Card = (props) => {

  const handleClick = () => {
    let card = {
      rank: props.rank,
      suit: props.suit
    }
    props.setClickedCards([...props.clickedCards, card]);
  }
  
  return (
    <div className="card" onClick={handleClick}>
      {props.rank} of {props.suit}
    </div>
  )
}

export default Card;