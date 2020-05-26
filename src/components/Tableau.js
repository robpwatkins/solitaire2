import React, { useEffect } from 'react';
import Card from '../components/Card';

const Tableau = (props) => {
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

  let topCard = props.cards[props.cards.length - 1];
  
  useEffect(() => {
    if (isClicked && moveSuccessful) {
      if (cards.length === 2) {
        setCards([...cards, clickedCards[0]]);
        setMoveSuccessful(moveSuccessful => moveSuccessful = false);
        setIsClicked(isClicked => isClicked = false);
        setClickedCards([]);
      } else {
        let newCards = cards;
        newCards.splice(cards.length - 1);
        setCards(...cards, newCards);
        setIsClicked(isClicked => isClicked = false);
      }
    }
    if (clickedCards.length === 0) {
      setIsClicked(isClicked => isClicked = false);
    }
  }, [isClicked, moveSuccessful, cards, setCards, clickedCards, setMoveSuccessful, setIsClicked, setClickedCards]);

  const handleClick = () => {
    if (cards.length === 0) return;
    if (clickedCards.length === 0) {
      setIsClicked(isClicked => isClicked = true);
      // setOrigin(origin => origin = props.name);
    } else
    if (clickedCards.length === 1) {
      setIsClicked(isClicked => isClicked = true);
      setDestination(destination => destination = props.name);
    }
  }

  let tblClass = [
    'tableau',
    (isClicked && clickedCards.length === 1) && 'clicked',
    cards.length === 0 && 'empty'
  ]
  tblClass = tblClass.join(' ')
  // console.log(props.name, clickedCards.length, isClicked);
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