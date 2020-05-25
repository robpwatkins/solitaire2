import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/Card';
import { useOutsideClickAlerter } from '../outsideClickAlerter';

const Pile = (props) => {
  const ref = useRef();
  const [isClicked, setIsClicked] = useState(false);
  
  let topCard = props.cards[props.cards.length - 1];

  useEffect(() => {
    console.log('Pile1', props.clickedCard.length, isClicked);
  }, [isClicked, props.clickedCard]);

  useOutsideClickAlerter(ref, (event, data) => {
    let targetName = event.target.getAttribute('class')
    if (targetName === 'solitaire') {
      return;
    }
    console.log('event', event.target);
    if (targetName === 'card') {
      setIsClicked(isClicked => isClicked = false);
    }
  });

  return (
    <div className={isClicked ? "pile clicked" : "pile"} ref={ref}>
      <Card 
        {...topCard}
        clickedCard={props.clickedCard}
        setClickedCard={props.setClickedCard}
        setIsClicked={setIsClicked}
        isClicked={isClicked}
      />
    </div>
  )
}

export default Pile;