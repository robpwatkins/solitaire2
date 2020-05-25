import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/Card';
import { useOutsideClickAlerter } from '../outsideClickAlerter';

const Pile = (props) => {
  const ref = useRef();
  const [isClicked, setIsClicked] = useState(false);
  
  let topCard = props.cards[props.cards.length - 1];

  useEffect(() => {
  }, [isClicked, props.clickedCard]);

  useOutsideClickAlerter(ref, (event, data) => {
    let targetName = event.target.getAttribute('class')
    if (targetName === 'solitaire') {
      return;
    }
    if (targetName === 'card') {
      setIsClicked(isClicked => isClicked = false);
    }
    if (targetName === 'foundation empty') {
      if (props.cards.length > 0) {
        if (topCard.rank === 1) {
          setIsClicked(isClicked => isClicked = false);
          props.setMoveSuccessful(moveSuccessful => moveSuccessful = true);
          let cards = props.cards;
          cards.splice(cards.length - 1);
          props.setCards(...props.cards, cards);
        }
      }
    }
  });

  return (
    <div className={isClicked ? "pile clicked" : "pile"} ref={ref}>
      {props.cards.length > 0 &&
        <Card 
          {...topCard}
          clickedCard={props.clickedCard}
          setClickedCard={props.setClickedCard}
          setIsClicked={setIsClicked}
          isClicked={isClicked}
        />
      }
    </div>
  )
}

export default Pile;