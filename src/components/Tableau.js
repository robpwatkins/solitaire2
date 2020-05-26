import React from 'react';
import Card from '../components/Card';

const Tableau = (props) => {

  let topCard = props.cards[props.cards.length - 1];

  const handleClick = () => {
    props.setIsClicked(isClicked => !isClicked);
  }

  return (
    <div 
      className={props.isClicked ? "tableau clicked" : "tableau"}
      onClick={handleClick}
    >
      {props.cards.length > 0 &&
        <Card {...topCard} setClickedCards={props.setClickedCards} />
      }
    </div>
  )
}

export default Tableau;