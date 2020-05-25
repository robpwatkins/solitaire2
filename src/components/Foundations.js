import React, { useState} from 'react';
import Foundation from '../components/Foundation';

const Foundations = (props) => {
  const [fnd1Clicked, setFnd1Clicked] = useState(false);

  return (
    <>
      <Foundation
        cards={props.fnd1}
        setCards={props.setFnd1}
        clickedCard={props.clickedCard}
        setClickedCard={props.setClickedCard}
        isClicked={fnd1Clicked}
        setIsClicked={setFnd1Clicked}
        isInMove={props.isInMove}
        setIsInMove={props.setIsInMove}
      />
      {/* <Foundation /> */}
      {/* <Foundation /> */}
      {/* <Foundation /> */}
    </>
  )
}

export default Foundations;