import React, { useState } from 'react';
import Card from '../components/Card';

const Pile = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  
  let topCard = props.cards[props.cards.length - 1];

  isClicked && console.log('heyoo');

  return (
    <div className={isClicked ? "pile clicked" : "pile"}>
      <Card 
        {...topCard}
        setClickedCard={props.setClickedCard}
        setIsClicked={setIsClicked}
        isClicked={isClicked}
      />
    </div>
  )
}

export default Pile;