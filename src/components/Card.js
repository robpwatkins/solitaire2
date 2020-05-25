import React from 'react';

const Card = (props) => {

  const handleClick = () => {
    let card = {
      rank: props.rank,
      suit: props.suit
    }
    if (props.clickedCard.length === 0) {
      props.setClickedCard(clickedCard => clickedCard = card);
      props.setIsClicked(isClicked => isClicked = true);
    }
    else {
      props.setIsClicked(isClicked => isClicked = false);
      props.setClickedCard(clickedCard => clickedCard = []);
    }
  }

  return (
    <div className="card" onClick={handleClick}>
      {props.rank} of {props.suit}
    </div>
  )
}

export default Card;