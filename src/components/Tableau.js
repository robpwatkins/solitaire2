import React from 'react';
import Card from '../components/Card';

const Tableau = (props) => {

  let topCard = props.cards[props.cards.length - 1];

  const handleClick = () => {
    props.setIsClicked(isClicked => !isClicked);
    if (props.clickedCards.length === 0) {
      props.setOrigin(props.name);
    } else {
      props.setDestination(props.name);
    }
  }

  let tblClass = [
    'tableau',
    props.isClicked && 'clicked',
    props.cards.length === 0 && 'empty'
  ]
  tblClass = tblClass.join(' ')

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