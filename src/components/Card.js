import React from 'react';

const Card = (props) => {

  const handleClick = (event) => {
    if (props.isInMove === '') {
      let stackName = event.target.getAttribute('value');
      let card = {
        rank: props.rank,
        suit: props.suit
      }
      props.setClickedCard(clickedCard => clickedCard = card);
      props.setIsInMove(isInMove => isInMove = stackName);
    } 
    // else {
      // props.setIsInMove(isInMove => isInMove = '');
      // props.setClickedCard([]);
    // }
  }

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