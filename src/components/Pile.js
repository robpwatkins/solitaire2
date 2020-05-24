import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const Pile = (props) => {
  const [cardStack, setCardStack] = useState([]);

  useEffect(() => {
    setCardStack(...cardStack, props.cards);
  }, [setCardStack]);
  
  let topCard = cardStack[cardStack.length - 1];

  return (
    <div className="pile">
      <Card {...topCard} />
    </div>
  )
}

export default Pile;