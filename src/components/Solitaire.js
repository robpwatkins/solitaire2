import React, { useState, useEffect } from 'react';
import Deck from '../components/Deck';
import WastePile from '../components/WastePile';
import Foundation from '../components/Foundation';
import Pile from '../components/Pile';
import { cards } from '../cards';
import Card from '../components/Card';

const Solitaire = () => {
  const[foundation1, setFoundation1] = useState([]);
  // const[foundation2, setFoundation2] = useState([]);
  // const[foundation3, setFoundation3] = useState([]);
  // const[foundation4, setFoundation4] = useState([]);
  const [pile1, setPile1] = useState([]);
  const [pile2, setPile2] = useState([]);
  // const [pile3, setPile3] = useState([]);
  // const [pile4, setPile4] = useState([]);
  // const [pile5, setPile5] = useState([]);
  // const [pile6, setPile6] = useState([]);
  // const [pile7, setPile7] = useState([]);
  const [clickedCard, setClickedCard] = useState();

  useEffect(() => {
    setPile1(pile1 => pile1 = [cards[0]]);
    setPile2(pile2 => pile2 = [cards[1], cards[7]]);
    // setPile3(pile3 => pile3 = [cards[2], cards[8], cards[13]]);
    // setPile4(pile4 => pile4 = [cards[3], cards[9], cards[14], cards[18]]);
    // setPile5(pile5 => pile5 = [cards[4], cards[10], cards[15], cards[19], cards[22]]);
    // setPile6(pile6 => pile6 = [cards[5], cards[11], cards[16], cards[20], cards[23], cards[25]]);
    // setPile7(pile7 => pile7 = [cards[6], cards[12], cards[17], cards[21], cards[24], cards[26], cards[27]]);
  }, [setFoundation1, setPile1, setPile2]);

  return (
    <div className="solitaire">
      <Deck />
      <WastePile />
      <Foundation cards={foundation1} setCards={setFoundation1} />
      <Foundation />
      <Foundation />
      <Foundation />
      <Pile cards={pile1} setCards={setPile1} setClickedCard={setClickedCard} />
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