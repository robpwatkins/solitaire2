import React, { useEffect } from 'react';
import Card from '../components/Card';

const Foundation = (props) => {
  const {
    cards, 
    setCards, 
    clickedCards,
    setClickedCards, 
    isOrigin,
    setIsOrigin,
    isDestination,
    setIsDestination,
    setDestination,
    moveSuccessful, 
    setMoveSuccessful,  
  } = props;

  let topCard;
  if (cards.length > 0) {
    topCard = props.cards[props.cards.length - 1];
  }

  useEffect(() => {
    if (clickedCards.length === 0 && isOrigin) {
      setIsOrigin(isOrigin => isOrigin = false);
    }
    if (isDestination && moveSuccessful) {
      setCards([...cards, clickedCards[0]]);
      setMoveSuccessful(moveSuccessful => moveSuccessful = false);
      setIsDestination(isDestination => isDestination = false);
      setClickedCards([]);
    } 
    // else
    // if (isOrigin && moveSuccessful) {
    //   // let newCards = cards;
    //   // newCards.splice(cards.length - 1);
    //   // setCards(...cards, newCards);
    //   // setIsOrigin(isOrigin => isOrigin = false);
    // } else return;
  }, [clickedCards, isOrigin, setIsOrigin, isDestination, moveSuccessful, setCards, cards, setMoveSuccessful, setIsDestination, setClickedCards])

  const handleClick = event => {
    if (cards.length === 0) {
      if (clickedCards.length === 0) return;
      else {
        setIsDestination(isDestination => isDestination = true);
        setDestination(event.target.getAttribute('value'));
      }
    }
    if (clickedCards.length === 0) {
      setIsOrigin(isOrigin => isOrigin = true);
    } else {
      if (isOrigin) {
        setIsOrigin(isOrigin => isOrigin = false);
      }
    }

    
    // if (clickedCards.length === 0) {
    //   if (cards.length > 0) {
    //     setIsOrigin(isOrigin => isOrigin = true);
    //   }
    // }
    // if (clickedCards.length === 1) {
    //   if (isOrigin) {
    //     setIsOrigin(isOrigin => isOrigin = false);
    //   }
    //   if (cards.length === 0) {
    //     setIsDestination(isDestination => isDestination = true);
    //     setDestination(event.target.getAttribute('value'));
    //   }
    // }
  }
  let fndClass = [
    'foundation',
    isOrigin && 'clicked',
    cards.length === 0 && 'empty'
  ]
  fndClass = fndClass.join(' ')
  // console.log(props.name, isOrigin, clickedCards.length);
  return (
    <div 
      className={fndClass} 
      onClick={event => handleClick(event)}
      value={cards.length === 0 && "empty-foundation"}
    >
      {props.cards.length > 0 && (
        <Card 
          {...topCard}
          clickedCards={clickedCards}
          setClickedCards={setClickedCards}
        />
      )}
    </div>
  )
}

export default Foundation;