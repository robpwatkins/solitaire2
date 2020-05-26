import React, { useEffect } from 'react';
import Card from '../components/Card';

const Tableau = (props) => {
  let {isClicked, moveSuccessful, cards, setCards, clickedCards, setClickedCards, setIsClicked, setMoveSuccessful} = props;

  let topCard = props.cards[props.cards.length - 1];

  // useEffect(() => {
  //   if (clickedCards.length === 2 && moveSuccessful) {
  //     let card = clickedCards[0];
  //     setCards([...cards, card]);
  //     setMoveSuccessful(moveSuccessful => moveSuccessful = false);
  //     setClickedCards([]);
  //   }
  // }, [clickedCards, moveSuccessful, setCards, cards]);
  
  useEffect(() => {
    if (isClicked && moveSuccessful) {
      if (cards.length === 2) {
        setCards([...cards, clickedCards[0]]);
        setMoveSuccessful(moveSuccessful => moveSuccessful = false);
        setIsClicked(isClicked => isClicked = false);
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
  }, [isClicked, moveSuccessful, cards, setCards, clickedCards, setIsClicked]);

  const handleClick = () => {
    if (props.clickedCards.length === 0) {
      props.setIsClicked(isClicked => isClicked = true);
      props.setOrigin(origin => origin = props.name);
    } else
    if (props.clickedCards.length === 1) {
      setIsClicked(isClicked => isClicked = true);
      props.setDestination(destination => destination = props.name);
    }
  }

  let tblClass = [
    'tableau',
    (isClicked && clickedCards.length === 1) && 'clicked',
    cards.length === 0 && 'empty'
  ]
  tblClass = tblClass.join(' ')
  console.log(props.name, clickedCards.length, isClicked);
  return (
    <div 
      // className={props.isClicked ? "tableau clicked" : "tableau"}
      className={tblClass}
      onClick={handleClick}
      value={props.name}
    >
      {props.cards.length > 0 &&
        <Card 
          {...topCard}
          setClickedCards={props.setClickedCards}
          clickedCards={props.clickedCards}
        />
      }
    </div>
  )
}

export default Tableau;