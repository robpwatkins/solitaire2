import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/Card';
import { useOutsideClickAlerter } from '../outsideClickAlerter';

const Pile = (props) => {
  const ref = useRef();
  
  let topCard = props.cards[props.cards.length - 1];

  // useEffect(() => {
  //   props.setIsClicked(props.isClicked);
  // }, []);
  
  const handleClick = () => {
    // let stackName = event.target.getAttribute('value');
    if (props.isInMove === '') {
      props.setIsClicked(isClicked => isClicked = true);
    }
    if (props.isInMove === props.name) {
      props.setIsClicked(isClicked => isClicked = false);
    }
  }

  useOutsideClickAlerter(ref);
  
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
          setIsInMove={props.setIsInMove}
        />
      }
    </div>
  )
}

export default Pile;