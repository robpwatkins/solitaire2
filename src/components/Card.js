import React, { useRef } from 'react';
import { usePreviousValue } from '../usePreviousValue';

const Card = (props) => {
  let currentCard = {
    card: {
      rank: props.rank,
      suit: props.suit
    }
  }

  let prevCard = usePreviousValue(props.clickedCard);
  
  const handleClick = (event) => {
    if (props.isInMove === '') {
      props.setClickedCard(clickedCard => clickedCard = currentCard);
      props.setIsClicked(isClicked => isClicked = true);
    } 
    // else {
      // props.setIsInMove(isInMove => isInMove = '');
      // props.setClickedCard([]);
    // }
  }
  console.log({prevCard});
  return (
    <div
      value={props.name}
      className="card"
      onClick={(event) => handleClick(event)}
    >
      {props.rank} of {props.suit}
    </div>
  )
}

export default Card;