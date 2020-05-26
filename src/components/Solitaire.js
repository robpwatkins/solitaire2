import React, { useState, useEffect } from 'react';
import Deck from '../components/Deck';
import WastePile from '../components/WastePile';
import Foundation from '../components/Foundation';
import Tableau from '../components/Tableau';
import { cards } from '../cards';

const Solitaire = () => {
  // const [fnd1, setFnd1] = useState([]);
  const [tableau1, setTableau1] = useState([]);
  const [tableau2, setTableau2] = useState([]);
  // const [tableau3, setTableau3] = useState([]);
  // const [tableau4, setTableau4] = useState([]);
  // const [tableau5, setTableau5] = useState([]);
  // const [tableau6, setTableau6] = useState([]);
  // const [tableau7, setTableau7] = useState([]);
  const [tbl1IsClicked, setTbl1IsClicked] = useState(false);
  const [tbl2IsClicked, setTbl2IsClicked] = useState(false);
  // const [tbl3IsClicked, setTbl3IsClicked] = useState(false);
  // const [tbl4IsClicked, setTbl4IsClicked] = useState(false);
  // const [tbl5IsClicked, setTbl5IsClicked] = useState(false);
  // const [tbl6IsClicked, setTbl6IsClicked] = useState(false);
  // const [tbl7IsClicked, setTbl7IsClicked] = useState(false);
  const [clickedCards, setClickedCards] = useState([]);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [moveSuccessful, setMoveSuccessful] = useState(false);

  useEffect(() => {
    setTableau1(tableau1 => tableau1 = [cards[0]]);
    setTableau2(tableau2 => tableau2 = [cards[1], cards[7]]);
    // setPile3(pile3 => pile3 = [cards[2], cards[8], cards[13]]);
    // setTableau3([]);
    // setPile4(pile4 => pile4 = [cards[3], cards[9], cards[14], cards[18]]);
    // setTableau4([]);
    // setPile5(pile5 => pile5 = [cards[4], cards[10], cards[15], cards[19], cards[22]]);
    // setTableau5([]);
    // setPile6(pile6 => pile6 = [cards[5], cards[11], cards[16], cards[20], cards[23], cards[25]]);
    // setTableau6([]);
    // setPile7(pile7 => pile7 = [cards[6], cards[12], cards[17], cards[21], cards[24], cards[26], cards[27]]);
    // setTableau7([]);

  }, [setTableau1, setTableau2/*, setTableau3, setTableau4, setTableau5, setTableau6, setTableau7*/]);

  useEffect(() => {
    if (clickedCards.length === 2) {
      if (destination === origin) {
        setDestination(destination => destination = '');
        setOrigin(origin => origin = '');
        setClickedCards([]);
        return;
      }
      if (destination.includes('tableau')) {
        if (clickedCards[0].rank === clickedCards[1].rank - 1) {
          let originColor, destinationColor;
          if (clickedCards[0].suit === 'Hearts!' || clickedCards[0].suit === 'Diamonds!') {
            originColor = 'r';
          } else originColor = 'b';
          if (clickedCards[1].suit === 'Hearts!' || clickedCards[1].suit === 'Diamonds!') {
            destinationColor = 'r';
          } else destinationColor = 'b';
          if (originColor !== destinationColor) {
            setMoveSuccessful(moveSuccessful => moveSuccessful = true);
            // setClickedCards([]);
          } else {
            // setMoveSuccessful(moveSuccessful => moveSuccessful = false);
            setClickedCards([]);
          }
        } else {
          setClickedCards([]);
          return;
        }
      }
    }
  }, [setDestination, destination, setOrigin, origin, clickedCards])
  // console.log('Solitaire: ', {origin}, {destination}, clickedCards.length);
  return (
    <div className="solitaire">
      <Deck />
      <WastePile />
      <Foundation />
      <Foundation />
      <Foundation />
      <Foundation />
      <Tableau 
        name="tableau1"
        cards={tableau1}
        setCards={setTableau1}
        isClicked={tbl1IsClicked}
        setIsClicked={setTbl1IsClicked}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
        setOrigin={setOrigin}
        setDestination={setDestination}
        moveSuccessful={moveSuccessful}
        setMoveSuccessful={setMoveSuccessful}
      />
      <Tableau
        name="tableau2"
        cards={tableau2}
        setCards={setTableau2}
        isClicked={tbl2IsClicked}
        setIsClicked={setTbl2IsClicked}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
        setOrigin={setOrigin}
        setDestination={setDestination}
        moveSuccessful={moveSuccessful}
        setMoveSuccessful={setMoveSuccessful}
      />
      {/* <Tableau
        name="tableau3"
        cards={tableau3}
        isClicked={tbl3IsClicked}
        setIsClicked={setTbl3IsClicked}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
        setOrigin={setOrigin}
        setDestination={setDestination}
      />
      <Tableau
        name="tabeaul4"
        cards={tableau4}
        isClicked={tbl4IsClicked}
        setIsClicked={setTbl4IsClicked}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
        setOrigin={setOrigin}
        setDestination={setDestination}
      />
      <Tableau
        name="tableau5"
        cards={tableau5}
        isClicked={tbl5IsClicked}
        setIsClicked={setTbl5IsClicked}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
        setOrigin={setOrigin}
        setDestination={setDestination}
      />
      <Tableau
        name="tableau6"
        cards={tableau6}
        isClicked={tbl6IsClicked}
        setIsClicked={setTbl6IsClicked}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
        setOrigin={setOrigin}
        setDestination={setDestination}
      />
      <Tableau
        name="tableau7"
        cards={tableau7}
        isClicked={tbl7IsClicked}
        setIsClicked={setTbl7IsClicked}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
        setOrigin={setOrigin}
        setDestination={setDestination}
      /> */}
    </div>
  )
}

export default Solitaire;