import React, { useState, useEffect } from 'react';
import Deck from '../components/Deck';
import WastePile from '../components/WastePile';
import Foundation from '../components/Foundation';
import Tableau from '../components/Tableau';
import { cards } from '../cards';

const Solitaire = () => {
  const [fnd1, setFnd1] = useState([]);
  const [tabl1, setTabl1] = useState([]);
  const [tabl2, setTabl2] = useState([]);
  const [tabl3, setTabl3] = useState([]);
  const [tabl4, setTabl4] = useState([]);
  const [tabl5, setTabl5] = useState([]);
  const [tabl6, setTabl6] = useState([]);
  const [tabl7, setTabl7] = useState([]);
  const [tabl1IsClicked, setTabl1IsClicked] = useState(false);
  const [tabl2IsClicked, setTabl2IsClicked] = useState(false);
  const [tabl3IsClicked, setTabl3IsClicked] = useState(false);
  const [tabl4IsClicked, setTabl4IsClicked] = useState(false);
  const [tabl5IsClicked, setTabl5IsClicked] = useState(false);
  const [tabl6IsClicked, setTabl6IsClicked] = useState(false);
  const [tabl7IsClicked, setTabl7IsClicked] = useState(false);
  const [clickedCards, setClickedCards] = useState([]);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  useEffect(() => {
    setTabl1([...tabl1, cards[0]]);
    // setTabl2([...tabl2, cards[1], cards[7]]);
    // setPile3(pile3 => pile3 = [cards[2], cards[8], cards[13]]);
    // setPile4(pile4 => pile4 = [cards[3], cards[9], cards[14], cards[18]]);
    // setPile5(pile5 => pile5 = [cards[4], cards[10], cards[15], cards[19], cards[22]]);
    // setPile6(pile6 => pile6 = [cards[5], cards[11], cards[16], cards[20], cards[23], cards[25]]);
    // setPile7(pile7 => pile7 = [cards[6], cards[12], cards[17], cards[21], cards[24], cards[26], cards[27]]);

  }, [setFnd1, setTabl1]);

  useEffect(() => {
    if (clickedCards.length === 2) {
      if (destination === origin) {
        setDestination(destination => destination = '');
        setOrigin(origin => origin = '');
        setClickedCards([]);
        return;
      }
    }
  })
  console.log('Solitaire: ', {origin}, {destination}, clickedCards.length);
  return (
    <div className="solitaire">
      <Deck />
      <WastePile />
      <Foundation />
      <Foundation />
      <Foundation />
      <Foundation />
      <Tableau 
        name="tabl1"
        cards={tabl1}
        isClicked={tabl1IsClicked}
        setIsClicked={setTabl1IsClicked}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
        setOrigin={setOrigin}
        setDestination={setDestination}
      />
      <Tableau 
        cards={tabl2}
        isClicked={tabl2IsClicked}
        setIsClicked={setTabl2IsClicked}
        clickedCards={clickedCards}
        setClickedCard={setClickedCards}
        setOrigin={setOrigin}
        setDestination={setDestination}/>
      <Tableau 
        cards={tabl3}
        isClicked={tabl3IsClicked}
        setIsClicked={setTabl3IsClicked}
        clickedCards={clickedCards}
        setClickedCard={setClickedCards}
        setOrigin={setOrigin}
        setDestination={setDestination}
      />
      <Tableau 
        cards={tabl4}
        isClicked={tabl4IsClicked}
        setIsClicked={setTabl4IsClicked}
        clickedCards={clickedCards}
        setClickedCard={setClickedCards}
        setOrigin={setOrigin}
        setDestination={setDestination}
      />
      <Tableau 
        cards={tabl5}
        isClicked={tabl5IsClicked}
        setIsClicked={setTabl5IsClicked}
        clickedCards={clickedCards}
        setClickedCard={setClickedCards}
        setOrigin={setOrigin}
        setDestination={setDestination}
      />
      <Tableau 
        cards={tabl6}
        isClicked={tabl6IsClicked}
        setIsClicked={setTabl6IsClicked}
        clickedCards={clickedCards}
        setClickedCard={setClickedCards}
        setOrigin={setOrigin}
        setDestination={setDestination}
      />
      <Tableau 
        cards={tabl7}
        isClicked={tabl7IsClicked}
        setIsClicked={setTabl7IsClicked}
        clickedCards={clickedCards}
        setClickedCard={setClickedCards}
        setOrigin={setOrigin}
        setDestination={setDestination}
      />
    </div>
  )
}

export default Solitaire;