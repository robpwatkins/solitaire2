import React, { useEffect } from 'react';
import Card from '../components/Card';

const Foundation = (props) => {
  const {
    cards, 
    setCards, 
    isClicked, 
    setIsClicked,
    clickedCards,
    setClickedCards, 
    setDestination,
    moveSuccessful, 
    setMoveSuccessful, 
  } = props;

  let topCard;
  if (cards.length > 0) {
    topCard = props.cards[props.cards.length - 1];
  }

  useEffect(() => {
    if (isClicked && moveSuccessful) {
      if (cards.length === 0 && clickedCards.length === 1) {
        setCards([...cards, clickedCards[0]]);
        setMoveSuccessful(moveSuccessful => moveSuccessful = false);
        setIsClicked(isClicked => isClicked = false);
        setClickedCards([]);
      }
    }
  })

  const handleClick = event => {
    if (clickedCards.length === 0) {
      setIsClicked(isClicked => isClicked = true);
      // setOrigin(origin => origin = props.name);
    } else
    if (props.clickedCards.length === 1) {
      if (cards.length === 0) {
        setIsClicked(isClicked => isClicked = true);
        setDestination(event.target.getAttribute('value'));
      } else {
        setIsClicked(isClicked => isClicked = true);
        setDestination(destination => destination = props.name);
      }
    }
  }
  // console.log(cards.length, clickedCards.length);
  return (
    <div 
      className={cards.length > 0 ? "foundation" : "foundation empty"} 
      onClick={event => handleClick(event)}
      value={cards.length === 0 && "empty-foundation"}
    >
      {props.cards.length > 0 && (
        <Card 
          {...topCard}
        />
      )}
    </div>
  )
}

export default Foundation;