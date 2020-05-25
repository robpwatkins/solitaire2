import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/Card';
import { useOutsideClickAlerter } from '../outsideClickAlerter';

const Pile = (props) => {
  const ref = useRef();
  
  let topCard = props.cards[props.cards.length - 1];

  // useEffect(() => {
  //   props.setIsClicked(props.isClicked);
  // }, []);
  
  const handleClick = (event) => {
    let stackName = event.target.getAttribute('value');
    if (props.isInMove === '') {
      props.setIsClicked(isClicked => isClicked = true);
    } else {
      if (props.isInMove === props.name) {
        props.setIsClicked(isClicked => isClicked = false);
      }
      // if (props.isInMove !== stackName) {
      //   props.setIsClicked(isClicked => isClicked = false);
      //   props.setIsInMove(isInMove => isInMove = '');
      //   props.setClickedCard([]);
      // }
    }
  }

  useOutsideClickAlerter(ref, (event) => {
    let targetName = event.target.getAttribute('class');
    let stackName = event.target.getAttribute('value');
    if (targetName === 'solitaire') {
      props.setIsClicked(isClicked => isClicked = false);
      props.setIsInMove(isInMove => isInMove = '');
    }
    if (targetName === 'card') {
      console.log(targetName, props.name);
    }
  });
  
  return (
    <div 
      onClick={(event) => handleClick(event)}
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