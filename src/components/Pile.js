import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/Card';
import { useOutsideClickAlerter } from '../outsideClickAlerter';

const Pile = (props) => {
  const ref = useRef();
  
  let topCard = props.cards[props.cards.length - 1];

  // useEffect(() => {
  // }, [isClicked, props.clickedCard]);

  const handleClick = () => {
    if (props.clickedCard.length === 0) {
      props.setIsClicked(isClicked => isClicked = true);
    } else
    if (props.clickedCard.rank === topCard.rank && props.clickedCard.suit === topCard.suit) {
      props.setIsClicked(isClicked => isClicked = false);
    }
  }

  useOutsideClickAlerter(ref, (event) => {
    let targetName = event.target.getAttribute('class');
    if (targetName === 'solitaire') return;
    if (targetName === 'card') {
      props.setIsClicked(isClicked => isClicked = false);
    }
    // if (props.isClicked) {
    //   if (targetName === 'foundation empty') {
    //     props.setIsClicked(isClicked => isClicked = false);
    //     let cards = props.cards;
    //     cards.splice(cards.length - 1);
    //     props.setCards(...props.cards, cards);
    //   }
    // }
  });
  // console.log('Pile: ', props.name);
  return (
    <div 
      onClick={handleClick}
      className={props.isClicked ? "pile clicked" : "pile"} ref={ref}
    >
      {props.cards.length > 0 &&
        <Card 
          name={props.name}  
          {...topCard}
          clickedCard={props.clickedCard}
          setClickedCard={props.setClickedCard}
          isClicked={props.isClicked}
          setIsClicked={props.setIsClicked}
          isInMove={props.isInMove}
          setIsInMove={props.setIsInMove}/>
      }
    </div>
  )
}

export default Pile;