import React, { useState } from 'react';
import Deck from '../components/Deck';
import WastePile from '../components/WastePile';
import Foundation from '../components/Foundation';
import Pile from '../components/Pile';
import { cards } from '../cards';

const Solitaire = () => {

  let cardArr = [];
  cardArr.push(cards[0], cards[1]);

  return (
    <div className="solitaire">
      <Deck />
      <WastePile />
      <Foundation />
      <Foundation />
      <Foundation />
      <Foundation />
      <Pile cards={cardArr} />
      {/* <Pile /> */}
      {/* <Pile /> */}
      {/* <Pile /> */}
      {/* <Pile /> */}
      {/* <Pile /> */}
      {/* <Pile /> */}
    </div>
  )
}

export default Solitaire;