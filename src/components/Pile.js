import React, { useState, useRef } from 'react';
import Card from '../components/Card';
import { useOutsideClickAlerter } from '../outsideClickAlerter';

const Pile = (props) => {
  const ref = useRef();
  const [isClicked, setIsClicked] = useState(false);
  
  let topCard = props.cards[props.cards.length - 1];

  useOutsideClickAlerter(ref, (event) => {
    let targetName = event.target.getAttribute('class')
    if (targetName === 'solitaire') {
      return;
    }
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