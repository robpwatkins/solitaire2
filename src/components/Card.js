import React from 'react';

const Card = (props) => {

  const handleClick = (event) => {
    let stackName = event.target.getAttribute('value');
    props.setIsInMove(stackName);
    console.log('Card: ', props.isInMove);
    let card = {
      rank: props.rank,
      suit: props.suit
    }
    if (props.clickedCard.length === 0) {
      props.setClickedCard(clickedCard => clickedCard = card);
      // props.setIsClicked(isClicked => isClicked = true);
    }
    else {
      // props.setIsClicked(isClicked => isClicked = false);
      props.setClickedCard(clickedCard => clickedCard = []);
    }
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