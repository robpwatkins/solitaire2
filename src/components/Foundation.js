import React, { useState } from 'react';
import Card from '../components/Card';

const Foundation = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  let topCard;
  if (props.cards !== undefined) {
    topCard = props.cards[props.cards.length - 1];
  }

  const handleClick =() => {
    if (props.cards.length === 0) {
      if (props.clickedCard.rank === 1) {
        let card = {
          rank: props.clickedCard.rank,
          suit: props.clickedCard.suit
        }
        props.setCards([...props.cards, card]);
      }
    }
  }

  return (
    <div className="foundation" onClick={handleClick}>
      <Card 
        {...topCard}
        clickedCard={props.clickedCard}
        setClickedCard={props.setClickedCard}
        setIsClicked={setIsClicked}
      />
    </div>
  )
}

export default Foundation;