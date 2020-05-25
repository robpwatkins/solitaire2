import React, { useState, useEffect } from 'react';
import Pile from '../components/Pile';

const Tableau = (props) => {
  const [pile1Clicked, setPile1Clicked] = useState(null);
  const [pile2Clicked, setPile2Clicked] = useState(null);

  useEffect(() => {
  })
  
  return (
    <>
      <Pile
        name="pile1"
        cards={props.pile1}
        setCards={props.setPile1}
        clickedCard={props.clickedCard}
        setClickedCard={props.setClickedCard}
        isClicked={pile1Clicked}
        setIsClicked={setPile1Clicked}
        isInMove={props.isInMove}
        setIsInMove={props.setIsInMove}
      />
      <Pile
        name="pile2"
        cards={props.pile2}
        setCards={props.setPile2}
        clickedCard={props.clickedCard}
        setClickedCard={props.setClickedCard}
        isClicked={pile2Clicked}
        setIsClicked={setPile2Clicked}
        isInMove={props.isInMove}
        setIsInMove={props.setIsInMove} 
      />
      {/* <Pile /> */}
      {/* <Pile /> */}
      {/* <Pile /> */}
      {/* <Pile /> */}
      {/* <Pile /> */}
    </>
  )
}

export default Tableau;