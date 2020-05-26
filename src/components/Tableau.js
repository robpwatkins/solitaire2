import React, { useEffect } from 'react';
import Card from '../components/Card';

const Tableau = (props) => {
  const {
    cards, 
    setCards, 
    // isClicked, 
    // setIsClicked,
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

  let topCard = props.cards[props.cards.length - 1];
  
  useEffect(() => {
      if (isDestination && moveSuccessful) {
        setCards([...cards, clickedCards[0]]);
        setMoveSuccessful(moveSuccessful => moveSuccessful = false);
        setIsDestination(isDestination => isDestination = false);
        setClickedCards([]);
      } else 
      if (isOrigin && moveSuccessful) {
        let newCards = cards;
        newCards.splice(cards.length - 1);
        setCards(...cards, newCards);
        setIsOrigin(isOrigin => isOrigin = false);
      }
    if (clickedCards.length === 0) {
      setIsOrigin(isOrigin => isOrigin = false);
    }
  }, [isDestination, moveSuccessful, setCards, cards, clickedCards, setMoveSuccessful, setIsDestination, setClickedCards]);

  const handleClick = () => {
    if (cards.length === 0) return;
    if (clickedCards.length === 0) {
      setIsOrigin(isOrigin => isOrigin = true);
      // setOrigin(origin => origin = props.name);
    } else
    if (clickedCards.length === 1) {
      setIsDestination(isDestination => isDestination = true);
      setDestination(destination => destination = props.name);
    }
  }

  let tblClass = [
    'tableau',
    isOrigin /*&& clickedCards.length === 1*/ && 'clicked',
    cards.length === 0 && 'empty'
  ]
  tblClass = tblClass.join(' ')
  // console.log(props.name, isClicked);
  return (
    <div className={tblClass} onClick={handleClick}>
      {props.cards.length > 0 && (
        <Card 
          {...topCard}
          setClickedCards={setClickedCards}
          clickedCards={clickedCards}
        />
      )}
    </div>
  )
}

export default Tableau;