import React from 'react';
import Card from '../components/Card';

const Foundation = (props) => {

  let topCard;
  if (props.cards.length > 0) {
    topCard = props.cards[props.cards.length - 1];
  }

  const handleClick = () => {
    if (props.cards.length === 0) {
      if (props.clickedCard.rank === 1) {
        let card = {
          rank: props.clickedCard.rank,
          suit: props.clickedCard.suit
        }
        // props.setMoveSuccessful(moveSuccessful => moveSuccessful = true);
        props.setCards([...props.cards, card]);
      }
    }
  }

  return (
    <div className={props.cards.length > 0 ? "foundation" : "foundation empty"}
      onClick={handleClick}
    >
      {props.cards.length > 0 &&
        <Card 
          {...topCard}
          clickedCard={props.clickedCard}
          setClickedCard={props.setClickedCard}
          isInMove={props.isInMove}
          setIsInMove={props.setIsInMove}
        />
      }
    </div>
  )
}

export default Foundation;