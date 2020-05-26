import React, { useEffect } from 'react';
import Card from '../components/Card';

const Tableau = (props) => {

  let topCard = props.cards[props.cards.length - 1];

  // useEffect(() => {
  //   if (props.clickedCards.length === 0) {
  //     props.setIsClicked(isClicked => isClicked = false);
  //   }
  // })

  const handleClick = () => {
    if (props.clickedCards.length === 0) {
      props.setIsClicked(isClicked => !isClicked);
      props.setOrigin(origin => origin = props.name);
    } else
    props.setDestination(destination => destination = props.name);
  }

  let tblClass = [
    'tableau',
    props.isClicked && 'clicked',
    props.cards.length === 0 && 'empty'
  ]
  tblClass = tblClass.join(' ')
  console.log('Cards', props.cards);
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